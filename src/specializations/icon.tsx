import { createMemo, type ParentComponent } from 'solid-js';

import { useOptions } from '../options.ts';

import type { ViewBox } from '../components/svg.tsx';

import type { Color } from '../palettes.ts';

type IconProps = {
  viewBox: ViewBox;
};

export const Icon: ParentComponent<IconProps> = (props) => {
  const options = useOptions();

  const cropSquare = createMemo<ViewBox>(() => {
    const centerX = props.viewBox[0] + props.viewBox[2] / 2;

    const centerY = props.viewBox[1] + props.viewBox[3] / 2;

    const dimension = Math.max(props.viewBox[2], props.viewBox[3]);

    const marginX = centerX - dimension / 2;

    const marginY = centerY - dimension / 2;

    return [marginX, marginY, dimension, dimension];
  });

  const viewbox = (): ViewBox => {
    if (!options.crop) return [0, 0, 512, 512];

    if (!options.square) return props.viewBox;

    return cropSquare();
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewbox().join(' ')}
      data-viewbox={cropSquare().join(' ')}
      fill='none'
      stroke-linecap={options.stroke ? 'round' : undefined}
      stroke-linejoin={options.stroke ? 'round' : undefined}
    >
      {props.children}
    </svg>
  );
};

type TinyIconProps = {
  fill: Color;
};

export const TinyIcon: ParentComponent<TinyIconProps> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' {...props}>
    {props.children}
  </svg>
);
