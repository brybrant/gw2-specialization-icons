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
export const Catalyst = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [51.7912, 50.048, 408.4176, 420.114]
          : [63.8024, 62.0417, 384.3952, 395.2278]
      }
    >
      <defs>
        <RadialGradient
          id='Catalyst_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          cy={218.2642}
          fy={62.0417}
          dx={479.5728}
          dy={479.5728}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Catalyst_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={243.7648}
          y1={366.8553}
          x2={256}
          y2={436.2449}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Catalyst_segment2_shading2'
          viewBox={[0, 0, 256, 512]}
          x1={296.4142}
          y1={378.5274}
          x2={256}
          y2={436.2449}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Catalyst_segment2_shading3'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={295.3248}
          x2={323.6729}
          y2={362.9977}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Catalyst_segment2_shading4'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={295.3248}
          x2={215.5538}
          y2={382.062}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Catalyst_segment1'
          d='M256,62.0417c-41.7795,65.908-71.6821,140.0807-86.7486,219.5051.0475-19.0247.7236-37.9013,1.9942-56.6149-18.8178-23.8885-38.2492-47.2711-58.2754-70.1196-6.4012,23.0251-9.8361,47.2853-9.8361,72.3502,0,45.6587,11.3594,88.6593,31.4007,126.3406-6.239-6.0333-12.2435-12.308-17.9788-18.8268-16.0811-9.0598-33.8633-15.4557-52.7536-18.5745,24.3289,77.1646,93.4931,133.508,173.5428,141.1677-25.7764-15.592-69.1427-48.2485-69.1427-91.4847,0-48.4893,39.3083-93.1139,87.7975-93.1139s87.7975,44.6247,87.7975,93.1139c0,43.2361-43.3663,75.8926-69.1427,91.4847,80.0497-7.6597,149.214-64.0032,173.5428-141.1678-18.8903,3.1188-36.6725,9.5147-52.7536,18.5745-5.7354,6.5188-11.7398,12.7935-17.9788,18.8268,20.0413-37.6813,31.4007-80.6819,31.4007-126.3406,0-25.0648-3.4348-49.3251-9.8361-72.3502-20.0262,22.8485-39.4576,46.2311-58.2754,70.1196,1.2706,18.7136,1.9467,37.5902,1.9942,56.6149-15.0666-79.4244-44.9692-153.5971-86.7486-219.505Z'
        />
        <path
          id='Catalyst_segment2'
          d='M320.7658 365.7848 256 436.2449 191.2342 365.7848 256 295.3248Z'
        />
        <Rectangle id='Catalyst_segment2_shading_mask' height='365.7848' />
        <clipPath id='Catalyst_segment1_clip'>
          <use href='#Catalyst_segment1' />
        </clipPath>
        <clipPath id='Catalyst_segment2_clip'>
          <use href='#Catalyst_segment2' />
        </clipPath>
        <clipPath id='Catalyst_segment2_shading_clip'>
          <use href='#Catalyst_segment2_shading_mask' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M446.2422,304.2617c-13.6992,2.2627-26.9814,6.1357-39.6768,11.5605,17.6061-53.2291,18.9645-110.4836,4.0264-164.2241-2.5519-9.1798-14.3053-11.8606-20.5859-4.6958-17.9395,20.4683-35.624,41.6289-52.6631,63.0117-16.6943-54.2188-40.5273-105.8979-71.208-154.2969-2.3531-3.7129-6.2439-5.5692-10.1348-5.5692s-7.7817,1.8562-10.1348,5.5691c-30.6807,48.3989-54.5137,100.0781-71.208,154.2969-17.0391-21.3828-34.7236-42.5435-52.6631-63.0117-6.2806-7.1648-18.034-4.484-20.5859,4.6958-14.9381,53.7405-13.5798,110.995,4.0264,164.2241-12.6953-5.4248-25.9775-9.2979-39.6768-11.5605-8.8224-1.4528-16.0877,6.9207-13.3994,15.4482,27.8018,88.1862,110.6405,150.4521,203.6416,150.4521s175.8398-62.2659,203.6416-150.4521c2.6883-8.5275-4.577-16.9011-13.3994-15.4482Z'
        />
      </Show>
      <g clip-path='url(#Catalyst_segment1_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Catalyst_segment1_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Catalyst_segment1'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Catalyst_segment1'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <g clip-path='url(#Catalyst_segment2_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Catalyst_segment2_shading1)'
              : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <Rectangle width='256' fill='url(#Catalyst_segment2_shading2)' />
          <g clip-path='url(#Catalyst_segment2_shading_clip)'>
            <Rectangle fill='url(#Catalyst_segment2_shading3)' />
            <Rectangle width='256' fill='url(#Catalyst_segment2_shading4)' />
          </g>
        </Show>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x075}
            href='#Catalyst_segment2'
            stroke={props.palette.Highlight}
          />
        </Show>
      </g>
      <Show when={options.stroke}>
        <use
          {...strokeWidth.x025}
          href='#Catalyst_segment2'
          stroke={props.palette.Dark}
        />
      </Show>
    </Icon>
  );
};
