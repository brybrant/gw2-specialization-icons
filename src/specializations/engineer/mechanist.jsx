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
export const Mechanist = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [49.7979, 64.4492, 412.4043, 387.4366]
          : [61.7975, 76.4493, 388.405, 363.4368]
      }
    >
      <defs>
        <RadialGradient
          id='Mechanist_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          cx={128.6742}
          cy={158.3943}
          fx={184.038}
          fy={76.4493}
          dx={238.9422}
          dy={244.5277}
          rotate={-55.9562}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Mechanist_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={112.0104}
          cy={345.7999}
          fx={132.6456}
          fy={351.3797}
          dx={218.2899}
          dy={99.9971}
          rotate={-101.8111}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Mechanist_segment2_shading2'
          viewBox={[0, 0, 512, 447.5398]}
          x1={184.038}
          y1={271.3798}
          x2={80.71}
          y2={331.0363}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Mechanist_segment3_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={439.8861}
          x2={226.0613}
          y2={270.0954}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone, offset: 0.4 },
            { color: props.palette.Neutral, offset: 0.8 },
            { color: props.palette.Highlight },
          ]}
        />
        <LinearGradient
          id='Mechanist_segment3_shading2'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={439.8861}
          x2={354.8903}
          y2={298.6561}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <RadialGradient
          id='Mechanist_segment3_shading3'
          viewBox={[12, 133, 488, 180]}
          cy={280}
          fy={260}
          dx={132}
          dy={92}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <RadialGradient
          id='Mechanist_segment4_shading1'
          viewBox={[0, 0, 512, 512]}
          cy={208.6446}
          fy={197.9778}
          dx={101.7739}
          dy={101.7739}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Mechanist_segment4_shading2'
          viewBox={[190, 167, 132, 72]}
          cy={200.5388}
          fy={197.9778}
          dx={76.9224}
          dy={76.9224}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Mechanist_segment1_stroke1'
          d='M184.038,76.4493c-67.5116,0-122.2405,58.9496-122.2405,131.6677v49.2627h122.2405V76.4493Z'
        />
        <Rectangle
          id='Mechanist_segment1_stroke2'
          d='M184.038,161.3418c-29.0151,0-52.6205,25.019-52.6205,55.772v54.266h-14v-54.266c0-38.4722,29.8857-69.772,66.6205-69.772,50,0,50,14,0,14Z'
        />
        <path
          id='Mechanist_segment2'
          d='M64.7251,271.3798l32.576,155.7813c2.6034,12.4498,2.9421,12.725,15.6612,12.725h27.9018c12.9928,0,13.4299-.3651,15.7441-13.1501l6.9861-38.5945c2.2473-12.4153,2.0617-12.7565-9.582-17.6157l-16.9052-7.0549c-12.3012-5.1336-12.6329-5.7979-9.3429-18.7149l7.5082-29.4783c2.1645-8.4983,2.3417-7.7442-3.3807-14.3895l-3.9803-4.6223h40.1266c14.8387,0,16-1.1613,16-16v-8.886h-119.3129Z'
        />
        <path
          id='Mechanist_segment3'
          d='M277.0917,269.076h-21.0917s-21.0917,0-21.0917,0c-33.3055,0-37.1938,4.6562-31.5331,37.4771,12.1224,70.2865,52.6249,133.333,52.6249,133.333h0s40.5024-63.0464,52.6249-133.333c5.6606-32.8209,1.7723-37.4771-31.5331-37.4771Z'
        />
        <circle id='Mechanist_segment4' cx='256' cy='218.4937' r='41.0316' />
        <clipPath id='Mechanist_segment1_clip1'>
          <use href='#Mechanist_segment1_stroke1' />
        </clipPath>
        <clipPath id='Mechanist_segment1_clip2'>
          <use href='#Mechanist_segment1_stroke2' />
        </clipPath>
        <clipPath id='Mechanist_segment2_clip'>
          <use href='#Mechanist_segment2' />
        </clipPath>
        <clipPath id='Mechanist_segment3_clip'>
          <use href='#Mechanist_segment3' />
        </clipPath>
        <clipPath id='Mechanist_segment4_clip'>
          <use href='#Mechanist_segment4' />
        </clipPath>
        <g
          clip-path='url(#Mechanist_segment1_clip1)'
          id='Mechanist_segment1_composite'
        >
          <Show when={options.stroke}>
            <Rectangle fill={props.palette.Dark} />
          </Show>
          <g clip-path='url(#Mechanist_segment1_clip2)'>
            <Rectangle
              fill={
                options.shading
                  ? 'url(#Mechanist_segment1_shading)'
                  : props.palette.Flat
              }
            />
            <Show when={options.stroke}>
              <g stroke={props.palette.Highlight}>
                <use {...strokeWidth.x1} href='#Mechanist_segment1_stroke1' />
                <use {...strokeWidth.x05} href='#Mechanist_segment1_stroke2' />
              </g>
              <use
                {...strokeWidth.x05}
                href='#Mechanist_segment1_stroke1'
                stroke={props.palette.Dark}
              />
            </Show>
          </g>
        </g>
        <g
          clip-path='url(#Mechanist_segment2_clip)'
          id='Mechanist_segment2_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Mechanist_segment2_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <path
              d='M512 447.5398 0 245.8877 512 0Z'
              fill='url(#Mechanist_segment2_shading2)'
            />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Mechanist_segment2'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Mechanist_segment2'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M462.2021,208.1172c0-79.2188-60.2197-143.668-134.2402-143.668-6.6172,0-12,5.3833-12,12v172.0996l-7.9248-40.3081c-4.874-24.7876-26.7578-42.7788-52.0371-42.7788s-47.1631,17.9911-52.0371,42.7787l-7.9248,40.3081V76.4492c0-6.6167-5.3828-12-12-12-74.0205,0-134.2402,64.4492-134.2402,143.668v49.2627c0,4.3447,1.9578,6.6495,3.8311,9.0146-.6182,2.3495-1.2951,4.3528-.6494,7.4414l32.5752,155.7822c3.8082,18.2047,8.8085,22.2676,27.4072,22.2676h27.9023c19.0007,0,24.1658-4.3112,27.5518-23.0078l6.9863-38.5996c3.2855-18.1484.2546-23.7244-16.7666-30.8262l-20.0957-8.3857c10.4702-41.0312,9.2305-35.5659,10.2705-42.8008h19.2275c13.7993,0,14.9778-1.3333,22.5996-5.3018,8.3301,51.5273,32.3404,107.6952,55.2666,143.4092,4.7184,7.3407,15.473,7.3407,20.1914,0,22.9262-35.714,46.9365-91.8818,55.2666-143.4092,7.6218,3.9684,8.8003,5.3018,22.5996,5.3018h19.2275c1.04,7.2349-.1997,1.7695,10.2705,42.8008l-20.0957,8.3857c-17.0212,7.1018-20.0521,12.6777-16.7666,30.8262l6.9863,38.5996c3.386,18.6966,8.551,23.0078,27.5518,23.0078h27.9023c18.5988,0,23.5991-4.0629,27.4072-22.2676l32.5752-155.7822c.6457-3.0886-.0312-5.0919-.6494-7.4414,1.8732-2.3651,3.8311-4.6699,3.8311-9.0146v-49.2627Z'
        />
      </Show>
      <use href='#Mechanist_segment1_composite' />
      <use href='#Mechanist_segment2_composite' />
      <g transform='translate(512) scale(-1 1)'>
        <use href='#Mechanist_segment1_composite' />
        <use href='#Mechanist_segment2_composite' />
      </g>
      <g clip-path='url(#Mechanist_segment3_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Mechanist_segment3_shading1)'
              : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <Rectangle width='256' fill='url(#Mechanist_segment3_shading2)' />
          <path
            d='M500 133 256 313 12 133'
            fill='url(#Mechanist_segment3_shading3)'
          />
        </Show>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Mechanist_segment3'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Mechanist_segment3'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <g clip-path='url(#Mechanist_segment4_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Mechanist_segment4_shading1)'
              : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <path
            d='M190 167 256 239 322 167'
            fill='url(#Mechanist_segment4_shading2)'
          />
        </Show>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Mechanist_segment4'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Mechanist_segment4'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
