import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Firebrand = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [74.4291, 68.8999, 363.1419, 378.1899]
          : [86.44, 80.9, 339.12, 354.21]
      }
    >
      <defs>
        <RadialGradient
          id='Firebrand_shading'
          viewBox={[0, 0, 512, 512]}
          cy={189.6436}
          dx={490.9328}
          dy={490.9328}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Firebrand_stroke1'
          d='M256,80.9c-76.56,0-142.15,46.9501-169.56,113.64,48.8482-2.4837,91.5117,38.255,89.38,89.43,20.9881-8.2577,44.32,7.1904,44.32,30.29,0,17.77-14.26,32.21-31.96,32.5,31.09,21.29,55.12,52.16,67.82,88.35,12.7-36.19,36.73-67.06,67.82-88.35-17.7-.29-31.96-14.73-31.96-32.5,0-23.0997,23.3318-38.5477,44.32-30.29-2.1317-51.175,40.5318-91.9137,89.38-89.43-27.4099-66.69-93-113.64-169.56-113.64Z'
        />
        <Rectangle
          id='Firebrand_stroke2'
          d='M290.51,258.58c20.5503-27.8981.84-68.21-34.51-68.21s-55.0603,40.3118-34.51,68.21c-11.81-9.86-19.32-24.7-19.32-41.3,0-29.72,24.1-53.82,53.83-53.82s53.83,24.1,53.83,53.82c0,16.6-7.51,31.44-19.32,41.3Z'
        />
        <clipPath id='Firebrand_clip1'>
          <use href='#Firebrand_stroke1' />
        </clipPath>
        <clipPath id='Firebrand_clip2'>
          <use href='#Firebrand_stroke2' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M436.6592,189.978c-29.6147-72.0543-100.1024-121.0781-180.6592-121.0781s-151.0444,49.0238-180.6592,121.0781c-3.3414,8.1298,2.9305,16.9997,11.7085,16.5464,41.4239-2.1392,78.6323,32.4999,76.7808,76.9463-.2839,6.8163,5.1685,12.499,11.9907,12.499,4.1903,0,5.9341-2.251,11.7803-2.251,9.8779,0,20.5391,7.8535,20.5391,20.541,0,11.1221-9.0425,20.3203-20.1567,20.502-11.6601.1906-16.2051,15.3101-6.5835,21.8994,29.1589,19.9695,51.6321,49.2403,63.2769,82.4229,3.7459,10.6742,18.9006,10.6741,22.6465,0,11.6448-33.1825,34.1179-62.4533,63.2769-82.4229,9.6216-6.5894,5.0766-21.7088-6.5835-21.8994-11.1143-.1817-20.1567-9.3799-20.1567-20.502,0-12.6875,10.6611-20.541,20.5391-20.541,5.8461,0,7.59,2.251,11.7803,2.251,6.8222,0,12.2747-5.6827,11.9907-12.499-1.8516-44.4464,35.3569-79.0854,76.7808-76.9463,8.778.4533,15.0499-8.4166,11.7085-16.5464Z'
        />
      </Show>
      <g clip-path='url(#Firebrand_clip1)'>
        <g clip-path='url(#Firebrand_clip2)'>
          <Rectangle
            fill={
              options.shading ? 'url(#Firebrand_shading)' : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <g stroke={props.palette.Highlight}>
              <use {...strokeWidth.x075} href='#Firebrand_stroke2' />
              <use {...strokeWidth.x1} href='#Firebrand_stroke1' />
            </g>
            <use
              {...strokeWidth.x05}
              href='#Firebrand_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x025}
            href='#Firebrand_stroke2'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
