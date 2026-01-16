import { createMemo, DEV, For, Show } from 'solid-js';

import { fourDecimals, radian, useOptions } from '../const';

/**
 * Create an SVG `<radialGradient>` for a specific `objectBoundingBox`.
 * This converts absolute coordinates to relative coordinates.
 * @param {Object} props
 * @param {String} props.id Unique ID
 * @param {[Number, Number, Number, Number]} props.viewBox objectBoundingBox
 * @param {Number} [props.cx] Gradient X center *(default = `viewBox` center X)*
 * @param {Number} [props.cy] Gradient Y center *(default = `viewBox` center Y)*
 * @param {Number} [props.fx] Gradient X focus center *(defaults to `cx`)*
 * @param {Number} [props.fy] Gradient Y focus center *(defaults to `cy`)*
 * @param {Number} [props.fr] Gradient focus radius *(defaults to `0`)*
 * @param {'reflect'|'repeat'} [props.spreadMethod] Default = "pad"
 * @param {Number} [props.dx] Gradient X diameter *(default = `viewBox` width)*
 * @param {Number} [props.dy] Gradient Y diameter *(default = `viewBox` height)*
 * @param {Number} [props.rotate] Gradient rotation (in degrees, not radians)
 * @param {import('../const.js').Stop[]} props.stops Gradient color stops
 */
export function RadialGradient(props) {
  const options = useOptions();

  const viewBoxCenterX = createMemo(
    () => props.viewBox[0] + props.viewBox[2] / 2,
  );

  const viewBoxCenterY = createMemo(
    () => props.viewBox[1] + props.viewBox[3] / 2,
  );

  const cx = createMemo(() => props.cx ?? viewBoxCenterX());
  const cy = createMemo(() => props.cy ?? viewBoxCenterY());

  const dx = () => props.dx ?? props.viewBox[2];
  const dy = () => props.dy ?? props.viewBox[3];

  const translateX = () =>
    fourDecimals((cx() - props.viewBox[0]) / props.viewBox[2]);
  const translateY = () =>
    fourDecimals((cy() - props.viewBox[1]) / props.viewBox[3]);

  const scaleX = createMemo(() => dx() / props.viewBox[2]);
  const scaleY = createMemo(() => dy() / props.viewBox[3]);

  const focusDeltaX = createMemo(() => (props.fx ?? cx()) - cx());
  const focusDeltaY = createMemo(() => (props.fy ?? cy()) - cy());

  const sin = createMemo(() => Math.sin(radian * -(props.rotate ?? 0)));
  const cos = createMemo(() => Math.cos(radian * -(props.rotate ?? 0)));

  const fx = () => {
    if (props.fx === undefined && props.fy === undefined) return null;

    return fourDecimals(
      (focusDeltaX() * cos() - focusDeltaY() * sin()) /
        props.viewBox[2] /
        scaleX(),
    );
  };

  const fy = () => {
    if (props.fy === undefined && props.fx === undefined) return null;

    return fourDecimals(
      (focusDeltaX() * sin() + focusDeltaY() * cos()) /
        props.viewBox[3] /
        scaleY(),
    );
  };

  const transform = () => {
    const transformation = [];

    if (cx() !== props.viewBox[0] || cy() !== props.viewBox[1]) {
      transformation.push(`translate(${translateX()} ${translateY()})`);
    }

    if (props.rotate) {
      if (DEV && props.viewBox[2] !== props.viewBox[3]) {
        console.warn(
          `Radial gradient rotations only display properly within square objectBoundingBoxes! (${props.id})`,
        );
      }

      transformation.push(`rotate(${fourDecimals(props.rotate)})`);
    }

    transformation.push(
      `scale(${fourDecimals(scaleX())} ${fourDecimals(scaleY())})`,
    );

    return transformation.join(' ');
  };

  return (
    <Show when={options.shading}>
      <radialGradient
        id={props.id}
        cx='0'
        cy='0'
        fx={fx()}
        fy={fy()}
        fr={props.fr}
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
      </radialGradient>
    </Show>
  );
}
