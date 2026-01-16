import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Engineer = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [115.77, 56.7349, 297.6597, 403.6148]
          : [127.77, 68.735, 273.66, 379.615]
      }
    >
      <defs>
        <RadialGradient
          id='Engineer_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          cx={264.6}
          cy={311.52}
          dx={490.035}
          dy={490.035}
          stops={[
            { color: props.palette.Midtone, offset: 0.5584499066393217 },
            { color: props.palette.Neutral },
          ]}
        />
        <RadialGradient
          id='Engineer_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          cx={264.6}
          cy={311.52}
          fx={310.81}
          fy={218.5033}
          dx={273.66}
          dy={273.66}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Engineer_segment1'
          d='M264.5543,191.0917l-3.734-16.3505-9.6102-42.0812c-12.2363.9043-24.1242,3.0502-35.5541,6.2856-32.6232-34.0297,29.5085-77.4634,70.958-19.7241,53.8539,75.0185,123.4235.1324,75.7785-18.7785,18.9362,19.9742-22.0174,63.1471-58.4014,7.9536-54.3586-82.4604-163.9323-20.7889-122.6614,44.2416-10.4558,5.4904-20.3073,11.9758-29.4197,19.3418l17.8754,30.4725c15.7891-13.9775,35.2386-21.1769,54.7871-21.8149'
        />
        <path
          id='Engineer_segment1_stroke'
          d='M264.5543,191.0917l-3.734-16.3505-9.6102-42.0812c-12.2363.9043-24.1242,3.0502-35.5541,6.2856-32.6232-34.0297,29.5085-77.4634,70.958-19.7241,53.8539,75.0185,123.4235.1324,75.7785-18.7785,18.9362,19.9742-22.0174,63.1471-58.4014,7.9536-54.3586-82.4604-163.9323-20.7889-122.6614,44.2416-10.4558,5.4904-20.3073,11.9758-29.4197,19.3418l17.8754,30.4725,26.7858,45.6623'
        />
        <path
          id='Engineer_segment2'
          d='M0,0v512h512V0H0ZM264.6,419.61c-50.9217,0-93.6115-35.2154-105.0634-82.6192,17.3342,46.0653,61.7976,78.8429,113.9235,78.8429,11.177,0,21.9988-1.5148,32.2798-4.3365-12.6821,5.2244-26.5728,8.1128-41.1399,8.1128ZM267.98,222.5001c2.93-7.96,6.74-15.5,11.31-22.5,30.19,3.94,56.62,19.85,74.35,42.81-28.18-7.71-56.75-14.49-85.66-20.31Z'
        />
        <circle cx='264.6' cy='311.52' id='Engineer_segment2_mask' r='136.83' />
        <path
          id='Engineer_segment2_stroke1'
          d='M260.8209,174.7441c1.2558-.0341,2.5151-.0541,3.7791-.0541,75.5691,0,136.83,61.2609,136.83,136.83s-61.2609,136.83-136.83,136.83-136.83-61.2609-136.83-136.83c0-59.1811,37.5717-109.5869,90.1635-128.6658'
        />
        <path
          id='Engineer_segment2_stroke2'
          d='M267.98,222.5001c2.93-7.96,6.74-15.5,11.31-22.5,30.19,3.94,56.62,19.85,74.35,42.81-28.18-7.71-56.75-14.49-85.66-20.31Z'
        />
        <clipPath id='Engineer_segment1_clip'>
          <use href='#Engineer_segment1' />
        </clipPath>
        <clipPath id='Engineer_segment2_mask_clip'>
          <use href='#Engineer_segment2_mask' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M276.8662,126.2197c22.3769,31.1724,46.1025,37.7153,62.0645,37.7153,27.2998,0,47.2461-19.002,50.7588-37.373,2.4219-12.6689-2.3135-29.1133-22.8701-37.2725-11.8997-4.7252-21.944,10.1169-13.1357,19.4092,1.7119,1.8052,1.9648,4.1499.7529,6.9683-1.6611,3.8652-6.1016,7.7656-12.2744,7.7656-8.8252.0005-19.0859-7.8877-28.1523-21.6406-19.1533-29.0557-46.5996-45.0571-77.2837-45.0571-29.1558,0-56.2607,15.0356-69.0532,38.3052-9.021,16.4102-9.7349,35.147-2.3267,52.8594-7.3159,4.4453-14.3408,9.3818-20.9795,14.748-4.6182,3.7329-5.8115,10.2822-2.8071,15.4043l17.0269,29.0264c-27.3237,27.7524-42.8164,65.2822-42.8164,104.4414,0,82.0654,66.7642,148.8301,148.8296,148.8301s148.8301-66.7646,148.8301-148.8301c0-80.1216-63.6406-145.6587-143.0273-148.7178l-7.4932-32.8135c-2.8945-12.6737,2.8772-19.2035,13.957-3.7686Z'
        />
      </Show>
      <Show when={options.stroke}>
        <path
          d='M169.7854 202.4526 160 170 250 170 196.5712 248.1149'
          fill={props.palette.Dark}
        />
      </Show>
      <g clip-path='url(#Engineer_segment1_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Engineer_segment1_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <g stroke={props.palette.Highlight}>
            <use {...strokeWidth.x1} href='#Engineer_segment1_stroke' />
            <use {...strokeWidth.x05} href='#Engineer_segment1' />
          </g>
          <use
            {...strokeWidth.x05}
            href='#Engineer_segment1_stroke'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <g clip-path='url(#Engineer_segment2_mask_clip)'>
        <Show when={options.stroke}>
          <Rectangle fill={props.palette.Highlight} />
          <use
            {...strokeWidth.x05}
            href='#Engineer_segment2'
            stroke={props.palette.Dark}
          />
        </Show>
        <use
          fill={
            options.shading
              ? 'url(#Engineer_segment2_shading)'
              : props.palette.Flat
          }
          href='#Engineer_segment2'
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Engineer_segment2_stroke1'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Engineer_segment2_stroke1'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
