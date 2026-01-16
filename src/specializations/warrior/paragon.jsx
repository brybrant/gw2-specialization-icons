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
export const Paragon = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [39.8618, 39.5785, 432.2763, 426.3795]
          : [51.8354, 51.5978, 408.3291, 402.3605]
      }
    >
      <defs>
        <LinearGradient
          id='Paragon_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={144.0502}
          x2={345.5642}
          y2={233.6144}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
          ]}
        />
        <LinearGradient
          id='Paragon_segment1_shading2'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={144.0502}
          x2={202.47}
          y2={258.8458}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Paragon_segment2_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={256}
          y1={453.9583}
          x2={221.8156}
          y2={260.089}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <LinearGradient
          id='Paragon_segment2_shading2'
          viewBox={[0, 0, 256, 512]}
          x1={256}
          y1={453.9583}
          x2={368.9143}
          y2={292.7}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
          ]}
        />
        <RadialGradient
          id='Paragon_segment3_shading'
          viewBox={[0, 0, 512, 512]}
          cx={234.8618}
          cy={187.5744}
          fx={159}
          fy={228}
          dx={390}
          dy={430}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Paragon_segment'
          d='M256,144.0502c-25.3528,19.1254-54.2054,33.8584-85.4263,43.0674,9.4559,9.2161,9.0612,26.4388,2.9179,36.6944-7.9383-3.358-16.0063-6.4787-24.2012-9.3546.2093-17.0345,2.0796-43.8886,11.7203-45.4612-40.7089-31.2151-76.6309-71.1924-69.942-117.3984-47.5497,58.4339-16.7143,100.0541,37.5216,135.8846v23.0391l-4.1283-19.5658c-21.8544-6.7975-62.2595-34.1392-67.0329-62.3264-27.7708,84.9024,56.1152,74.6682,71.1612,106.9523-16.1473-18.0436-46.9068-12.1196-71.8941-33.6512,5.1266,37.6709,23.4684,62.3734,71.8941,57.1385-6.4637,5.5957-30.9194,13.5704-52.4329.5199,11.2488,42.5952,45.6653,41.2277,53.7142,35.8541,0-10.1459,9.9545-18.3707,22.2341-18.3707s22.2341,8.2248,22.2341,18.3707c0,9.8905-9.4609,17.9517-21.3126,18.3515-.1841,20.5583-5.0263,52.1194-15.7507,58.8221,13.4975-1.6151,87.2334,23.466,118.7235,81.3418'
        />
        <path
          id='Paragon_segment1_mask'
          d='M379,0l-40.4916,223.812c-29.3697,12.4236-56.9506,28.1204-82.5084,46.9011-25.5578-18.7807-53.1387-34.4775-82.5084-46.9011L133,0'
        />
        <path
          id='Paragon_segment2_mask'
          d='M294.313,512v-251.1673c-13.2538,7.9523-26.0396,16.6713-38.313,26.1588-12.2734-9.4875-25.0592-18.2065-38.313-26.1588v251.1673'
        />
        <path
          id='Paragon_segment3_mask'
          d='M204.687,512V253.3612c-17.6438-9.6905-36.0687-18.0618-55.2255-25.0367,0,0-.2698-5.8445-.1712-13.8671L256,0H0v512h204.687Z'
        />
        <Show when={options.stroke}>
          <path
            id='Paragon_segment3_stroke'
            d='M151.803,221.726s-2.591-.899-2.5127-7.2685'
          />
          <g id='Paragon_composite'>
            <use href='#Paragon_segment' />
            <use
              href='#Paragon_segment'
              transform='translate(512) scale(-1 1)'
            />
          </g>
          <g id='Paragon_stroke'>
            <use
              {...strokeWidth.x1}
              href='#Paragon_composite'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Paragon_composite'
              stroke={props.palette.Dark}
            />
          </g>
        </Show>
        <clipPath id='Paragon_clip'>
          <use href='#Paragon_segment' />
          <use href='#Paragon_segment' transform='translate(512) scale(-1 1)' />
          <path d='M256 453.9583 210 280 256 144.0502 302 280' />
        </clipPath>
        <clipPath id='Paragon_segment1_mask_clip'>
          <use href='#Paragon_segment1_mask' />
        </clipPath>
        <clipPath id='Paragon_segment2_mask_clip'>
          <use href='#Paragon_segment2_mask' />
        </clipPath>
        <clipPath id='Paragon_segment3_mask_clip'>
          <use href='#Paragon_segment3_mask' />
        </clipPath>
        <g
          clip-path='url(#Paragon_segment3_mask_clip)'
          id='Paragon_segment3_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Paragon_segment3_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x05}
              href='#Paragon_segment3_mask'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x1}
              href='#Paragon_segment3_stroke'
              stroke={props.palette.Highlight}
            />
            <use href='#Paragon_stroke' />
            <use
              {...strokeWidth.x05}
              href='#Paragon_segment3_stroke'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M263.2266,134.4702c23.3545,17.617,49.2192,30.9663,76.9433,39.7178-2.7907-5.815-.3312-11.7636,3.5176-14.7148,48.8977-37.4951,70.2813-72.2184,65.3677-106.1562-1.7197-11.878,13.4541-18.7922,21.1836-9.2935,20.2889,24.9332,28.8452,49.374,25.4365,72.6562,4.7012.4321,8.7944,3.6138,10.3008,8.2192,10.4333,31.8976,6.4858,52.8809-3.4126,67.4756,3.4077,2.5879,5.2202,6.8428,4.6309,11.1738-2.9574,21.7324-10.0371,38.3213-21.165,49.6963,1.7144,2.7544,2.2764,6.1489,1.4155,9.4087-14.9509,56.6129-68.6385,52.8406-76.0295,38.1965-2.0457,25.6519,3.3258,50.282,7.7887,58.8733,4.4629,8.5913,9.1643,10.2794,6.8375,16.8814s-13.5486,7.2999-22.6217,9.8374c-21.1133,5.9047-72.5364,28.5084-96.8792,73.2515-4.5379,8.3409-16.5431,8.3409-21.081,0-24.3428-44.7431-75.766-67.3469-96.8793-73.2515-9.0732-2.5374-20.295-3.2354-22.6217-9.8374s2.3746-8.2901,6.8375-16.8814,9.8344-33.2214,7.7887-58.8733c-7.391,14.644-61.0786,18.4164-76.0295-38.1965-.8609-3.2598-.2988-6.6543,1.4155-9.4087-11.1279-11.375-18.2076-27.9639-21.165-49.6963-.5894-4.3311,1.2231-8.5859,4.6309-11.1738-9.8984-14.5947-13.8459-35.578-3.4126-67.4756,1.5064-4.6055,5.5996-7.7871,10.3008-8.2192-3.4087-23.2822,5.1476-47.723,25.4365-72.6562,7.7295-9.4988,22.9033-2.5845,21.1836,9.2935-4.9137,33.9378,16.47,68.6612,65.3677,106.1562,3.8487,2.9512,6.3083,8.8998,3.5176,14.7148,27.7241-8.7515,53.5888-22.1008,76.9434-39.7178,4.2773-3.2265,10.1759-3.2265,14.4532,0Z'
        />
      </Show>
      <g clip-path='url(#Paragon_clip)'>
        <Show when={options.stroke}>
          <Rectangle fill={props.palette.Dark} />
        </Show>
        <g clip-path='url(#Paragon_segment1_mask_clip)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Paragon_segment1_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <Rectangle width='256' fill='url(#Paragon_segment1_shading2)' />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x05}
              href='#Paragon_segment1_mask'
              stroke={props.palette.Highlight}
            />
            <use href='#Paragon_stroke' />
          </Show>
        </g>
        <g clip-path='url(#Paragon_segment2_mask_clip)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Paragon_segment2_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <Rectangle width='256' fill='url(#Paragon_segment2_shading2)' />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x05}
              href='#Paragon_segment2_mask'
              stroke={props.palette.Highlight}
            />
            <use href='#Paragon_stroke' />
          </Show>
        </g>
        <use href='#Paragon_segment3_composite' />
        <use
          href='#Paragon_segment3_composite'
          transform='translate(512) scale(-1 1)'
        />
      </g>
    </Icon>
  );
};
