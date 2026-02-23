import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { ellipse, outlineStyle, strokeWidth, useOptions } from '../../const';

/** @param {number} angle */
const rotate = (angle) => `rotate(${angle} 256 284.1362)`;

/**
 * @param {object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Holosmith = (props) => {
  const options = useOptions();

  const Normal = () => (
    <Icon
      viewBox={
        options.outline
          ? [56.1423, 64.6802, 399.7155, 355.7198]
          : [68.1493, 76.68, 375.7015, 331.7352]
      }
    >
      <defs>
        <RadialGradient
          id='Holosmith_shading'
          viewBox={[0, 0, 512, 512]}
          cy={284.1362}
          dx={415.7974}
          dy={415.7974}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Holosmith_segment_stroke1'
          d='M275.519,117.289v-32.609c0-7.4194-.5806-8-8-8h-23.038c-7.4194,0-8,.5806-8,8v32.609c-34.3339,8.6962-59.7405,39.7937-59.7405,76.831,0,43.7738,35.4857,79.2595,79.2595,79.2595s79.2595-35.4857,79.2595-79.2595c0-37.0373-25.4067-68.1348-59.7405-76.831Z'
        />
        <Rectangle
          id='Holosmith_segment_stroke2'
          d={ellipse(256, 194.12, 43.9876)}
        />
        <path
          id='Holosmith_center'
          d='M269.28,276.47c-5.6201,6.91-10.11,14.69-13.28,23.02-3.17-8.33-7.66-16.11-13.28-23.02,8.79,1.41,17.77,1.41,26.5601,0Z'
        />
        <ellipse
          id='Holosmith_segment_mask'
          cx={256}
          cy={174.308}
          rx={87.49825}
          ry={99.24445}
        />
        <clipPath id='Holosmith_segment_clip1'>
          <use href='#Holosmith_segment_stroke1' />
        </clipPath>
        <clipPath id='Holosmith_segment_clip2'>
          <use href='#Holosmith_segment_stroke2' />
        </clipPath>
        <clipPath id='Holosmith_segment_mask_clip'>
          <use href='#Holosmith_segment_mask' />
        </clipPath>
        <clipPath id='Holosmith_center_clip'>
          <use href='#Holosmith_center' />
        </clipPath>
        <g
          id='Holosmith_segment_composite'
          clip-path='url(#Holosmith_segment_clip1)'
        >
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x05}
              href='#Holosmith_segment_stroke2'
              stroke={props.palette.Dark}
            />
          </Show>
          <g clip-path='url(#Holosmith_segment_clip2)'>
            <Rectangle
              fill={
                options.shading ? 'url(#Holosmith_shading)' : props.palette.Flat
              }
            />
            <Show when={options.stroke}>
              <g {...strokeWidth.x05} stroke={props.palette.Highlight}>
                <use href='#Holosmith_segment_stroke2' />
                <use {...strokeWidth.x1} href='#Holosmith_segment_stroke1' />
                <use
                  href='#Holosmith_segment_stroke1'
                  stroke={props.palette.Dark}
                />
              </g>
            </Show>
          </g>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M444.4941,356.5674l-20.5884-11.8857c9.6409-55.3705-32.712-105.55-87.8379-106.7759,26.5371-48.4626,4.1453-110.145-48.5488-129.4531v-23.7725c0-13.8009-5.4377-20-20-20h-23.0381c-14.5623,0-20,6.1991-20,20v23.7725c-52.6942,19.3081-75.0859,80.9905-48.5488,129.4531-55.1259,1.2258-97.4788,51.4053-87.8379,106.7759l-20.5884,11.8857c-12.6353,7.2975-14.2051,15.3957-7.3198,27.3213l11.5186,19.9502c9.8503,17.0644,21.1371,10.8912,27.3208,7.3223l20.6016-11.8945c43.3253,35.9905,107.7401,24.4327,136.373-22.6787,28.633,47.1115,93.0477,58.6693,136.373,22.6787l20.6016,11.8945c6.1837,3.5689,17.4705,9.7421,27.3208-7.3223l11.5186-19.9502c6.8853-11.9256,5.3155-20.0237-7.3198-27.3213Z'
        />
      </Show>
      <use href='#Holosmith_segment_composite' />
      <use href='#Holosmith_segment_composite' transform={rotate(120)} />
      <use href='#Holosmith_segment_composite' transform={rotate(240)} />
      <g clip-path='url(#Holosmith_center_clip)'>
        <Rectangle
          fill={
            options.stroke
              ? props.palette.Dark
              : options.shading
                ? 'url(#Holosmith_shading)'
                : props.palette.Flat
          }
        />
      </g>
    </Icon>
  );

  return (
    <Show when={options.tiny} fallback={<Normal />}>
      <Icon fill={props.palette.Flat}>
        <defs>
          <Rectangle
            id='Holosmith_tiny_mask'
            width={32}
            height={32}
            d={ellipse(16, 11, 4)}
          />
          <clipPath id='Holosmith_tiny_clip'>
            <use href='#Holosmith_tiny_mask' />
          </clipPath>
          <g id='Holosmith_tiny_composite'>
            <circle
              clip-path='url(#Holosmith_tiny_clip)'
              cx={16}
              cy={11}
              r={7}
            />
            <path d='M14,1s1-1,2-1,2,1,2,1v4h-4V1Z' />
          </g>
        </defs>
        <use href='#Holosmith_tiny_composite' />
        <use href='#Holosmith_tiny_composite' transform='rotate(120 16 19)' />
        <use href='#Holosmith_tiny_composite' transform='rotate(240 16 19)' />
      </Icon>
    </Show>
  );
};
