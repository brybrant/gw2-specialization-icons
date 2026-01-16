import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { LinearGradient } from '../../components/linear-gradient';

import { ellipse, outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Virtuoso = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [64.0117, 69.1138, 383.9766, 407.4263]
          : [76.018, 81.1139, 359.9641, 383.4262]
      }
    >
      <defs>
        <LinearGradient
          id='Virtuoso_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={121.5095}
          y1={304.2604}
          x2={256}
          y2={464.5398}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Virtuoso_segment1_shading2'
          viewBox={[0, 0, 256, 512]}
          x1={95.7205}
          y1={330.0494}
          x2={256}
          y2={464.5398}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Virtuoso_segment1_shading3'
          viewBox={[142.1425, 52.6435, 227.715, 227.715]}
          cx={256}
          cy={81.1139}
          dx={398.5197}
          dy={398.5197}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral, offset: 0.88 },
            { color: props.palette.Highlight },
          ]}
        />
        <LinearGradient
          id='Virtuoso_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={244.5482}
          y1={321.7546}
          x2={77.1758}
          y2={382.6732}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Virtuoso_segment2_shading2'
          viewBox={[0, 0, 235.685, 512]}
          x1={138.0943}
          y1={215.3008}
          x2={77.1758}
          y2={382.6732}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Virtuoso_segment2_shading3'
          viewBox={[83.4619, 74.1935, 171.814, 171.814]}
          cx={198.9769}
          cy={88.6211}
          dx={326.6016}
          dy={326.6016}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral, offset: 0.88 },
            { color: props.palette.Highlight },
          ]}
        />
        <path
          id='Virtuoso_segment1_stroke1'
          d='M299.8801,246.6499c-9.4345,5.1956-19.8859,8.7526-30.978,10.3236,19.8297-5.6166,34.3633-23.839,34.3633-45.4678,0-18.9931-11.2083-35.3596-27.3665-42.8723v-79.5195c0-7.4193-.5806-8-8-8h-23.7975c-7.4194,0-8,.5807-8,8v79.5195c-16.1583,7.5127-27.3665,23.8792-27.3665,42.8723,0,21.6288,14.5336,39.8512,34.3633,45.4678-11.0922-1.571-21.5436-5.1281-30.9781-10.3236-5.04,5.76-10.14,11.48-15.28,17.15,7.05,71.7499,27.6298,139.52,59.1599,200.7399,31.53-61.2199,52.11-128.9899,59.16-200.7399-5.14-5.67-10.24-11.39-15.28-17.15Z'
        />
        <Rectangle
          id='Virtuoso_segment1_stroke2'
          d={ellipse(256, 211.5057, 27.1249)}
        />
        <path
          id='Virtuoso_segment2_stroke1'
          d='M182.5059,226.7418c-6.7018,1.3371-13.6458,1.6647-20.6097.8908,16.1643-.9246,31.1758-10.8775,37.7885-26.8421,6.9495-16.7777,2.6491-35.401-9.4232-47.4912l19.5551-47.2103c4.2592-10.2827,3.7884-11.4195-6.4944-15.6788l-8.6845-3.5972c-10.2735-4.2554-11.4195-3.7884-15.6788,6.4944l-19.5551,47.2103c-17.0854.0127-33.295,10.1405-40.2445,26.9181-6.6128,15.9646-3.0358,33.6172,7.7402,45.7008-5.4715-4.377-10.1499-9.5187-13.9434-15.2031-5.4259,2.6991-10.9113,5.2544-16.4655,7.6622-17.1756,58.7383-23.265,118.5943-19.315,177.0777,44.1472-38.5609,82.1658-85.1913,111.5551-138.8706-2.2249-5.63-4.2968-11.3157-6.225-17.0609Z'
        />
        <Rectangle
          id='Virtuoso_segment2_stroke2'
          d={ellipse(159.4239, 184.1084, 25.005)}
        />
        <clipPath id='Virtuoso_segment1_clip1'>
          <use href='#Virtuoso_segment1_stroke1' />
        </clipPath>
        <clipPath id='Virtuoso_segment1_clip2'>
          <use href='#Virtuoso_segment1_stroke2' />
        </clipPath>
        <clipPath id='Virtuoso_segment2_clip1'>
          <use href='#Virtuoso_segment2_stroke1' />
        </clipPath>
        <clipPath id='Virtuoso_segment2_clip2'>
          <use href='#Virtuoso_segment2_stroke2' />
        </clipPath>
        <g
          clip-path='url(#Virtuoso_segment2_clip1)'
          id='Virtuoso_segment2_composite'
        >
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x05}
              href='#Virtuoso_segment2_stroke2'
              stroke={props.palette.Dark}
            />
          </Show>
          <g clip-path='url(#Virtuoso_segment2_clip2)'>
            <Rectangle
              fill={
                options.shading
                  ? 'url(#Virtuoso_segment2_shading1)'
                  : props.palette.Flat
              }
            />
            <Show when={options.shading}>
              <path
                d='M235.685 0 23.6077 512 0 0'
                fill='url(#Virtuoso_segment2_shading2)'
              />
              <circle
                cx='169.3689'
                cy='160.1005'
                fill='url(#Virtuoso_segment2_shading3)'
                r='85.907'
              />
            </Show>
            <Show when={options.stroke}>
              <use
                {...strokeWidth.x1}
                href='#Virtuoso_segment2_stroke1'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Virtuoso_segment2_stroke1'
                stroke={props.palette.Dark}
              />
            </Show>
          </g>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M427.0273,202.2285c-1.001-3.4233-3.4727-6.2241-6.7451-7.6426-4.1182-1.7847-8.2686-3.6875-12.3828-5.6748,2.5681-29.2452-17.9956-55.4327-47.0303-59.7764l-16.7422-40.4194c-2.71-6.5425-6.8057-16.4297-18.4121-16.4297-4.2949,0-8.2373,1.4917-12.9443,3.4419l-8.6846,3.5972c-5.7646,2.3872-12.2979,5.0933-15.1895,12.0688-.4805,1.1587-.8037,2.3125-.998,3.457v-5.7368c0-4.4458,0-10.5352-4.7324-15.2671-4.7324-4.7329-10.8213-4.7329-15.2676-4.7329h-23.7969c-4.4463,0-10.5352,0-15.2676,4.7329-4.7324,4.7319-4.7324,10.8213-4.7324,15.2671v5.7368c-.1943-1.1445-.5176-2.2983-.998-3.457-2.8916-6.9756-9.4248-9.6816-15.1895-12.0688l-8.6846-3.5972c-4.707-1.9502-8.6494-3.4419-12.9443-3.4419-11.6064,0-15.7021,9.8872-18.4121,16.4297l-16.7422,40.4194c-29.0347,4.3436-49.5983,30.5311-47.0303,59.7764-4.1143,1.9873-8.2646,3.8901-12.3828,5.6748-3.2725,1.4185-5.7441,4.2192-6.7451,7.6426-17.2559,59.0146-23.9072,119.9971-19.7695,181.2539.3076,4.5498,3.167,8.5332,7.3809,10.2783,4.2137,1.7444,9.0512.9509,12.4863-2.0488,39.4736-34.4785,73.2471-74.3779,100.6553-118.8652,7.7422,69.0908,27.7803,135.3936,59.6064,197.1875,2.0576,3.9951,6.1748,6.5059,10.668,6.5059s8.6104-2.5107,10.668-6.5059c31.8262-61.7939,51.8643-128.0967,59.6064-197.1875,27.4082,44.4873,61.1816,84.3867,100.6553,118.8652,3.4351,2.9997,8.2726,3.7932,12.4863,2.0488,4.2139-1.7451,7.0732-5.7285,7.3809-10.2783,4.1377-61.2568-2.5137-122.2393-19.7695-181.2539Z'
        />
      </Show>
      <g clip-path='url(#Virtuoso_segment1_clip1)'>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x05}
            href='#Virtuoso_segment1_stroke2'
            stroke={props.palette.Dark}
          />
        </Show>
        <g clip-path='url(#Virtuoso_segment1_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Virtuoso_segment1_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <Rectangle width='256' fill='url(#Virtuoso_segment1_shading2)' />
            <circle
              cx='256'
              cy='166.501'
              fill='url(#Virtuoso_segment1_shading3)'
              r='113.8575'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Virtuoso_segment1_stroke1'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Virtuoso_segment1_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </g>
      <use href='#Virtuoso_segment2_composite' />
      <use
        href='#Virtuoso_segment2_composite'
        transform='translate(512) scale(-1 1)'
      />
    </Icon>
  );
};
