import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { ellipse, outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Soulbeast = (props) => {
  const options = useOptions();

  const Normal = (
    <Icon
      viewBox={
        options.outline
          ? [98.9123, 57.3545, 339.4786, 395.4854]
          : [110.92, 69.36, 315.46, 371.48]
      }
    >
      <defs>
        <RadialGradient
          id='Soulbeast_pad_shading'
          viewBox={[0, 0, 512, 512]}
          cx={258.75}
          cy={254.8613}
          fy={188.1}
          dx={432.9624}
          dy={371.9571}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Soulbeast_claw1_shading'
          viewBox={[0, 0, 512, 512]}
          cx={154.52}
          cy={108.06}
          dx={137.9}
          dy={239.56}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Soulbeast_claw2_shading'
          viewBox={[0, 0, 512, 512]}
          cx={242.95}
          cy={69.36}
          dx={241.6631}
          dy={114.8183}
          rotate={-72.2428}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Soulbeast_thumb_shading'
          viewBox={[0, 0, 512, 512]}
          cx={353.81}
          cy={322.26}
          fx={410}
          fy={285}
          dx={169}
          dy={184}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Soulbeast_pad_stroke1'
          d='M258.75,188.1c-69.79,0-126.37,56.58-126.37,126.37s56.582,126.37,126.37,126.37c5.06,0,10.05-.3,14.95-.88.9071-60.9438,49.0934-111.5514,110.93-114.3199.33-3.6801.49-7.41.49-11.17,0-69.791-56.579-126.37-126.37-126.37Z'
        />
        <Rectangle
          id='Soulbeast_pad_stroke2'
          d='M240.98,407.63c-43.3378-8.0852-77.06-46.4355-77.06-93.16,0-52.37,42.46-94.83,94.83-94.83,45.6609,0,83.2778,32.1346,92.59,74.27-54.252,14.0428-97.5587,57.7159-110.36,113.72Z'
        />
        <path
          id='Soulbeast_pad_stroke3'
          d='M334.05,284.71c-48.67,17.3-86.92,56.59-102.79,105.92-31.17-11.25-53.45-41.1-53.45-76.16,0-44.7,36.24-80.94,80.94-80.94,34.19,0,63.44,21.21,75.3,51.18Z'
        />
        <path
          id='Soulbeast_claw1'
          d='M175.81,201.35c-10.14,7.45-19.24,16.23-27.04,26.08-10.24-8.71-21.71-16.01-34.11-21.63-13.3769-42.9382,9.7044-81.4657,39.86-97.74-1.9632,16.9515-3.2132,54.708,21.29,93.29Z'
        />
        <path
          id='Soulbeast_claw2'
          d='M241.99,175.2c-12.55,1.5-24.59,4.65-35.89,9.23-.02-14.59-9.89-26.87-23.3199-30.55-5.5-42.4241,23.9223-77.0929,60.17-84.52-3.4118,20.6637-7.8158,58.9731-.96,105.84Z'
        />
        <path
          id='Soulbeast_thumb'
          d='M426.38,332.02c0,35.9-21.88,66.69-53.03,79.76-9.1265-15.1565-30.9583-15.2301-40.22-.3-10.17-5.21-17.21-15.67-17.52-27.81,30.6459-16.0028,60.0533-33.8094,87.46-52.62,12-8.24,17.44-22.46,15.06-35.91,5.2233,11.0119,8.25,23.55,8.25,36.8799Z'
        />
        <clipPath id='Soulbeast_pad_clip1'>
          <use href='#Soulbeast_pad_stroke1' />
        </clipPath>
        <clipPath id='Soulbeast_pad_clip2'>
          <use href='#Soulbeast_pad_stroke2' />
          <use href='#Soulbeast_pad_stroke3' />
        </clipPath>
        <clipPath id='Soulbeast_claw1_clip'>
          <use href='#Soulbeast_claw1' />
        </clipPath>
        <clipPath id='Soulbeast_claw2_clip'>
          <use href='#Soulbeast_claw2' />
        </clipPath>
        <clipPath id='Soulbeast_thumb_clip'>
          <use href='#Soulbeast_thumb' />
        </clipPath>
        <g
          id='Soulbeast_claw1_composite'
          clip-path='url(#Soulbeast_claw1_clip)'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Soulbeast_claw1_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Soulbeast_claw1'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Soulbeast_claw1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
        <g
          id='Soulbeast_claw2_composite'
          clip-path='url(#Soulbeast_claw2_clip)'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Soulbeast_claw2_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Soulbeast_claw2'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Soulbeast_claw2'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M254.9419,69.8059c.4162-7.4512-6.5963-13.8008-14.4004-12.2019-51.048,10.4595-84.5739,64.7149-64.4898,118.4747-8.9429-20.9956-12.2361-43.9688-9.6113-66.6382,1.1147-9.6253-9.0916-16.541-17.6196-11.9409-40.6844,21.9567-58.9038,69.2273-45.6172,111.8696,1.0181,3.269,3.3843,5.9473,6.5029,7.3604,19.9512,9.0433,30.8856,20.021,33.6729,21.4219-14.5278,21.8896-22.9995,48.1357-22.9995,76.3184,0,76.2979,62.0728,138.3701,138.3701,138.3701,5.457,0,10.9619-.3242,16.3604-.9629,5.9727-.707,10.499-5.7256,10.5889-11.7383.3125-20.999,6.8711-40.5459,17.916-56.8223-.3819,14.2583,8.3235,30.7897,24.042,38.8438,5.5595,2.8497,12.377.9544,15.6699-4.3545,4.5297-7.301,15.2408-7.3124,19.7422.1641,3.0737,5.1053,9.4287,7.1839,14.9229,4.876,52.8536-22.177,74.4317-83.4103,50.9795-132.8486-5.9655-12.5763-25.0836-6.473-22.6582,7.2334,1.582,8.9424-2.0684,18.0391-9.3291,23.4219,1.2602-28.3741-6.1261-57.2816-22.8633-82.501,3.1369-1.5775,13.1888-12.1375,33.6729-21.4219,3.1182-1.4131,5.4844-4.0908,6.5029-7.3594,13.2778-42.6168-4.9114-89.902-45.6172-111.8706-8.532-4.6045-18.7345,2.3101-17.6191,11.9409,2.623,22.6869-.6726,45.6684-9.6287,66.677,20.1159-53.7706-13.4128-108.0507-64.4728-118.5134-7.8663-1.6116-14.8125,4.8312-14.4009,12.2019,1.5579,27.8938.2842,54.8901-3.8081,82.526-4.0923-27.6359-5.366-54.6322-3.8081-82.526Z'
        />
      </Show>
      <g clip-path='url(#Soulbeast_pad_clip1)'>
        <Show when={options.stroke}>
          <Rectangle fill={props.palette.Dark} />
        </Show>
        <g clip-path='url(#Soulbeast_pad_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Soulbeast_pad_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <g stroke={props.palette.Highlight}>
              <use {...strokeWidth.x1} href='#Soulbeast_pad_stroke1' />
              <use {...strokeWidth.x075} href='#Soulbeast_pad_stroke3' />
            </g>
            <g stroke={props.palette.Dark}>
              <use {...strokeWidth.x025} href='#Soulbeast_pad_stroke3' />
              <use {...strokeWidth.x05} href='#Soulbeast_pad_stroke1' />
            </g>
          </Show>
        </g>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x025}
            href='#Soulbeast_pad_stroke2'
            stroke={props.palette.Highlight}
          />
        </Show>
      </g>
      <use href='#Soulbeast_claw1_composite' />
      <use href='#Soulbeast_claw2_composite' />
      <g transform='translate(517.5) scale(-1 1)'>
        <use href='#Soulbeast_claw1_composite' />
        <use href='#Soulbeast_claw2_composite' />
      </g>
      <g clip-path='url(#Soulbeast_thumb_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Soulbeast_thumb_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Soulbeast_thumb'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Soulbeast_thumb'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );

  return (
    <Show when={options.tiny} fallback={<Normal />}>
      <Icon fill={props.palette.Flat}>
        <defs>
          <Rectangle
            id='Soulbeast_tiny_mask1'
            d={ellipse(15, 21.5, 12)}
            width={32}
            height={35}
          />
          <Rectangle
            id='Soulbeast_tiny_mask2'
            d={ellipse(24, 30, 8)}
            width={33}
            height={39}
          />
          <Rectangle
            id='Soulbeast_tiny_mask3'
            d={ellipse(24, 30, 12)}
            width={37}
            height={43}
          />
          <circle id='Soulbeast_tiny_segment' cx={15} cy={21.5} r={10.5} />
          <clipPath id='Soulbeast_tiny_clip1'>
            <use href='#Soulbeast_tiny_mask1' />
          </clipPath>
          <clipPath id='Soulbeast_tiny_clip2'>
            <use href='#Soulbeast_tiny_mask2' />
          </clipPath>
          <clipPath id='Soulbeast_tiny_clip3'>
            <use href='#Soulbeast_tiny_mask3' />
          </clipPath>
          <clipPath id='Soulbeast_tiny_segment_clip'>
            <use href='#Soulbeast_tiny_segment' />
          </clipPath>
          <path
            id='Soulbeast_tiny_composite'
            clip-path='url(#Soulbeast_tiny_clip1)'
            d='M7,15c-2-3-4.5-3-4.5-3-.5-7,3.5-9,3.5-9,0,4,1,8,3,9l-2,3ZM8.5,7.5s2.5.5,2.5,3.5l3-1c-1-3-1-7,0-10-3,1-5,3-5.5,7.5Z'
          />
        </defs>
        <g
          clip-path='url(#Soulbeast_tiny_segment_clip)'
          fill='none'
          stroke={props.palette.Flat}
          stroke-width={6}
        >
          <g clip-path='url(#Soulbeast_tiny_clip2)'>
            <use href='#Soulbeast_tiny_segment' />
            <circle cx={24} cy={30} r={8} />
          </g>
        </g>
        <circle
          clip-path='url(#Soulbeast_tiny_clip3)'
          cx={15}
          cy={21.5}
          r={6.5}
        />
        <path d='M20,27c9-4,10-5,10-7,2,5-2,10-6,10-3,0-4-2-4-3Z' />
        <use href='#Soulbeast_tiny_composite' />
        <use
          href='#Soulbeast_tiny_composite'
          transform='translate(30) scale(-1 1)'
        />
      </Icon>
    </Show>
  );
};
