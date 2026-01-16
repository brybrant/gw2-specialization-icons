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
export const Berserker = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [51.8388, 31.1465, 408.3225, 452.3721]
          : [63.8481, 43.2278, 384.3038, 428.2912]
      }
    >
      <defs>
        <LinearGradient
          id='Berserker_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          x1={175.5886}
          y1={43.2278}
          x2={192.5316}
          y2={206.7722}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Berserker_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          x1={136.095}
          y1={48.3924}
          x2={195.674}
          y2={319.2532}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Berserker_segment3_shading'
          viewBox={[0, 0, 512, 512]}
          x1={69.7595}
          y1={245.7278}
          x2={133.4603}
          y2={364.4386}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <LinearGradient
          id='Berserker_segment4_shading'
          viewBox={[0, 0, 512, 512]}
          x1={63.8481}
          y1={297.0695}
          x2={174.1262}
          y2={393.0129}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Berserker_segment5_shading1'
          viewBox={[204, 0, 104, 359]}
          cy={248.3228}
          fy={323.1946}
          dx={551.231}
          dy={219.6837}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <RadialGradient
          id='Berserker_segment5_shading2'
          viewBox={[204, 0, 52, 359]}
          cx={256}
          cy={248.3228}
          fy={323.1946}
          dx={551.231}
          dy={219.6837}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <RadialGradient
          id='Berserker_segment6_shading1'
          viewBox={[0, 0, 512, 512]}
          cy={359.6631}
          fy={411.7169}
          dx={150.7907}
          dy={309.7975}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Berserker_segment6_shading2'
          viewBox={[0, 0, 256, 512]}
          cx={256}
          cy={359.6631}
          fx={256}
          fy={411.7169}
          dx={150.7907}
          dy={309.7975}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Berserker_segment1'
          d='M175.5886,43.2278c110.1709,76.6583-10.8924,103.6963,16.943,163.5444-60.7975-45.8734,32.6203-88.1013-16.943-163.5444Z'
        />
        <path
          id='Berserker_segment2'
          d='M195.674,319.2532c-2.4208-67.519-89.9145-71.3798-94.0158-135.4304-4.1013-64.0506,61.9747-71.9114,34.4367-135.4304,57.3101,63.5949-13.1709,103.0886,4.7074,146.8065,17.8783,43.7178,72.9572,53.1239,54.8717,124.0543Z'
        />
        <path
          id='Berserker_segment3'
          d='M69.7595,245.7278c96.9114,29.3987,108.3038,108.3861,49.2277,124.6992l-13.6834-21.1739c29.7722-6.6835,19.1392-62.5823-35.5443-103.5253Z'
        />
        <path
          id='Berserker_segment4'
          d='M63.8481,297.0695c57.2532,7.2216,51.7848,80.4368,110.2781,95.9434-101.4806,19.7339-71.2528-69.2788-110.2781-95.9434Z'
        />
        <path
          id='Berserker_segment5'
          d='M256,138.481c-27.5728,30.9873-47.1614,75.4937-47.1614,75.4937l11.3924,10.9367c10.0253,45.114,8.3165,72.9684,9.1139,89.3734.7975,16.4051-12.0949,20.8861-12.8734,26.4874,10.8038-.7975,25.3292,5.2974,39.5285,17.3924,14.1993-12.095,28.7247-18.1899,39.5285-17.3925-.7785-5.6013-13.6709-10.0823-12.8734-26.4874.7974-16.405-.9114-44.2595,9.1139-89.3734l11.3924-10.9367s-19.5886-44.5063-47.1614-75.4937Z'
        />
        <path
          id='Berserker_segment6'
          d='M326.2575,381.2358c.7215-6.2658,10.4431-21.7405.6456-44.0886-15.3228,61.481-26.5443-6.7215-70.9031,38.9097-44.3588-45.6312-55.5803,22.5713-70.9031-38.9097-9.7975,22.3481-.0759,37.8228.6456,44.0886.6592,5.7246-6.3987,10.4431-.1792,26.5364,13.5463-24.1819,48.521-24.6376,53.2563-11.0237v55.9681c-1.8338,1.8813-3.4934,4.5873-4.7849,8.4352,1.9937,6.038,14.1393,3.5886,21.9652,10.3671,7.8259-6.7785,19.9715-4.3291,21.9652-10.3671-1.2914-3.848-2.951-6.5539-4.7849-8.4352v-55.9681c4.7354-13.614,39.7101-13.1583,53.2563,11.0237,6.2195-16.0933-.8384-20.8118-.1792-26.5364Z'
        />
        <g id='Berserker_stroke'>
          <use href='#Berserker_segment5' />
          <use href='#Berserker_segment6' />
        </g>
        <clipPath id='Berserker_segment1_clip'>
          <use href='#Berserker_segment1' />
        </clipPath>
        <clipPath id='Berserker_segment2_clip'>
          <use href='#Berserker_segment2' />
        </clipPath>
        <clipPath id='Berserker_segment3_clip'>
          <use href='#Berserker_segment3' />
        </clipPath>
        <clipPath id='Berserker_segment4_clip'>
          <use href='#Berserker_segment4' />
        </clipPath>
        <clipPath id='Berserker_clip'>
          <use href='#Berserker_segment5' />
          <use href='#Berserker_segment6' />
        </clipPath>
        <g id='Berserker_segment7'>
          <g clip-path='url(#Berserker_segment1_clip)'>
            <Rectangle
              fill={
                options.shading
                  ? 'url(#Berserker_segment1_shading)'
                  : props.palette.Flat
              }
            />
            <Show when={options.stroke}>
              <use
                {...strokeWidth.x1}
                href='#Berserker_segment1'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Berserker_segment1'
                stroke={props.palette.Dark}
              />
            </Show>
          </g>
          <g clip-path='url(#Berserker_segment2_clip)'>
            <Rectangle
              fill={
                options.shading
                  ? 'url(#Berserker_segment2_shading)'
                  : props.palette.Flat
              }
            />
            <Show when={options.stroke}>
              <use
                {...strokeWidth.x1}
                href='#Berserker_segment2'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Berserker_segment2'
                stroke={props.palette.Dark}
              />
            </Show>
          </g>
          <g clip-path='url(#Berserker_segment3_clip)'>
            <Rectangle
              fill={
                options.shading
                  ? 'url(#Berserker_segment3_shading)'
                  : props.palette.Flat
              }
            />
            <Show when={options.stroke}>
              <use
                {...strokeWidth.x1}
                href='#Berserker_segment3'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Berserker_segment3'
                stroke={props.palette.Dark}
              />
            </Show>
          </g>
          <g clip-path='url(#Berserker_segment4_clip)'>
            <Rectangle
              fill={
                options.shading
                  ? 'url(#Berserker_segment4_shading)'
                  : props.palette.Flat
              }
            />
            <Show when={options.stroke}>
              <use
                {...strokeWidth.x1}
                href='#Berserker_segment4'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Berserker_segment4'
                stroke={props.palette.Dark}
              />
            </Show>
          </g>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M446.6499,285.1641c-16.4092,2.0693-28.5127,8.7002-38.0234,17.2256,6.8579-14.377,19.7852-31.3174,40.8057-47.0557,10.37-7.7642,2.64-23.9168-9.4883-21.3928-12.1282,2.5239-24.2505,5.4296-36.2048,8.679,10.0443-14.7532,17.1808-36.2038,18.5784-58.0308,2.1304-33.2734-12.6938-53.9585-24.6055-70.5796-13.9482-19.4624-23.1631-32.3203-10.7974-60.8442,5.3832-12.4152-10.8653-22.8586-19.9243-12.8062-9.3353,10.3589-18.8136,23.2895-25.8905,35.3051-2.0886-8.4114-.2957-17.2674,5.3412-25.8476,7.2203-10.9901-6.0889-23.9488-16.8833-16.439-24.9216,17.3406-40.4736,33.5742-47.6508,49.9831-7.1771,16.4089-16.5999,24.4252-25.9069,24.4252s-18.7298-8.0164-25.9069-24.4252c-7.1771-16.4089-22.7291-32.6425-47.6508-49.9831-10.7944-7.5098-24.1036,5.4489-16.8833,16.439,5.6368,8.5802,7.4298,17.4362,5.3412,25.8476-7.0769-12.0156-16.5552-24.9462-25.8905-35.3051-9.059-10.0524-25.3076.3909-19.9243,12.8062,12.3657,28.5239,3.1509,41.3818-10.7974,60.8442-11.9116,16.6211-26.7358,37.3062-24.6055,70.5796,1.3976,21.827,8.5341,43.2776,18.5784,58.0308-11.9543-3.2495-24.0766-6.1551-36.2048-8.679-12.1283-2.524-19.8583,13.6286-9.4883,21.3928,21.0205,15.7383,33.9478,32.6787,40.8057,47.0557-9.5107-8.5254-21.6143-15.1562-38.0234-17.2256-12.4481-1.5861-18.6329,14.7337-8.272,21.8135,19.4037,13.2584,17.699,53.5619,38.5884,79.0146,17.3336,21.1212,43.3613,24.1783,70.0941,20.5646,3.6767-.497,7.2191,1.5991,8.5437,5.0648,4.0155,10.5065,16.2216,10.2234,21.1953,2.8794,14.5077-21.4216,43.7273,5.64,28.4467,39.2032-2.7581,6.0579-1.8525,9.5571-1.306,11.2109,3.1406,9.5117,12.3516,11.6445,17.8545,12.9189,2.9985.6943,6.0986,1.4131,7.6489,2.7559,2.2549,1.9521,5.0557,2.9287,7.8564,2.9287s5.6016-.9766,7.8564-2.9287c1.5503-1.3428,4.6504-2.0615,7.6489-2.7559,5.5029-1.2744,14.7139-3.4072,17.8545-12.9189.5464-1.6538,1.452-5.153-1.306-11.2109-15.2806-33.5632,13.939-60.6248,28.4467-39.2032,4.9737,7.344,17.1797,7.6271,21.1953-2.8794,1.3246-3.4657,4.867-5.5618,8.5437-5.0648,26.7328,3.6137,52.7605.5566,70.0941-20.5646,20.8894-25.4528,19.1846-65.7562,38.5884-79.0146,10.3609-7.0798,4.1761-23.3995-8.272-21.8135Z'
        />
      </Show>
      <use href='#Berserker_segment7' />
      <use href='#Berserker_segment7' transform='translate(512) scale(-1 1)' />
      <g clip-path='url(#Berserker_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Berserker_segment6_shading1)'
              : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <Rectangle width='256' fill='url(#Berserker_segment6_shading2)' />
          <Rectangle
            x='204'
            width='104'
            height='359'
            fill='url(#Berserker_segment5_shading1)'
          />
          <Rectangle
            x='204'
            width='52'
            height='359'
            fill='url(#Berserker_segment5_shading2)'
          />
        </Show>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Berserker_stroke'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Berserker_stroke'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
