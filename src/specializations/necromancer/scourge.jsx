import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Scourge = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [57.1895, 52.3599, 397.621, 407.2802]
          : [69.19, 64.36, 373.62, 383.28]
      }
    >
      <defs>
        <RadialGradient
          id='Scourge_shading'
          viewBox={[0, 0, 512, 512]}
          fx={224.0886}
          fy={98.7722}
          dx={392.2205}
          dy={535.3582}
          rotate={45}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Scourge_segment'
          d='M122.73,327.46c-14.6-23.05-23.05-50.37-23.05-79.66,0-82.3415,66.7485-149.09,149.09-149.09,30.7558,0,59.5339,9.3167,83.52,25.57,10.0543-3.3708,21.2144-5.2936,32.64-5.39L69.19,447.64c71.3962-104.9668,147.1226-207.0256,223.16-301.8-47.58-16.15-102.31-5.26-140.24,32.67-62.0301,62.0301-34.2793,137.2436-29.38,148.95Z'
        />
        <g id='Scourge_icon'>
          <use href='#Scourge_segment' />
          <use href='#Scourge_segment' transform='rotate(180 256 256)' />
        </g>
        <clipPath id='Scourge_clip'>
          <use href='#Scourge_segment' />
          <use href='#Scourge_segment' transform='rotate(180 256 256)' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M450.2139,54.9165c-4.9672-3.8942-12.1032-3.2757-16.3252,1.418l-56.9854,63.3452c.4593-6.9094-5.0336-12.7896-11.9736-12.7896-.0332,0-.0674,0-.1006.0005-10.3457.0869-20.8389,1.5576-30.6807,4.2793-25.6283-16.0552-55.1369-24.46-85.3789-24.46-88.8252,0-161.0898,72.2646-161.0898,161.0898,0,36.7631,12.4475,72.3433,35.7245,101.1551-21.7835,30.4568-43.1808,61.1271-64.1366,91.9362-3.5498,5.2197-2.4492,12.2974,2.5186,16.1924,4.9672,3.8942,12.1032,3.2757,16.3252-1.418l56.9854-63.3452c-.4593,6.9094,5.0336,12.7896,11.9736,12.7896.0332,0,.0674,0,.1006-.0005,10.3457-.0869,20.8389-1.5576,30.6807-4.2793,25.6283,16.0552,55.1369,24.46,85.3789,24.46,88.8252,0,161.0898-72.2646,161.0898-161.0898,0-36.7631-12.4475-72.3433-35.7245-101.1551,21.7835-30.4568,43.1808-61.1271,64.1366-91.9362,3.5498-5.2197,2.4492-12.2974-2.5186-16.1924Z'
        />
      </Show>
      <g clip-path='url(#Scourge_clip)'>
        <Rectangle
          fill={options.shading ? 'url(#Scourge_shading)' : props.palette.Flat}
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Scourge_icon'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Scourge_icon'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
