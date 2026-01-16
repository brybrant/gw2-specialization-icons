import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Conduit = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [68.4459, 45.1768, 375.1081, 424.4804]
          : [80.485, 57.1766, 351.03, 400.481]
      }
    >
      <defs>
        <RadialGradient
          id='Conduit_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={123.6812}
          cy={213.0627}
          fx={103.7255}
          fy={265.6956}
          dx={299.2}
          dy={266}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Conduit_segment1_shading2'
          viewBox={[129.7577, 0, 45.7233, 340.4298]}
          cx={166.8774}
          cy={240.5064}
          fx={166.8774}
          fy={340.4298}
          dx={112.1103}
          dy={215.8481}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Conduit_segment1_shading3'
          viewBox={[80.485, 70.9347, 74.2785, 83.0526]}
          cx={53.2016}
          cy={206.8549}
          fx={133.8101}
          fy={153.9873}
          dx={248.4121}
          dy={248.4121}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
          ]}
        />
        <RadialGradient
          id='Conduit_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={284.4026}
          cy={-410.7849}
          fx={210.6242}
          fy={57.1766}
          dx={131}
          dy={1552.0709}
          rotate={5}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral, offset: 0.2 },
            { color: props.palette.Midtone, offset: 0.55 },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Conduit_segment2_shading2'
          viewBox={[0, 0, 213.0736, 512]}
          cx={192.32}
          cy={275.9211}
          dx={142.1717}
          dy={353.2434}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Conduit_segment2_shading3'
          viewBox={[166.8774, 43.0782, 48.4729, 119.5106]}
          cx={190}
          cy={57.1766}
          fx={166.8774}
          fy={110.9487}
          dx={125}
          dy={220.96}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Conduit_segment3_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={97.6175}
          cy={314.8178}
          fx={87.0926}
          fy={281.9487}
          dx={178.385}
          dy={190.9023}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Conduit_segment3_shading2'
          viewBox={[87.0443, 281.9487, 82.3289, 96.5163]}
          cx={131.5193}
          cy={293.5337}
          fx={87.0926}
          fy={281.9487}
          dx={90.9114}
          dy={188.33}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral, offset: 0.3 },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Conduit_segment4_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={186.2827}
          cy={392.3407}
          fx={177.2445}
          fy={344.6069}
          dx={53.6025}
          dy={106.6332}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Conduit_segment4_shading2'
          viewBox={[175.9381, 344.6069, 43.2691, 78.9016]}
          cx={193.6034}
          cy={375.7583}
          fx={177.2445}
          fy={344.6069}
          dx={51.2267}
          dy={95.5014}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral, offset: 0.25 },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Conduit_segment5_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={256}
          cy={381.4514}
          fx={256}
          fy={328.012}
          dx={73.1802}
          dy={152.4124}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Conduit_segment5_shading2'
          viewBox={[0, 0, 256, 512]}
          cx={256}
          cy={381.4514}
          fx={256}
          fy={328.012}
          dx={73.1802}
          dy={152.4124}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral, offset: 0.2 },
            { color: props.palette.Midtone, offset: 0.6 },
            { color: props.palette.Shadow },
          ]}
        />
        <path
          id='Conduit_segment1'
          d='M154.7635,135.3665c-15.7215-22.3291-38.5063-40.1013-74.2785-49.6709,24.6076,26.8861,27.3418,61.8228,27.3418,119.3924,0,38.962-.3038,52.7089-4.1013,60.6076,7.5949,20.2026,37.0633,58.6329,63.1519,74.7342-13.5569-53.2405-11.8101-188.4304-12.1139-205.0633Z'
        />
        <path
          id='Conduit_segment2'
          d='M242.523,205.7335c0-72.4557-1.1393-126-31.8987-148.5569-7.9747,14.8101-28.2532,43.9747-43.7468,53.7722,9.5696,6.6076,15.4937,25.9747,15.4937,92.962s.5696,134.0886,30.7025,156.7595c3.4177-19.3671,21.7025-51.2658,34.9177-58.7848-4.1013-13.4431-5.4683-23.6962-5.4683-96.1519Z'
        />
        <path
          id='Conduit_segment3'
          d='M87.0926,281.9487c-10.2532,23.4683-2.5823,88.1013,32.8101,125.3165,17.1646-5.1646,42.3798-39.3418,44.2025-53.3165-24.071-6.6672-65.7722-38.8861-77.0126-72Z'
        />
        <path
          id='Conduit_segment4'
          d='M177.2445,344.607c-8.1962,27.9873-15.8734,76.2152,9.038,101.0506,12.3584-10.2318,31.6317-41.0276,30.1709-55.519-1.4241-14.1266-25.7658-23.1646-39.2089-45.5316Z'
        />
        <path
          id='Conduit_segment5'
          d='M287.5909,399.5563c-10.7089-14.3544-23.5823-42.6076-31.5909-71.5443-8.0087,28.9367-20.8821,57.1899-31.5909,71.5443-.3251,18.2496,6.7215,56.6202,31.5909,58.1013,24.8694-1.481,31.9161-39.8517,31.5909-58.1013Z'
        />
        <clipPath id='Conduit_segment1_clip'>
          <use href='#Conduit_segment1' />
        </clipPath>
        <clipPath id='Conduit_segment2_clip'>
          <use href='#Conduit_segment2' />
        </clipPath>
        <clipPath id='Conduit_segment3_clip'>
          <use href='#Conduit_segment3' />
        </clipPath>
        <clipPath id='Conduit_segment4_clip'>
          <use href='#Conduit_segment4' />
        </clipPath>
        <clipPath id='Conduit_segment5_clip'>
          <use href='#Conduit_segment5' />
        </clipPath>
        <g
          clip-path='url(#Conduit_segment1_clip)'
          id='Conduit_segment1_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Conduit_segment1_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <path
              fill='url(#Conduit_segment1_shading2)'
              d='M166.8774,340.4297c-27.2571-29.607-45.6749-60.8222-33.0673-186.4424C137.0759,147.4937,175.481,0,175.481,0'
            />
            <path
              fill='url(#Conduit_segment1_shading3)'
              d='M133.8101,153.9873c-12.1519-35.0126-31.7468-55.3671-53.3251-68.2918,0-40,74.2785,9.6709,74.2785,49.6709-7.2445,2.5955-17.6876,12.1272-20.9534,18.6209Z'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Conduit_segment1'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Conduit_segment1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
        <g
          clip-path='url(#Conduit_segment2_clip)'
          id='Conduit_segment2_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Conduit_segment2_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <path
              fill='url(#Conduit_segment2_shading2)'
              d='M192,0l16.7702,162.5886c-1.4355,10.8266-22.686,153.1059,4.3034,198.0816L0,512'
            />
            <path
              fill='url(#Conduit_segment2_shading3)'
              d='M166.8774,110.9487c0-40,43.7468-93.7722,43.7468-53.7722,8.7397,24.5589,3.7045,63.4889-1.8541,105.4121-5.2546-20.235-22.3651-41.7153-41.8927-51.6399Z'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Conduit_segment2'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Conduit_segment2'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
        <g
          clip-path='url(#Conduit_segment3_clip)'
          id='Conduit_segment3_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Conduit_segment3_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <path
              fill='url(#Conduit_segment3_shading2)'
              d='M87.0926,281.9487c20,0,120.1701,66.1474,66.8035,93.5701-35.865,18.4294-68.2758-54.0635-66.8035-93.5701Z'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Conduit_segment3'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Conduit_segment3'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
        <g
          clip-path='url(#Conduit_segment4_clip)'
          id='Conduit_segment4_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Conduit_segment4_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <path
              fill='url(#Conduit_segment4_shading2)'
              d='M177.2445,344.6069c20,0,58.1629,32.6771,34.4332,64.8781-33.4372,45.374-38.7916-30.9537-34.4332-64.8781Z'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Conduit_segment4'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Conduit_segment4'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M419.0894,260.4961c-2.7808-5.7842-2.916-23.895-2.916-55.4082,0-58.6787,3.4932-88.6733,24.1938-111.29,8.0743-8.8212-.4007-22.7846-11.9531-19.6943-26.0829,6.9771-48.7197,18.289-70.0118,34.8915-1.0157-2.8228-4.3305-6.5856-6.8661-8.1889-12.2488-7.7455-31.3164-33.9448-39.5942-49.3184-3.4562-6.4173-11.7927-8.2922-17.6621-3.9878-18.1018,13.2742-33.6058,34.7336-38.2798,61.4951-4.674-26.7614-20.178-48.2208-38.2798-61.4951-5.8694-4.3044-14.2059-2.4295-17.6621,3.9878-8.2778,15.3735-27.3455,41.5728-39.5942,49.3184-2.5356,1.6033-5.8503,5.3661-6.8661,8.1889-21.2922-16.6025-43.9289-27.9144-70.0118-34.8915-11.5524-3.0903-20.0275,10.8731-11.9531,19.6943,20.7007,22.6167,24.1938,52.6113,24.1938,111.29,0,31.5132-.1353,49.624-2.916,55.4082-6.7619,14.0652-12.4156,6.5818-16.814,16.6484-12.8932,29.5089-2.27,99.0836,35.1104,138.3906,3.1378,3.2983,7.8471,4.5185,12.1533,3.2217,11.4595-3.4482,24.0469-14.8447,34.0557-27.5869-.6069,22.4053,3.7505,46.3926,20.394,62.9854,4.3804,4.3666,11.3611,4.6893,16.1245.7451,6.313-5.2256,14.8374-15.748,21.8433-27.5332,5.4243,21.6868,18.8588,42.29,40.2222,42.29s34.7979-20.6032,40.2222-42.29c7.0059,11.7852,15.5303,22.3076,21.8433,27.5332,4.7634,3.9442,11.7441,3.6215,16.1245-.7451,16.6436-16.5928,21.001-40.5801,20.394-62.9854,10.0088,12.7422,22.5962,24.1387,34.0557,27.5869,4.3062,1.2968,9.0156.0766,12.1533-3.2217,37.3803-39.3071,48.0036-108.8817,35.1104-138.3906-4.3984-10.0667-10.0521-2.5832-16.814-16.6484Z'
        />
      </Show>
      <use href='#Conduit_segment1_composite' />
      <use href='#Conduit_segment2_composite' />
      <use href='#Conduit_segment3_composite' />
      <use href='#Conduit_segment4_composite' />
      <g transform='translate(512) scale(-1 1)'>
        <use href='#Conduit_segment1_composite' />
        <use href='#Conduit_segment2_composite' />
        <use href='#Conduit_segment3_composite' />
        <use href='#Conduit_segment4_composite' />
      </g>
      <g clip-path='url(#Conduit_segment5_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Conduit_segment5_shading1)'
              : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <Rectangle width='256' fill='url(#Conduit_segment5_shading2)' />
        </Show>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Conduit_segment5'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Conduit_segment5'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
