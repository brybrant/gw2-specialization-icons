import { createMemo, For, Show } from 'solid-js';

import { useOptions } from '../../options.ts';

import type { Stop, ViewBox } from '../svg.tsx';

/** 57.295779513082320876798154814105 */
const DEGREE = 180 / Math.PI;

/**
 * Create an SVG `<linearGradient>` for a specific `objectBoundingBox`.
 * This converts absolute coordinates to relative coordinates.
 */
type LinearGradientProps = {
  /** Unique ID */
  id: string;
  /** objectBoundingBox */
  viewBox: ViewBox;
  /**
   * Gradient X start (0..1)
   * @default 0
   */
  x1?: number;
  /**
   * Gradient Y start (0..1)
   * @default 0
   */
  y1?: number;
  /**
   * Gradient X end (0..1)
   * @default 1
   */
  x2?: number;
  /**
   * Gradient Y end (0..1)
   * @default 0
   */
  y2?: number;
  /**
   * https://mdn.io/spreadMethod
   * @default 'pad'
   */
  spreadMethod?: 'reflect' | 'repeat';
  /** Gradient color stops */
  stops: [Stop, Stop, ...Stop[]];
};

export const LinearGradient = (props: LinearGradientProps) => {
  const options = useOptions();

  const x1 = createMemo(() => props.x1 ?? props.viewBox[0]);
  const y1 = createMemo(() => props.y1 ?? props.viewBox[1]);
  const x2 = createMemo(() => props.x2 ?? props.viewBox[2]);
  const y2 = createMemo(() => props.y2 ?? props.viewBox[1]);

  const length = createMemo(() =>
    Math.sqrt(Math.pow(x2() - x1(), 2) + Math.pow(y2() - y1(), 2)),
  );

  const translateX = () => (x1() - props.viewBox[0]) / props.viewBox[2];
  const translateY = () => (y1() - props.viewBox[1]) / props.viewBox[3];

  const scaleX = () => length() / props.viewBox[2];
  const scaleY = () => length() / props.viewBox[3];

  const angle = () => Math.atan2(y2() - y1(), x2() - x1()) * DEGREE;

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
          {(stop, stopIndex) => {
            const index = stopIndex(); // eslint-disable-line solid/reactivity

            const offset = stop.offset ?? index / (props.stops.length - 1);

            return (
              <stop
                offset={index === 0 && offset === 0 ? undefined : offset}
                stop-color={stop.color}
                stop-opacity={stop.opacity}
              />
            );
          }}
        </For>
      </linearGradient>
    </Show>
  );
};
