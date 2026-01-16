import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Chronomancer = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [44.7084, 61.9453, 422.5833, 388.1094]
          : [56.7085, 73.9456, 398.5829, 364.1088]
      }
    >
      <defs>
        <RadialGradient
          id='Chronomancer_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          cy={223.4723}
          fy={190.944625}
          dx={325.2766}
          dy={325.2766}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Chronomancer_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          cy={163.2392}
          fy={72.2757}
          dx={537.65}
          dy={314.3726}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Chronomancer_segment2_shading2'
          viewBox={[0, 0, 512, 512]}
          cy={269.0273}
          fy={283.8706}
          dx={537.65}
          dy={390.0475}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Chronomancer_segment1'
          d='M256,125.8893c-71.8582,0-130.1107,58.2525-130.1107,130.1107s58.2525,130.1107,130.1107,130.1107,130.1107-58.2525,130.1107-130.1107-58.2525-130.1107-130.1107-130.1107ZM333.7053,200.4376c9.5538-5.5159,19.3728-6.3947,21.9315-1.963,2.5587,4.4318-3.1119,12.4959-12.6656,18.0118-9.5537,5.5158-19.3728,6.3947-21.9315,1.9629-2.5587-4.4318,3.1119-12.4959,12.6656-18.0117ZM295.5135,169.0289c5.5159-9.5538,13.58-15.2244,18.0117-12.6657,4.4318,2.5587,3.553,12.3777-1.9629,21.9315-5.5158,9.5537-13.58,15.2243-18.0118,12.6656-4.4318-2.5587-3.5529-12.3777,1.963-21.9315ZM140.9494,256c0-5.1174,8.943-9.2658,19.9747-9.2658s19.9747,4.1484,19.9747,9.2658-8.943,9.2658-19.9747,9.2658-19.9747-4.1484-19.9747-9.2658ZM178.2947,311.5624c-9.5538,5.5159-19.3728,6.3947-21.9315,1.9629-2.5587-4.4318,3.1119-12.4958,12.6656-18.0117,9.5537-5.5159,19.3728-6.3947,21.9315-1.963,2.5587,4.4318-3.1119,12.4959-12.6656,18.0118ZM190.9604,218.4493c-2.5587,4.4318-12.3777,3.5529-21.9315-1.9629-9.5538-5.5159-15.2244-13.58-12.6656-18.0118,2.5587-4.4318,12.3777-3.5529,21.9315,1.963,9.5537,5.5158,15.2244,13.58,12.6656,18.0117ZM216.4865,342.9711c-5.5159,9.5538-13.58,15.2244-18.0118,12.6656-4.4318-2.5587-3.5529-12.3777,1.963-21.9315,5.5158-9.5537,13.58-15.2244,18.0117-12.6656,4.4318,2.5587,3.553,12.3777-1.9629,21.9315ZM218.4493,190.9604c-4.4318,2.5587-12.4959-3.1119-18.0117-12.6656-5.5159-9.5538-6.3947-19.3728-1.963-21.9315,4.4318-2.5587,12.4959,3.1119,18.0118,12.6657,5.5159,9.5537,6.3947,19.3727,1.9629,21.9315ZM256,371.0506c-5.1174,0-9.2658-8.9429-9.2658-19.9747s4.1484-19.9747,9.2658-19.9747,9.2658,8.943,9.2658,19.9747-4.1484,19.9747-9.2658,19.9747ZM313.5253,355.6367c-4.4318,2.5587-12.4959-3.1119-18.0118-12.6656-5.5159-9.5537-6.3947-19.3728-1.9629-21.9315,4.4318-2.5587,12.4959,3.1119,18.0117,12.6656,5.5159,9.5538,6.3947,19.3728,1.963,21.9315ZM355.6367,313.5253c-3.8902,6.738-23.6582.6347-32.3021-10.7094-19.1071-8.525-51.089-22.7944-66.3812-29.6172-16.4214.8995-24.4911-19.3593-12.3755-30.0968l5.0616-67.6785c-6.0855-12.41-1.9639-34.4739,6.3605-34.4739,8.4121,0,12.3861,22.1854,6.3605,34.4738l5.0616,67.6786c1.6253,1.4404,2.9742,3.1783,3.9636,5.1351l58.8253,42.6685c13.978,1.7923,29.3789,15.7726,25.4256,22.6198ZM351.0759,265.2658c-11.0317,0-19.9747-4.1484-19.9747-9.2658s8.943-9.2658,19.9747-9.2658,19.9747,4.1484,19.9747,9.2658-8.943,9.2658-19.9747,9.2658Z'
        />
        <circle
          id='Chronomancer_segment1_stroke'
          cx='256'
          cy='256'
          r='130.11065'
        />
        <path
          id='Chronomancer_segment2'
          d='M407.08,152.83C299.9841,27.5406,94.2089,110.4521,103.57,275.01c-16.18-.15-31.88-2.32-46.86-6.28-.7345-186.777,239.6107-266.2948,350.37-115.9Z'
        />
        <clipPath id='Chronomancer_segment1_clip'>
          <use href='#Chronomancer_segment1' />
        </clipPath>
        <clipPath id='Chronomancer_segment2_clip'>
          <use href='#Chronomancer_segment2' />
        </clipPath>
        <g
          clip-path='url(#Chronomancer_segment2_clip)'
          id='Chronomancer_segment2_composite'
        >
          <Rectangle />
          <Show when={options.stroke}>
            <g fill='none'>
              <use
                {...strokeWidth.x1}
                href='#Chronomancer_segment2'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Chronomancer_segment2'
                stroke={props.palette.Dark}
              />
            </g>
          </Show>
        </g>
      </defs>
      <Show when={options.stroke}>
        <circle cx='256' cy='256' fill={props.palette.Dark} r='130' />
      </Show>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M458.3561,231.6685c-16.1709-4.2744-32.9307-6.5215-49.8154-6.6777-.0371-.0005-.0742-.0005-.1113-.0005-5.8986,0-10.926,4.2911-11.8516,10.1167-10.5723-71.4391-70.9647-123.199-140.7101-125.2807,51.2392-9.1141,105.8248,8.3841,142.09,50.8007,4.1973,4.9093,11.5253,5.6176,16.584,1.6016,5.0576-4.0156,6.0303-11.3145,2.2002-16.5146-41.2592-56.0236-101.0138-83.645-163.3213-83.645-111.7342,0-209.1838,86.0625-208.7103,206.7085.0215,5.4287,3.6846,10.167,8.9336,11.5542,16.1709,4.2744,32.9307,6.5215,49.8154,6.6777.0371.0005.0742.0005.1113.0005,5.8986,0,10.926-4.2911,11.8516-10.1167,10.5723,71.4391,70.9647,123.199,140.7101,125.2807-51.2392,9.1141-105.8248-8.3841-142.09-50.8007-4.1973-4.9093-11.5253-5.6176-16.584-1.6016-5.0576,4.0156-6.0303,11.3145-2.2002,16.5146,41.2592,56.0236,101.0138,83.645,163.3213,83.645,111.7342,0,209.1838-86.0625,208.7103-206.7085-.0215-5.4287-3.6846-10.167-8.9336-11.5542Z'
        />
      </Show>
      <use
        fill={
          options.shading
            ? 'url(#Chronomancer_segment2_shading1)'
            : props.palette.Flat
        }
        href='#Chronomancer_segment2_composite'
      />
      <use
        fill={
          options.shading
            ? 'url(#Chronomancer_segment2_shading2)'
            : props.palette.Flat
        }
        href='#Chronomancer_segment2_composite'
        transform='rotate(180 256 256)'
      />
      <g clip-path='url(#Chronomancer_segment1_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Chronomancer_segment1_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <g stroke={props.palette.Highlight}>
            <use {...strokeWidth.x1} href='#Chronomancer_segment1_stroke' />
            <use {...strokeWidth.x05} href='#Chronomancer_segment1' />
          </g>
          <use
            {...strokeWidth.x05}
            href='#Chronomancer_segment1_stroke'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
