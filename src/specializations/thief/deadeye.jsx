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
export const Deadeye = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [17.5444, 73.8735, 476.9113, 364.2529]
          : [29.5443, 85.8734, 452.9114, 340.2532]
      }
    >
      <defs>
        <RadialGradient
          id='Deadeye_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          cy={229.0949}
          fy={202.189825}
          dx={269.0506}
          dy={269.0506}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Deadeye_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          x1={0}
          y1={85.8734}
          x2={0}
          y2={426.1266}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral, offset: 0.11 },
            { color: props.palette.Neutral, offset: 0.89 },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Deadeye_segment3_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={120.9114}
          dx={294.915}
          dy={294.915}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Deadeye_segment3_shading2'
          viewBox={[0, 0, 512, 256]}
          cx={120.9114}
          cy={256}
          fx={120.9114}
          fy={256}
          dx={294.915}
          dy={294.915}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <circle cx='256' cy='256' id='Deadeye_segment1_stroke1' r='107.6202' />
        <Rectangle
          id='Deadeye_segment1_stroke2'
          d='M256,165.1282c10.0806,11.2702,22.6484,20.2657,36.8425,26.1264-17.1392,12.4757-30.2071,30.2014-36.8425,50.8165-6.6354-20.6152-19.7033-38.3409-36.8425-50.8165,14.1942-5.8607,26.7619-14.8562,36.8425-26.1264ZM191.2546,292.8425c-5.8607-14.1942-14.8562-26.7619-26.1264-36.8425,11.2702-10.0806,20.2657-22.6484,26.1264-36.8425,12.4757,17.1392,30.2014,30.2071,50.8165,36.8425-20.6152,6.6354-38.3409,19.7033-50.8165,36.8425ZM256,346.8718c-10.0806-11.2702-22.6484-20.2657-36.8425-26.1264,17.1392-12.4757,30.2071-30.2014,36.8425-50.8165,6.6354,20.6152,19.7033,38.3409,36.8425,50.8165-14.1942,5.8607-26.7619,14.8562-36.8425,26.1264ZM320.7454,292.8425c-12.4757-17.1392-30.2014-30.2071-50.8165-36.8425,20.6152-6.6354,38.3409-19.7033,50.8165-36.8425,5.8607,14.1942,14.8562,26.7619,26.1264,36.8425-11.2702,10.0806-20.2657,22.6484-26.1264,36.8425Z'
        />
        <path
          id='Deadeye_segment2'
          d='M256,120.9114c8.8041,0,17.408.8522,25.7426,2.4604-8.1194-9.1374-12.6184-25.931-25.7426-37.4984-13.1241,11.5674-17.6231,28.361-25.7426,37.4984,8.3345-1.6083,16.9384-2.4604,25.7426-2.4604Z'
        />
        <path
          id='Deadeye_segment3'
          d='M120.9114,256c0-55.1677,33.0735-102.6038,80.4707-123.5823-31.005.9619-70.0806,35.6695-96.572,67.6077-30.75,37.0724-75.2658,55.9747-75.2658,55.9747,0,0,44.5158,18.9022,75.2658,55.9747,26.4914,31.9382,65.5671,66.6459,96.5721,67.6077-47.3973-20.9785-80.4709-68.4147-80.4709-123.5823Z'
        />
        <g id='Deadeye_segment2_stroke'>
          <use href='#Deadeye_segment2' />
          <use href='#Deadeye_segment2' transform='rotate(180 256 256)' />
        </g>
        <clipPath id='Deadeye_segment1_clip1'>
          <use href='#Deadeye_segment1_stroke1' />
        </clipPath>
        <clipPath id='Deadeye_segment1_clip2'>
          <use href='#Deadeye_segment1_stroke2' />
        </clipPath>
        <clipPath id='Deadeye_segment2_clip'>
          <use href='#Deadeye_segment2' />
          <use href='#Deadeye_segment2' transform='rotate(180 256 256)' />
        </clipPath>
        <clipPath id='Deadeye_segment3_clip'>
          <use href='#Deadeye_segment3' />
        </clipPath>
        <g
          clip-path='url(#Deadeye_segment3_clip)'
          id='Deadeye_segment3_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Deadeye_segment3_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <Rectangle height='256' fill='url(#Deadeye_segment3_shading2)' />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Deadeye_segment3'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Deadeye_segment3'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M494.4556,256c0-4.8149-2.8779-9.1636-7.3101-11.0454-.4077-.1743-42.2997-18.3277-70.7192-52.5903-13.7148-16.5347-61.8502-70.5842-105.436-71.9409-14.9927-.4667-23.1102-8.5402-27.5903-16.7749-4.4801-8.2348-10.0562-18.4839-19.4653-26.7773-2.2676-1.9985-5.1011-2.9976-7.9346-2.9976s-5.667.999-7.9346,2.9976c-9.4092,8.2935-14.9852,18.5425-19.4653,26.7773-4.4801,8.2347-12.5976,16.3082-27.5903,16.7749-43.5858,1.3568-91.7212,55.4062-105.436,71.9409-28.4195,34.2626-70.3115,52.416-70.7192,52.5903-4.4321,1.8818-7.3101,6.2305-7.3101,11.0454h0c0,4.8149,2.8779,9.1636,7.3101,11.0454.4077.1743,42.2998,18.3277,70.7193,52.5903,13.7148,16.5347,61.8502,70.5842,105.436,71.9409,14.9927.4667,23.1102,8.5402,27.5903,16.7749,4.4801,8.2348,10.0562,18.4839,19.4653,26.7773,2.2676,1.9985,5.1011,2.9976,7.9346,2.9976s5.667-.999,7.9346-2.9976c9.4092-8.2935,14.9852-18.5425,19.4653-26.7773,4.4801-8.2347,12.5976-16.3082,27.5903-16.7749,43.5858-1.3568,91.7212-55.4062,105.436-71.9409,28.4195-34.2626,70.3116-52.416,70.7193-52.5903,4.4321-1.8818,7.3101-6.2305,7.3101-11.0454h0Z'
        />
      </Show>
      <g clip-path='url(#Deadeye_segment1_clip1)'>
        <g clip-path='url(#Deadeye_segment1_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Deadeye_segment1_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x075}
              href='#Deadeye_segment1_stroke2'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x1}
              href='#Deadeye_segment1_stroke1'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Deadeye_segment1_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x025}
            href='#Deadeye_segment1_stroke2'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <use href='#Deadeye_segment3_composite' />
      <use
        href='#Deadeye_segment3_composite'
        transform='translate(512) scale(-1 1)'
      />
      <g clip-path='url(#Deadeye_segment2_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Deadeye_segment2_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Deadeye_segment2_stroke'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Deadeye_segment2_stroke'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
