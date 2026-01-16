import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Weaver = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [112.2348, 39.3136, 287.5304, 433.3728]
          : [124.2343, 51.3125, 263.5313, 409.375]
      }
    >
      <defs>
        <RadialGradient
          id='Weaver_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={226.617}
          cy={185.8872}
          fx={269.9943}
          fy={51.3125}
          dx={282.8079}
          dy={217.7514}
          rotate={-72.1347}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Weaver_shading2'
          viewBox={[0, 0, 512, 512]}
          cx={226.617}
          cy={185.8872}
          fx={183.2443}
          fy={320.4525}
          dx={282.8079}
          dy={217.7514}
          rotate={-72.1347}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Weaver_segment1'
          d='M289.1143,161.1525c-8.8655,14.1859-38.3068,56.3307-66.4,92.27l32.28,32.27c-11.74,5.42-23.42,10.95-35.04,16.58l-69.63-69.63c32.7426-36.963,65.8848-77.9614,97.35-121.2,13.5271-18.1651,20.9752-38.8559,22.32-60.13,10.0217,14.1605,18.3986,29.6363,24.8,45.76,8.7183,21.6165,5.9841,45.4614-5.68,64.08ZM142.6643,241.2525c-6.09,6.79-12.23,13.52-18.43,20.19l59.01,59.01c8.56-4.34,17.15-8.63,25.77-12.85l-66.35-66.35Z'
        />
        <clipPath id='Weaver_segment1_clip'>
          <use href='#Weaver_segment1' />
        </clipPath>
        <g
          clip-path='url(#Weaver_segment1_clip)'
          id='Weaver_segment1_composite'
        >
          <Rectangle />
          <Show when={options.stroke}>
            <g fill='none'>
              <use
                {...strokeWidth.x1}
                href='#Weaver_segment1'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Weaver_segment1'
                stroke={props.palette.Dark}
              />
            </g>
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M396.2505,242.0723l-59.0098-59.0098c-3.6693-3.6693-9.2839-4.5642-13.9121-2.2173l-49.915,24.5171c11.6641-16.3701,21.1826-30.3389,25.8696-37.8389,14.043-22.415,16.5254-50.4307,6.6646-74.8789-6.7827-17.084-15.5835-33.3223-26.1582-48.2646-6.5211-9.2145-21.0591-5.0903-21.771,6.1758-1.2158,19.2334-8.1206,37.8096-19.9683,53.7197-.0264.0352-.0527.0703-.0791.1064-30.3496,41.7061-62.8604,82.1816-96.6289,120.3037-5.1883,5.8548-13.8934,15.6725-25.8975,28.5869-4.3955,4.73-4.2607,12.0894.3047,16.6553l59.0098,59.0098c3.6693,3.6693,9.2839,4.5642,13.9121,2.2173l49.915-24.5171c-11.6641,16.3701-21.1826,30.3389-25.8696,37.8389-14.043,22.415-16.5254,50.4307-6.6646,74.8789,6.7827,17.084,15.5835,33.3223,26.1582,48.2646,6.5211,9.2145,21.0591,5.0903,21.771-6.1758,1.2158-19.2334,8.1206-37.8096,19.9683-53.7197.0264-.0352.0527-.0703.0791-.1064,30.3496-41.7061,62.8604-82.1816,96.6289-120.3037,5.1883-5.8548,13.8934-15.6725,25.8975-28.5869,4.3955-4.73,4.2607-12.0894-.3047-16.6553Z'
        />
      </Show>
      <use
        fill={options.shading ? 'url(#Weaver_shading1)' : props.palette.Flat}
        href='#Weaver_segment1_composite'
      />
      <use
        fill={options.shading ? 'url(#Weaver_shading2)' : props.palette.Flat}
        href='#Weaver_segment1_composite'
        transform='rotate(180 256 256)'
      />
    </Icon>
  );
};
