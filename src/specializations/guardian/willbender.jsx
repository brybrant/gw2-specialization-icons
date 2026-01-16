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
export const Willbender = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [50.0422, 56.8753, 411.9157, 402.4236]
          : [62.0381, 68.8489, 387.9238, 378.4493]
      }
    >
      <defs>
        <LinearGradient
          id='Willbender_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={147.7587}
          y1={179.8006}
          x2={160.0145}
          y2={196.4769}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Willbender_segment1_shading2'
          viewBox={[0, 0, 512, 512]}
          cx={256}
          cy={315.4418}
          dx={442.81}
          dy={442.81}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Willbender_segment1_shading3'
          viewBox={[0, 196.4769, 449.9619, 315.5231]}
          x1={129.5419}
          y1={207.3059}
          x2={449.9619}
          y2={422.2959}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone, offset: 0.36 },
            { color: props.palette.Shadow, offset: 0.37 },
            { color: props.palette.Midtone, offset: 0.685 },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Willbender_segment1_shading4'
          viewBox={[0, 196.4769, 512, 315.5231]}
          x1={129.5419}
          y1={207.3059}
          x2={449.9619}
          y2={422.2959}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Willbender_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={179.4019}
          x2={248.3212}
          y2={135.8535}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Willbender_segment2_shading2'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={179.4019}
          x2={281.3637}
          y2={143.1788}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Willbender_segment2_shading3'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={90.9615}
          x2={296.7938}
          y2={131.7553}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Willbender_segment2_shading4'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={90.9615}
          x2={231.6187}
          y2={143.2474}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Willbender_segment3_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={141.4652}
          y1={292.3386}
          x2={102.1112}
          y2={335.6297}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Willbender_segment3_shading2'
          viewBox={[0, 0, 102.1112, 512]}
          x1={102.1112}
          y1={292.3386}
          x2={82.4342}
          y2={313.9842}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Willbender_segment3_shading3'
          viewBox={[0, 0, 512, 512]}
          x1={121.7882}
          y1={270.693}
          x2={102.1112}
          y2={292.3386}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Willbender_segment3_shading4'
          viewBox={[0, 0, 102.1112, 512]}
          x1={102.1112}
          y1={249.0474}
          x2={62.7572}
          y2={292.3386}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Willbender_segment1'
          d='M100.3886,193.1664c-2.0805,1.4936-2.1212,1.6643-.8704,3.8991,1.7948,3.2067,3.9436,6.1878,6.3978,8.8887,1.7222,1.8953,1.8862,1.9099,3.9669.4169l26.319-18.8852c.2412.3416.4828.683.7246,1.024,5.8544,8.2549,5.6792,9.3104-2.5075,15.2597-1.6238,1.18-3.2492,2.3588-4.8771,3.5363,28.5435,41.0834,62.132,81.5399,100.19,119.33,43.4283,43.1479,91.352,81.5716,142.9096,114.5804,2.0057,1.2841,2.0341,1.3623,1.1887,3.5888-.2902.7644-.593,1.5251-.9083,2.2808,13.8365.8572,28.3839-.8524,42.52-5.65,12.9143-4.3814,24.5703-11.01,34.52-19.14-28.7626-9.3748-50.7279-21.9038-73.28-38.55-35.9107-26.9331-69.5696-56.4422-100.37-87.98-37.8512-38.7059-71.3225-80.2599-99.84-122.95-1.5343,1.1447-3.0698,2.2883-4.6064,3.4311-8.2618,6.1444-9.4466,5.9642-15.4802-2.3789-.1379-.1907-.2757-.3814-.4134-.5722l26.0412-18.696c2.0754-1.49,2.1156-1.6573.875-3.8907-1.7869-3.2167-3.9369-6.2051-6.3983-8.9014-1.7236-1.8881-1.8852-1.9023-3.9623-.4117l-21.6556,15.5399c.59.87.94,1.93.94,3.07,0,3.0009-2.4456,5.43-5.43,5.43-3.022,0-5.44-2.4544-5.44-5.43,0-1.91.98-3.59,2.48-4.56-19.0635-27.7609-35.8961-55.6214-50.5779-82.7871-2.3694-4.3841-2.6256-4.4876-7.312-2.793-3.5137,1.2706-6.9811,2.6363-10.4011,4.0948-5.3885,2.298-5.6614,3.0683-2.9764,8.2748,11.7046,22.6965,28.7074,53.2174,51.4473,87.0005.98-.69,2.16-1.09,3.44-1.09,3.317,0,6.01,2.703,6.01,6.02,0,3.3742-2.744,6.01-6.01,6.01-2.05,0-3.86-1.02-4.95-2.59l-21.7033,15.5805Z'
        />
        <path
          id='Willbender_segment2'
          d='M256 90.9615 218.9482 135.1817 256 179.4019 293.0518 135.1817Z'
        />
        <Rectangle id='Willbender_segment2_shading_mask' height='135.1817' />
        <path
          id='Willbender_segment3'
          d='M102.1112 249.0475 62.7572 292.3386 102.1112 335.6297 141.4652 292.3386Z'
        />
        <Rectangle id='Willbender_segment3_shading_mask' height='292.3386' />
        <clipPath id='Willbender_segment1_clip'>
          <use href='#Willbender_segment1' />
        </clipPath>
        <clipPath id='Willbender_segment2_clip'>
          <use href='#Willbender_segment2' />
        </clipPath>
        <clipPath id='Willbender_segment2_shading_clip'>
          <use href='#Willbender_segment2_shading_mask' />
        </clipPath>
        <clipPath id='Willbender_segment3_clip'>
          <use href='#Willbender_segment3' />
        </clipPath>
        <clipPath id='Willbender_segment3_shading_clip'>
          <use href='#Willbender_segment3_shading_mask' />
        </clipPath>
        <g
          clip-path='url(#Willbender_segment1_clip)'
          id='Willbender_segment1_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Willbender_segment1_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <path
              fill='url(#Willbender_segment1_shading2)'
              d='M512 512 296.6734 0 0 426.5327Z'
            />
            <path d='M400,512l49.9619-89.7041c-28.5297,8.4089-51.1589,6.6895-102.6562-30.743-79.6708-57.9114-133.6127-112.4938-187.2911-195.0759L0,253.3409l400,258.6591Z' />
          </Show>
          <Show when={options.stroke}>
            <g fill='none'>
              <use
                {...strokeWidth.x1}
                href='#Willbender_segment1'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Willbender_segment1'
                stroke={props.palette.Dark}
              />
            </g>
          </Show>
        </g>
        <g
          clip-path='url(#Willbender_segment3_clip)'
          id='Willbender_segment3_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Willbender_segment3_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <Rectangle
              width='102.1112'
              fill='url(#Willbender_segment3_shading2)'
            />
            <g clip-path='url(#Willbender_segment3_shading_clip)'>
              <Rectangle fill='url(#Willbender_segment3_shading3)' />
              <Rectangle
                width='102.1112'
                fill='url(#Willbender_segment3_shading4)'
              />
            </g>
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Willbender_segment3'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Willbender_segment3'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M453.6807,410.8867c-23.2007-7.5616-42.796-17.5338-64.3692-32.8212,6.3704-9.9094,11.608-20.4803,15.6242-31.5117,4.5842,2.0737,10.2141,1.1298,13.8319-2.8517l39.3545-43.291c4.1611-4.5771,4.1611-11.5674,0-16.1445l-39.3545-43.291c-3.6393-4.0051-9.3129-4.9349-13.9111-2.8133-2.8738-7.8002-6.356-15.3151-10.3724-22.4985l.6351.4559c7.0862,5.0845,13.9793,4.3586,19.8457-2.0952,3.0713-3.3804,5.7598-7.1147,7.9883-11.0981,4.2197-7.5386,2.6768-14.4663-4.3438-19.5078l-17.0674-12.2529c17.7148-26.7026,34.1758-54.7451,48.9697-83.4312,1.6494-3.1997,4.4111-8.5547,2.1621-14.7964-2.5717-7.1373-9.1124-9.6508-22.126-14.3574-9.5741-3.4607-16.2767-2.1205-21.9482,8.3726-14.1094,26.1069-29.6162,51.7012-46.1445,76.1655l-15.9854-11.4717c-6.9569-4.9927-13.8631-4.4565-19.8232,2.0708-3.0918,3.3882-5.792,7.1445-8.0234,11.1621-.3068.5521-.5731,1.0995-.8183,1.6445-4.6782-2.0065-9.4697-3.7916-14.3605-5.3456,2.4836-4.2991,2.087-9.7871-1.1943-13.7041l-37.0518-44.2202c-4.7939-5.7208-13.6026-5.7209-18.3965,0l-37.0518,44.2202c-3.2813,3.917-3.6779,9.405-1.1942,13.7042-4.8907,1.554-9.6823,3.3392-14.3605,5.3456-.2452-.5449-.5115-1.0924-.8183-1.6445-2.2314-4.0176-4.9316-7.7739-8.0234-11.1621-5.9601-6.5273-12.8663-7.0635-19.8232-2.0708l-15.9854,11.4717c-16.5283-24.4644-32.0352-50.0586-46.1445-76.1655-5.6715-10.4931-12.3741-11.8333-21.9482-8.3726-13.0136,4.7066-19.5543,7.2202-22.126,14.3574-2.249,6.2417.5127,11.5967,2.1621,14.7964,14.7939,28.686,31.2549,56.7285,48.9697,83.4312l-17.0674,12.2529c-7.0205,5.0415-8.5635,11.9692-4.3438,19.5078,2.2285,3.9834,4.917,7.7178,7.9883,11.0981,5.8664,6.4538,12.7595,7.1797,19.8457,2.0952l.6351-.4559c-4.0164,7.1834-7.4986,14.6984-10.3725,22.4987-4.5979-2.1219-10.272-1.1911-13.9122,2.8133l-39.3535,43.291c-4.1602,4.5771-4.1602,11.5674,0,16.1445l39.3535,43.291c3.6195,3.98,9.2499,4.9259,13.8333,2.8521,4.0162,11.0311,9.2537,21.602,15.624,31.5112-21.5732,15.2874-41.1685,25.2596-64.3692,32.8212-9.011,2.9362-11.2115,14.7039-3.874,20.7021,24.0068,19.6147,54.369,29.3854,85.375,27.4746,5.9924-.3716,10.7899-5.1194,11.2266-11.1074,36.835-23.959,72.0752-50.8721,104.9531-80.1523,32.8779,29.2803,68.1182,56.1934,104.9531,80.1523.4366,5.988,5.2342,10.7358,11.2266,11.1074,31.006,1.9108,61.3682-7.8599,85.375-27.4746,7.3375-5.9983,5.137-17.766-3.874-20.7021Z'
        />
      </Show>
      <use
        fill='url(#Willbender_segment1_shading3)'
        href='#Willbender_segment1_composite'
      />
      <use href='#Willbender_segment3_composite' />
      <g transform='translate(512) scale(-1 1)'>
        <use
          fill='url(#Willbender_segment1_shading4)'
          href='#Willbender_segment1_composite'
        />
        <use href='#Willbender_segment3_composite' />
      </g>
      <g clip-path='url(#Willbender_segment2_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Willbender_segment2_shading1)'
              : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <Rectangle width='256' fill='url(#Willbender_segment2_shading2)' />
          <g clip-path='url(#Willbender_segment2_shading_clip)'>
            <Rectangle fill='url(#Willbender_segment2_shading3)' />
            <Rectangle width='256' fill='url(#Willbender_segment2_shading4)' />
          </g>
        </Show>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Willbender_segment2'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Willbender_segment2'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
