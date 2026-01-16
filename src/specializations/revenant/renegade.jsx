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
export const Renegade = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [88.4183, 50.5517, 335.1634, 412.617]
          : [100.4051, 62.55, 311.1898, 388.64]
      }
    >
      <defs>
        <LinearGradient
          id='Renegade_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={296.9997}
          x2={230.1143}
          y2={150.1947}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Renegade_segment1_shading2'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={296.9997}
          x2={341.5029}
          y2={174.889}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Renegade_segment1_shading3'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={62.55}
          x2={338.4713}
          y2={145.0213}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Renegade_segment1_shading4'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={62.55}
          x2={206.7092}
          y2={168.2545}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Renegade_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          cy={211.9646}
          fy={274}
          dx={335.5373}
          dy={267.21}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone, offset: 0.6 },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Renegade_segment3_shading'
          viewBox={[0, 0, 512, 512]}
          cy={357.97}
          dx={124.2934}
          dy={186.4401}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <path
          id='Renegade_segment1'
          d='M335.46,147.93c-25.9448,39.8569-41.6016,85.3517-45.7339,132.5102l-33.7261,16.5596-33.7256-16.5593c-3.9911-45.5667-18.9163-91.3118-45.7344-132.5104,23.4401-24.7853,51.6451-55.0338,79.46-85.38,28.0406,30.5925,56.2646,60.8533,79.46,85.38Z'
        />
        <Rectangle id='Renegade_segment1_shading_mask' height='147.93' />
        <path
          id='Renegade_segment2'
          d='M411.5949 262.0253 256 345.5696 100.4051 262.0253 207.038 233.4683 160.3291 262.0253 256 308.9998 351.6709 262.0253 304.962 233.4684 411.5949 262.0253Z'
        />
        <path
          id='Renegade_segment3'
          d='M281.79,343.56c-4.6824,33.3007-14.9355,75.9843-25.79,107.63-10.8544-31.6457-21.1076-74.3293-25.79-107.63l25.79,14.41,25.79-14.41Z'
        />
        <clipPath id='Renegade_segment1_clip'>
          <use href='#Renegade_segment1' />
        </clipPath>
        <clipPath id='Renegade_segment1_shading_clip'>
          <use href='#Renegade_segment1_shading_mask' />
        </clipPath>
        <clipPath id='Renegade_segment2_clip'>
          <use href='#Renegade_segment2' />
        </clipPath>
        <clipPath id='Renegade_segment3_clip'>
          <use href='#Renegade_segment3' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M244.6489,455.084c-11.1963-32.6445-21.5283-75.7637-26.3223-109.8535-.2861-2.0352-.041-4.0645.6587-5.915l-124.2568-66.7178c-9.557-5.1315-7.906-19.3575,2.5723-22.1636l101.499-27.1821c-7.5718-24.248-18.4521-47.4766-32.3169-68.7754-3.0254-4.6475-2.4717-10.7627,1.3384-14.7915,25.1167-26.5586,53.2905-56.832,79.3325-85.2437,4.7545-5.1865,12.9378-5.186,17.6929,0,26.0469,28.4175,54.2207,58.6909,79.332,85.2432,3.8105,4.0293,4.3633,10.1445,1.3379,14.792-13.8643,21.2988-24.7451,44.5273-32.3164,68.7749l101.499,27.1826c10.4783,2.8058,12.1292,17.0321,2.5723,22.1636l-124.2568,66.7178c.7002,1.8506.9443,3.8799.6582,5.915-4.793,34.0898-15.125,77.209-26.3223,109.8535-3.6967,10.7798-19.004,10.7794-22.7017,0Z'
        />
      </Show>
      <g clip-path='url(#Renegade_segment1_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Renegade_segment1_shading1)'
              : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <Rectangle width='256' fill='url(#Renegade_segment1_shading2)' />
          <g clip-path='url(#Renegade_segment1_shading_clip)'>
            <Rectangle fill='url(#Renegade_segment1_shading3)' />
            <Rectangle width='256' fill='url(#Renegade_segment1_shading4)' />
          </g>
        </Show>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Renegade_segment1'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Renegade_segment1'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <g clip-path='url(#Renegade_segment2_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Renegade_segment2_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Renegade_segment2'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Renegade_segment2'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <g clip-path='url(#Renegade_segment3_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Renegade_segment3_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Renegade_segment3'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Renegade_segment3'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
