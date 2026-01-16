import { createMemo, For, Show } from 'solid-js';

import { degree, fourDecimals, useOptions } from '../const';

/**
 * Create an SVG `<linearGradient>` for a specific `objectBoundingBox`.
 * This converts absolute coordinates to relative coordinates.
 * @param {Object} props
 * @param {String} props.id Unique ID
 * @param {[Number, Number, Number, Number]} props.viewBox objectBoundingBox
 * @param {Number} [props.x1] Gradient X start *(default = `0%`)*
 * @param {Number} [props.y1] Gradient Y start *(default = `0%`)*
 * @param {Number} [props.x2] Gradient X end *(default = `100%`)*
 * @param {Number} [props.y2] Gradient Y end *(default = `0%`)*
 * @param {'reflect'|'repeat'} [props.spreadMethod] Default = "pad"
 * @param {import('../const.js').Stop[]} props.stops Gradient color stops
 */
export function LinearGradient(props) {
  const options = useOptions();

  const x1 = createMemo(() => props.x1 ?? props.viewBox[0]);
  const y1 = createMemo(() => props.y1 ?? props.viewBox[1]);
  const x2 = createMemo(() => props.x2 ?? props.viewBox[2]);
  const y2 = createMemo(() => props.y2 ?? props.viewBox[1]);

  const length = createMemo(() =>
    Math.sqrt(Math.pow(x2() - x1(), 2) + Math.pow(y2() - y1(), 2)),
  );

  const translateX = () =>
    fourDecimals((x1() - props.viewBox[0]) / props.viewBox[2]);
  const translateY = () =>
    fourDecimals((y1() - props.viewBox[1]) / props.viewBox[3]);

  const scaleX = () => fourDecimals(length() / props.viewBox[2]);
  const scaleY = () => fourDecimals(length() / props.viewBox[3]);

  const angle = () =>
    fourDecimals(Math.atan2(y2() - y1(), x2() - x1()) * degree);

  const transform = () => {
    const transformation = [];

    if (x1() !== props.viewBox[0] || y1() !== props.viewBox[1]) {
      transformation.push(`translate(${translateX()} ${translateY()})`);
    }

    transformation.push(`scale(${scaleX()} ${scaleY()})`);

    if (x1() > x2() || y1() !== y2()) {
      transformation.push(`rotate(${angle()})`);
    }

    return transformation.join(' ');
  };

  return (
    <Show when={options.shading}>
      <linearGradient
        id={props.id}
        spreadMethod={props.spreadMethod}
        gradientTransform={transform()}
      >
        <For each={props.stops}>
          {(stop, stopIndex) => (
            <stop
              offset={fourDecimals(
                stop.offset ?? stopIndex() / (props.stops.length - 1),
              )}
              stop-color={stop.color}
              stop-opacity={stop.opacity}
            />
          )}
        </For>
      </linearGradient>
    </Show>
  );
}
