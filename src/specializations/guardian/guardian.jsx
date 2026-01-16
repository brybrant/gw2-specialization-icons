import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Guardian = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [99.3648, 64.6083, 313.2705, 388.5273]
          : [111.3656, 76.5766, 289.2688, 364.5596]
      }
    >
      <defs>
        <RadialGradient
          id='Guardian_shading'
          viewBox={[0, 0, 512, 512]}
          cy={113.226}
          dx={459.0633}
          dy={655.8204}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Guardian_icon'
          d='M400.6344,113.226c-90.1048-48.9611-199.5148-48.7705-289.2688,0,3.1054,66.2617,9.4866,130.9569,18.1514,190.9292.3155,2.1835,45.3966,77.2335,126.483,136.9809,79.1917-58.3513,126.0517-133.9958,126.483-136.9809,8.6673-59.9892,15.0456-124.6581,18.1514-190.9292ZM287.9278,278.984c-11.5872,35.1185-22.2298,70.6463-31.9278,106.573-9.698-35.9266-20.3406-71.4545-31.9278-106.573-15.5021.1785-30.9727.4933-46.4223.9341,12.6893-9.2781,24.9692-19.0706,36.8188-29.3668-3.7794-10.9195-7.649-21.7957-11.6067-32.6286-5.3394-14.6148-3.6278-30.9419,4.6481-44.1181,16.2039-25.7984,32.2621-50.0428,48.4899-73.4357,16.2287,23.3941,32.2867,47.6384,48.4899,73.4357,8.2874,13.1944,9.9949,29.483,4.6481,44.1181-3.9577,10.8329-7.8273,21.7091-11.6067,32.6286,11.8496,10.2962,24.1295,20.0887,36.8188,29.3668-15.4496-.4408-30.9202-.7557-46.4223-.9341ZM286.2465,213.7757l-30.2465,75.5989-30.2466-75.599c-8.543-21.3367,7.189-44.6755,30.2466-44.6755,23.0757,0,38.7814,23.3589,30.2465,44.6756Z'
        />
        <clipPath id='Guardian_clip'>
          <use href='#Guardian_icon' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M406.3643,102.6821c-93.4244-50.765-207.3042-50.7651-300.7285,0-4.042,2.1963-6.4727,6.5103-6.2578,11.106,3.0244,64.5176,9.1689,129.144,18.2617,192.083.292,2.0186.6553,4.5293,10.7422,19.46,28.9083,42.7761,72.932,90.4162,120.5,125.4658,4.2316,3.1184,10.0047,3.1185,14.2363,0,47.568-35.0496,91.5917-82.6898,120.5-125.4658,10.0869-14.9307,10.4502-17.4414,10.7422-19.46,9.0928-62.939,15.2373-127.5654,18.2617-192.083.2148-4.5957-2.2158-8.9097-6.2578-11.106Z'
        />
      </Show>
      <g clip-path='url(#Guardian_clip)'>
        <Rectangle
          fill={options.shading ? 'url(#Guardian_shading)' : props.palette.Flat}
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Guardian_icon'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Guardian_icon'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
