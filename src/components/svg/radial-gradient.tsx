import { createMemo, DEV, For, Show } from 'solid-js';

import { useOptions } from '../../options.ts';

import type { Stop, ViewBox } from '../svg.tsx';

/** 0.01745329251994329576923690768489 */
const RADIAN = Math.PI / 180;

/**
 * Create an SVG `<radialGradient>` for a specific `objectBoundingBox`.
 *
 * This converts absolute coordinates to relative coordinates.
 */
type RadialGradientProps = {
  /** Unique ID */
  id: string;
  /** objectBoundingBox */
  viewBox: ViewBox;
  /**
   * Gradient X center *(absolute coordinate)*
   * @default `viewBox` center X
   */
  cx?: number;
  /**
   * Gradient Y center *(absolute coordinate)*
   * @default `viewBox` center Y
   */
  cy?: number;
  /**
   * Gradient X focus center *(absolute coordinate)*
   * @default `cx`
   */
  fx?: number;
  /**
   * Gradient Y focus center *(absolute coordinate)*
   * @default `cy`
   */
  fy?: number;
  /**
   * Gradient focus radius (0..1)
   * @default 0
   */
  fr?: number;
  /** @default 'pad' */
  spreadMethod?: 'reflect' | 'repeat';
  /**
   * Gradient X diameter
   * @default `viewBox` width
   */
  dx?: number;
  /**
   * Gradient Y diameter
   * @default `viewBox` height
   */
  dy?: number;
  /** Gradient rotation (in degrees, not radians) */
  rotate?: number;
  /** Gradient color stops */
  stops: [Stop, Stop, ...Stop[]];
};

export const RadialGradient = (props: RadialGradientProps) => {
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

  const translateX = () => (cx() - props.viewBox[0]) / props.viewBox[2];
  const translateY = () => (cy() - props.viewBox[1]) / props.viewBox[3];

  const scaleX = createMemo(() => dx() / props.viewBox[2]);
  const scaleY = createMemo(() => dy() / props.viewBox[3]);

  const focusDeltaX = createMemo(() => (props.fx ?? cx()) - cx());
  const focusDeltaY = createMemo(() => (props.fy ?? cy()) - cy());

  const sin = createMemo(() => Math.sin(RADIAN * -(props.rotate ?? 0)));
  const cos = createMemo(() => Math.cos(RADIAN * -(props.rotate ?? 0)));

  const fx = () => {
    if (props.fx === undefined && props.fy === undefined) return;

    return (
      (focusDeltaX() * cos() - focusDeltaY() * sin()) /
      props.viewBox[2] /
      scaleX()
    );
  };

  const fy = () => {
    if (props.fy === undefined && props.fx === undefined) return;

    return (
      (focusDeltaX() * sin() + focusDeltaY() * cos()) /
      props.viewBox[3] /
      scaleY()
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

      transformation.push(`rotate(${props.rotate})`);
    }

    transformation.push(`scale(${scaleX()} ${scaleY()})`);

    return transformation.join(' ');
  };

  return (
    <Show when={options.shading}>
      <radialGradient
        id={props.id}
        cx={0}
        cy={0}
        fx={fx()}
        fy={fy()}
        fr={props.fr}
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
      </radialGradient>
    </Show>
  );
};
