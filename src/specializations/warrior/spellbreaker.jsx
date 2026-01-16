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
export const Spellbreaker = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [75.0898, 19.48, 361.8203, 464.9399]
          : [87.09, 31.48, 337.8199, 440.94]
      }
    >
      <defs>
        <LinearGradient
          id='Spellbreaker_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={472.42}
          x2={238.1805}
          y2={371.3605}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Spellbreaker_segment1_shading2'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={472.42}
          x2={314.8596}
          y2={388.3598}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Spellbreaker_segment1_shading3'
          viewBox={[0, 0, 512, 360]}
          x1={256}
          y1={334.65}
          x2={245.9103}
          y2={277.4285}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Spellbreaker_segment1_shading4'
          viewBox={[0, 0, 256, 360]}
          x1={256}
          y1={334.65}
          x2={289.3273}
          y2={287.0538}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Spellbreaker_segment1_shading5'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={31.48}
          x2={434.7516}
          y2={210.2316}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Spellbreaker_segment1_shading6'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={31.48}
          x2={149.1651}
          y2={260.5882}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Spellbreaker_segment1_shading7'
          viewBox={[0, 334.65, 512, 35.1515]}
          x2={0}
          y2={369.8015}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Spellbreaker_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={110.5753}
          cy={137.3254}
          fx={150.8}
          fy={102.93}
          dx={600}
          dy={600}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Spellbreaker_segment2_shading2'
          viewBox={[101.6266, 124.6689, 299.888, 299.888]}
          cx={169.9855}
          cy={275.6619}
          fx={156.916}
          fy={185.0594}
          dx={300}
          dy={300}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <RadialGradient
          id='Spellbreaker_segment3_shading'
          viewBox={[0, 0, 512, 512]}
          cx={192.7602}
          cy={119.679}
          fx={194.7}
          fy={81.73}
          dx={76.1982}
          dy={76.1982}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Spellbreaker_segment1_stroke1'
          d='M256,31.48c-22.7169,96.2773-47.0023,190.6944-73.5444,285.9882,19.8659,37.0956,47.0587,93.1224,73.5444,154.9518,26.4857-61.8295,53.6785-117.8563,73.5444-154.9518-26.5421-95.2938-50.8275-189.7108-73.5444-285.9882Z'
        />
        <path
          id='Spellbreaker_segment1_stroke2'
          d='M119.4336,512c50.2008-93.2337,78.6313-140.4826,127.9964-177.35C175.2983,252.7203,92.3426,175.0822,0,105.7844L256,0l256,105.7844c-92.3426,69.2978-175.2983,146.936-247.43,228.8657,49.3651,36.8674,77.7956,84.1163,127.9964,177.35'
        />
        <Rectangle id='Spellbreaker_segment1_shading_mask' height='276.5457' />
        <path
          id='Spellbreaker_segment2'
          d='M212.74,419.48c-71.74-14.87-125.65-78.42-125.65-154.56,0-50.9959,24.3056-97.4267,63.77-126.77,1.5724-11.4703,1.6209-23.2899-.06-35.22,13.6785,18.2841,25.9657,37.9762,36.48,58.48-42.4301,24.66-70.95,70.61-70.95,123.23,0,62.56,40.33,115.7,96.41,134.84Z'
        />
        <path
          id='Spellbreaker_segment3'
          d='M194.7,81.73c-5.51,7.7-13.04,13.88-21.81,17.76,7.83,19.03,14.91,38.44,21.2,58.2,2.9-1.48,5.87-2.87,8.89-4.16-.85-24.48-3.66-48.46-8.28-71.8Z'
        />
        <clipPath id='Spellbreaker_segment1_clip1'>
          <use href='#Spellbreaker_segment1_stroke1' />
        </clipPath>
        <clipPath id='Spellbreaker_segment1_clip2'>
          <use href='#Spellbreaker_segment1_stroke2' />
        </clipPath>
        <clipPath id='Spellbreaker_segment1_shading_clip'>
          <use href='#Spellbreaker_segment1_shading_mask' />
        </clipPath>
        <clipPath id='Spellbreaker_segment2_clip'>
          <use href='#Spellbreaker_segment2' />
        </clipPath>
        <clipPath id='Spellbreaker_segment3_clip'>
          <use href='#Spellbreaker_segment3' />
        </clipPath>
        <g
          clip-path='url(#Spellbreaker_segment2_clip)'
          id='Spellbreaker_segment4'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Spellbreaker_segment2_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <circle
              fill='url(#Spellbreaker_segment2_shading2)'
              cx='251.5706'
              cy='274.6129'
              r='149.944'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Spellbreaker_segment2'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Spellbreaker_segment2'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
        <g
          clip-path='url(#Spellbreaker_segment3_clip)'
          id='Spellbreaker_segment5'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Spellbreaker_segment3_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Spellbreaker_segment3'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Spellbreaker_segment3'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M372.4727,131.7251c-.8594-9.0371-.6553-18.1382.6104-27.1211,1.6473-11.7016-13.4494-19.6674-22.2783-7.8076-.8223-3.5581-3.2529-6.6934-6.8389-8.2803-6.7529-2.9873-12.5996-7.7485-16.9072-13.769-6.1026-8.5322-19.4926-5.6373-21.5303,4.6528-4.5303,22.8843-7.335,46.3477-8.3486,69.8081-10.1846-40.1416-20.041-80.396-29.5-120.4839-1.2783-5.417-6.1143-9.2441-11.6797-9.2441s-10.4014,3.8271-11.6797,9.2441c-9.459,40.0879-19.3154,80.3423-29.5,120.4839-1.0137-23.4604-3.8184-46.9238-8.3486-69.8081-2.0377-10.2902-15.4277-13.185-21.5303-4.6528-4.3076,6.0205-10.1543,10.7817-16.9072,13.769-3.5859,1.5869-6.0166,4.7222-6.8389,8.2803-8.8289-11.8597-23.9256-3.894-22.2783,7.8076,1.2656,8.9829,1.4697,18.084.6104,27.1211-41.8244,33.1784-64.4375,82.5348-64.4375,133.1948,0,81.5093,57.6945,150.2433,135.2148,166.3096,4.7481.9847,9.5117-.985,12.2227-4.8018,7.6816,16.8271,15.2295,33.8809,22.4424,50.7168,1.8906,4.4141,6.2295,7.2754,11.0303,7.2754s9.1396-2.8613,11.0303-7.2754c7.2129-16.8359,14.7607-33.8896,22.4424-50.7168,2.711,3.8168,7.4745,5.7864,12.2227,4.8018,77.5203-16.0663,135.2148-84.8003,135.2148-166.3096,0-50.66-22.6131-100.0164-64.4375-133.1948Z'
        />
      </Show>
      <g clip-path='url(#Spellbreaker_segment1_clip1)'>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x05}
            href='#Spellbreaker_segment1_stroke2'
            stroke={props.palette.Dark}
          />
        </Show>
        <g clip-path='url(#Spellbreaker_segment1_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Spellbreaker_segment1_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <Rectangle
              width='256'
              fill='url(#Spellbreaker_segment1_shading2)'
            />
            <Rectangle
              height='360'
              fill='url(#Spellbreaker_segment1_shading3)'
            />
            <Rectangle
              width='256'
              height='360'
              fill='url(#Spellbreaker_segment1_shading4)'
            />
            <g clip-path='url(#Spellbreaker_segment1_shading_clip)'>
              <Rectangle fill='url(#Spellbreaker_segment1_shading5)' />
              <Rectangle
                width='256'
                fill='url(#Spellbreaker_segment1_shading6)'
              />
            </g>
            <Rectangle
              y='334.65'
              height='35.1515'
              fill='url(#Spellbreaker_segment1_shading7)'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x05}
              href='#Spellbreaker_segment1_stroke2'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x1}
              href='#Spellbreaker_segment1_stroke1'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Spellbreaker_segment1_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </g>
      <use href='#Spellbreaker_segment4' />
      <use href='#Spellbreaker_segment5' />
      <g transform='translate(512) scale(-1 1)'>
        <use href='#Spellbreaker_segment4' />
        <use href='#Spellbreaker_segment5' />
      </g>
    </Icon>
  );
};
