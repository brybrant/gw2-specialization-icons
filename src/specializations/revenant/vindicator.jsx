import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { LinearGradient } from '../../components/linear-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Vindicator = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [53.5825, 49.8559, 404.835, 414.2037]
          : [65.69, 61.89, 380.62, 390.15]
      }
    >
      <defs>
        <LinearGradient
          id='Vindicator_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={235.06}
          y1={452.04}
          x2={92.2831}
          y2={400.0734}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Vindicator_segment1_shading2'
          viewBox={[177.6322, 220.0815, 252.304, 252.304]}
          x1={235.06}
          y1={452.04}
          x2={248.3024}
          y2={300.6782}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <RadialGradient
          id='Vindicator_segment1_shading3'
          viewBox={[143.1429, 256.1565, 88.33, 88.33]}
          cx={221.1389}
          cy={162.5986}
          dx={371.9}
          dy={371.9}
          stops={[
            { color: props.palette.Shadow, offset: 0.7 },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Vindicator_segment1_shading4'
          viewBox={[71.5514, 13.0111, 299.175, 299.175]}
          fx={188.63}
          fy={231.32}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Vindicator_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={237.55}
          y1={61.89}
          x2={249.0251}
          y2={193.0515}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral, offset: 0.2 },
            { color: props.palette.Midtone, offset: 0.5 },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Vindicator_segment2_shading2'
          viewBox={[169.6769, 42.8028, 275.842, 275.842]}
          x1={237.55}
          y1={61.89}
          x2={152.919}
          y2={162.7493}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Vindicator_segment2_shading3'
          viewBox={[134.1034, 134.9965, 148.806, 148.806]}
          dx={170}
          dy={170}
          stops={[
            { color: props.palette.Midtone, offset: 0.55 },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Vindicator_segment3_shading1'
          viewBox={[0, 0, 512, 512]}
          cy={213.6594}
          fy={144.42}
          dx={560.7291}
          dy={203.2025}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone, offset: 0.4 },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Vindicator_segment3_shading2'
          viewBox={[131.3765, 193.8087, 249.247, 249.247]}
          cy={102.5637}
          dx={363.2327}
          dy={363.2327}
          stops={[
            { color: props.palette.Shadow, offset: 0.35 },
            { color: props.palette.Midtone, offset: 0.6888 },
            { color: props.palette.Shadow },
          ]}
        />
        <path
          id='Vindicator_segment1'
          d='M235.06,452.04c-52.3656-12.1064-96.5663-65.1919-84.07-126.58,9.7948,6.9514,20.9898,2.9385,24.0353-6.8619,2.2215-7.1487.6545-13.184-7.9853-16.5381-18.4057-7.1454-35.0897-17.8238-49.13-31.21,20.5894-17.844,44.7266-31.3646,70.72-39.53-12.29,9.28-22.56,21.09-30.05,34.65,25.3172,17.4807,54.5833,33.1218,84.61,44.59-7.326,1.0824-20.6315,2.49-37.12.84-6.68-.6685-10.676,1.537-12.0953,6.3722-2.2405,7.6329-.3418,13.9367,5.0053,16.8178,1.9835,1.0687,4.7897,1.8265,8.15,5.21-.6436,35.5086-1.557,73.1711,27.93,112.24Z'
        />
        <path
          id='Vindicator_segment2'
          d='M151.52,161.56c9.899-9.5716,26.938-1.8352,25.56,12.5,5.23-3.13,10.56-6.11,15.96-8.96,0-12.5349,5.5051-23.0805,14.06-30.09,2.3377-28.6469,14.3974-54.876,30.45-73.12-27.5234,8.0271-91.7169,42.4306-86.03,99.67Z'
        />
        <path
          id='Vindicator_segment3_stroke'
          d='M288.4844,216.4541c-6.1787-.2071-10.6627-1.9175-14.694-4.7686-4.0822-2.8871-18.3478-11.4034,14.3397-13.6955,56.6064,16.7632,111.7657,47.4706,158.18,90.06-44.3505-68.7854-111.9521-119.9985-190.31-143.63-78.3578,23.6315-145.9595,74.8446-190.31,143.63,46.4142-42.5894,101.5735-73.2968,158.18-90.06,32.6875,2.2921,18.4219,10.8084,14.3397,13.6955-4.0313,2.8511-8.5154,4.5615-14.694,4.7686-4.7233.1583-7.9388,4.8662-6.3672,9.3232,7.8864,22.3666,19.0644,43.416,33.2236,62.5645,1.32,1.7851,3.4082,2.8379,5.6279,2.8379s4.308-1.0528,5.6279-2.8379c14.1593-19.1485,25.3372-40.1979,33.2236-62.5645,1.5716-4.4571-1.6439-9.1649-6.3672-9.3232Z'
        />
        <path
          id='Vindicator_segment3_mask'
          d='M288.13,197.99c-7.1-.34-14.37.35-21.62,2.17-5.3054,1.3264-7.0233,7.6577-3.44,11.48,6.8273,6.8273,13.8453,11.4301,25.18,11.81-7.8979,22.4039-18.9424,42.7354-32.25,60.73-13.3076-17.9946-24.3521-38.326-32.25-60.73,11.3347-.3799,18.3527-4.9827,25.18-11.81,3.5833-3.8224,1.8654-10.1537-3.44-11.48-7.25-1.82-14.52-2.51-21.62-2.17L0,512V0h512v512l-223.87-314.01Z'
        />
        <clipPath id='Vindicator_segment1_clip'>
          <use href='#Vindicator_segment1' />
        </clipPath>
        <clipPath id='Vindicator_segment2_clip'>
          <use href='#Vindicator_segment2' />
        </clipPath>
        <clipPath id='Vindicator_segment3_clip1'>
          <use href='#Vindicator_segment3_stroke' />
        </clipPath>
        <clipPath id='Vindicator_segment3_clip2'>
          <use href='#Vindicator_segment3_mask' />
        </clipPath>
        <g
          clip-path='url(#Vindicator_segment1_clip)'
          id='Vindicator_segment1_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Vindicator_segment1_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <circle
              cx='303.7842'
              cy='346.2335'
              fill='url(#Vindicator_segment1_shading2)'
              r='126.152'
            />
            <circle
              cx='187.3079'
              cy='300.3215'
              fill='url(#Vindicator_segment1_shading3)'
              r='44.165'
            />
            <circle
              cx='221.1389'
              cy='162.5986'
              fill='url(#Vindicator_segment1_shading4)'
              r='149.5875'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Vindicator_segment1'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Vindicator_segment1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
        <g
          clip-path='url(#Vindicator_segment2_clip)'
          id='Vindicator_segment2_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Vindicator_segment2_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <circle
              cx='307.5979'
              cy='180.7238'
              fill='url(#Vindicator_segment2_shading2)'
              r='137.921'
            />
            <circle
              cx='208.5064'
              cy='209.3995'
              fill='url(#Vindicator_segment2_shading3)'
              r='74.403'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Vindicator_segment2'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Vindicator_segment2'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M456.3955,281.5469c-28.4235-44.0833-65.9414-81.061-109.5322-108.6528-.3043-3.2792,3.3698-4.5496,5.2754-2.7075,7.201,6.9611,19.2924,2.5266,20.2827-7.4399,5.8251-58.6246-52.5729-100.1108-94.6113-112.3765-11.4952-3.354-20.2792,10.4568-12.3691,19.4468,15.4802,17.5934,25.5015,41.7111,27.4985,66.1689.265,3.2446,1.8367,6.2429,4.355,8.3062,1.5682,1.2848,2.959,2.7144,4.1626,4.2661-13.6006-6.0654-27.626-11.2944-41.9922-15.627-1.1299-.3408-2.2968-.5112-3.4648-.5112s-2.335.1704-3.4648.5112c-14.3662,4.3325-28.3916,9.5615-41.9922,15.627,1.2036-1.5518,2.5944-2.9813,4.1626-4.2661,2.5183-2.0632,4.09-5.0615,4.355-8.3062,1.9971-24.4579,12.0183-48.5755,27.4985-66.1689,7.9101-8.9899-.874-22.8008-12.3691-19.4468-42.0385,12.2657-100.4365,53.7519-94.6113,112.3765.9903,9.9665,13.0817,14.401,20.2827,7.4399,1.9056-1.842,5.5797-.5717,5.2754,2.7075-43.5908,27.5918-81.1088,64.5696-109.5322,108.6528-7.5867,11.7665,7.8823,24.8095,18.1987,15.3447,10.2504-9.4043,20.9775-18.2539,32.1162-26.5088-.218,5.406,3.1564,8.6235,3.71,9.1514,15.2322,14.524,32.8774,25.7828,52.4536,33.4722,2.7924,1.0968.7454,6.1401-4.1475,2.6674-7.0663-5.0153-16.9755-1.0986-18.7041,7.3926-14.3072,70.2792,37.1986,127.7399,93.1255,140.665,10.8937,2.5176,19.0164-9.9963,12.2812-18.9209-26.7684-35.47-26.1669-68.753-25.5249-103.9912.0511-2.8079.4437-9.9343-13.6479-16.4189-.3936-.1812-.4673-.0388-.4009-1.041,12.7513,1.2596,31.0735,1.4902,50.9355-2.9946,19.862,4.4848,38.1842,4.2543,50.9355,2.9946.0665,1.0023-.0073.8599-.4009,1.041-14.0916,6.4847-13.6991,13.6111-13.6479,16.4189.642,35.2382,1.2435,68.5212-25.5249,103.9912-6.7352,8.9246,1.3875,21.4385,12.2812,18.9209,55.9269-12.9251,107.4327-70.3859,93.1255-140.665-1.7286-8.4911-11.6378-12.4079-18.7041-7.3926-4.8929,3.4727-6.9398-1.5706-4.1475-2.6674,19.5762-7.6894,37.2214-18.9482,52.4536-33.4722.5535-.5278,3.9279-3.7454,3.71-9.1514,11.1387,8.2549,21.8658,17.1045,32.1162,26.5088,10.3164,9.4648,25.7855-3.5782,18.1987-15.3447Z'
        />
      </Show>
      <use href='#Vindicator_segment1_composite' />
      <use href='#Vindicator_segment2_composite' />
      <g transform='translate(512) scale(-1 1)'>
        <use href='#Vindicator_segment1_composite' />
        <use href='#Vindicator_segment2_composite' />
      </g>
      <g clip-path='url(#Vindicator_segment3_clip1)'>
        <g clip-path='url(#Vindicator_segment3_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Vindicator_segment3_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <circle
              cx='256'
              cy='318.4322'
              r='124.6235'
              fill='url(#Vindicator_segment3_shading2)'
            />
          </Show>
        </g>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Vindicator_segment3_stroke'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Vindicator_segment3_stroke'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
