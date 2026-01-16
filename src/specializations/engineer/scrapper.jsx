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
export const Scrapper = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [69.099, 55.7367, 384.7409, 403.0632]
          : [81.0603, 67.6981, 360.7798, 379.1019]
      }
    >
      <defs>
        <LinearGradient
          id='Scrapper_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          x1={246.9532}
          y1={313.6046}
          x2={316.6076}
          y2={243.9501}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Scrapper_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          x1={87.7157}
          y1={229.7685}
          x2={209.1118}
          y2={351.1646}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Scrapper_segment3_shading'
          viewBox={[0, 0, 512, 512]}
          x1={120.2059}
          y1={214.2477}
          x2={224.634}
          y2={318.6757}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Scrapper_segment4_shading'
          viewBox={[0, 0, 512, 512]}
          cx={303.8262}
          cy={135.0556}
          fx={274.6647}
          fy={164.217}
          dx={82.481}
          dy={171.6836}
          rotate={-45}
          stops={[
            { color: props.palette.Neutral, offset: 0.8 },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Scrapper_segment5_shading'
          viewBox={[0, 0, 512, 512]}
          cx={291.6523}
          cy={147.228}
          fx={277.489}
          fy={161.3913}
          dx={60.4811}
          dy={135.6836}
          rotate={-45}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Scrapper_segment6_shading'
          viewBox={[0, 0, 512, 512]}
          cx={169.379}
          cy={143.0607}
          dx={139.4832}
          dy={139.4832}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Scrapper_segment7_shading'
          viewBox={[0, 0, 512, 512]}
          cx={139.2979}
          cy={114.0857}
          dx={139.4832}
          dy={139.4832}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <path
          id='Scrapper_segment1_stroke1'
          d='M441.8401,417.49l-29.31,29.31c-43.7-43.32-89.27-84.75-136.57-124.16l49.22-49.22c36.81,49.72,75.75,97.79,116.66,144.07ZM316.6077,256.2484l-57.3562,57.3562c-8.1301,8.1301-20.4284-4.1682-12.2983-12.2983l57.3562-57.3562c8.1301-8.1301,20.4284,4.1682,12.2983,12.2983ZM324.0279,269.6208l-51.404,51.404c-5.2366,5.2366-13.1581-2.6848-7.9214-7.9214l51.404-51.404c5.2366-5.2366,13.1581,2.6848,7.9214,7.9214Z'
        />
        <Rectangle
          id='Scrapper_segment1_stroke2'
          d='M364.5665,401.396c-8.8059-8.1521,20.3862-51.7696,12.8456-61.1044l8.9432,11.0568c7.6066,9.2812-20.2164,51.513-11.4678,59.7266l-10.3209-9.6791ZM403.0753,438.184l-7.09-6.91c-8.6349-8.333,17.5628-47.2166,9.826-56.3895l6.403,7.597c7.7791,9.1371-17.7376,47.3321-9.139,55.7025Z'
        />
        <path
          id='Scrapper_segment2_stroke1'
          d='M201.5812,237.2992c33.5239,33.5239,47.6378,73.7583,31.537,89.8591l-24.0063,24.0063c-16.1008,16.1008-56.3352,1.9869-89.8592-31.537-33.5239-33.5239-47.6378-73.7583-31.537-89.8591l24.0063-24.0063c16.1008-16.1008,56.3352-1.9869,89.8592,31.537Z'
        />
        <path
          id='Scrapper_segment2_stroke2'
          d='M224,512l9.1181-184.8417c-16.1054,16.1054-56.3363,1.988-89.8596-31.5353s-47.642-73.7554-31.5366-89.8608L0,224'
        />
        <path
          id='Scrapper_segment3_stroke1'
          d='M222.2156 112.238 91.0445 243.409 195.4726 347.8371 326.6437 216.666'
        />
        <path
          id='Scrapper_segment3_stroke2'
          d='M256,0L120.2059,214.2477c-8.4304,8.4304-.3356,41.0163,31.5381,72.89s64.4597,39.9684,72.89,31.5381l287.366-62.6757'
        />
        <path
          id='Scrapper_segment3_stroke3'
          d='M256,512l93.0046-283.7538c-21.4618,21.4618-67.3895,7.9035-106.8311-31.5381-39.4416-39.4415-52.9999-85.3693-31.5381-106.8311L0,224'
        />
        <Rectangle
          id='Scrapper_segment3_stroke4'
          d='M179.1604,194.363l-35.6507,35.6507c-3.2726,3.2726-8.2224-1.6771-4.9498-4.9497l35.6507-35.6508c3.2726-3.2726,8.2224,1.6771,4.9498,4.9498Z'
        />
        <path
          id='Scrapper_segment4_stroke1'
          d='M332.9899,105.8905c33.5239,33.5239,47.6378,73.7583,31.5369,89.8592l-24.0062,24.0062c-16.1008,16.1008-56.3352,1.9869-89.8592-31.537-33.5239-33.5239-47.6378-73.7583-31.537-89.8591l24.0062-24.0062c16.1008-16.1008,56.3353-1.987,89.8592,31.5369Z'
        />
        <Rectangle
          id='Scrapper_segment4_stroke2'
          d='M349.676,190.8051c-13.3717,13.3717-46.9555,1.4678-75.0114-26.5881s-39.9599-61.6397-26.5881-75.0114,46.9555-1.4679,75.0115,26.5881,39.9598,61.6397,26.5881,75.0115Z'
        />
        <path
          id='Scrapper_segment5'
          d='M313.205,125.6753c23.3133,23.3133,35.5109,51.2511,29.4298,65.1387-13.8805,6.0882-41.8324-6.1094-65.1458-29.4227-23.3133-23.3133-35.5109-51.2652-29.4227-65.1458,13.8876-6.0811,41.8254,6.1165,65.1387,29.4298Z'
        />
        <path
          id='Scrapper_segment6'
          d='M201.2629,123.2923c-8.6509.0544-17.3035-.1362-25.9501-.5183l-50.3317,50.3317c.6974,8.3083,1.218,16.6287,1.5123,24.9561l74.7695-74.7695Z'
        />
        <path
          id='Scrapper_segment7'
          d='M180.6437,107.538l-70.1026,70.1026c-1.1314-25.6539-4.179-51.2299-9.157-76.5019,26.2408,4.179,52.7431,6.3145,79.2596,6.3993Z'
        />
        <clipPath id='Scrapper_segment1_clip1'>
          <use href='#Scrapper_segment1_stroke1' />
        </clipPath>
        <clipPath id='Scrapper_segment1_clip2'>
          <use href='#Scrapper_segment1_stroke2' />
        </clipPath>
        <clipPath id='Scrapper_segment2_clip1'>
          <use href='#Scrapper_segment2_stroke1' />
        </clipPath>
        <clipPath id='Scrapper_segment2_clip2'>
          <use href='#Scrapper_segment2_stroke2' />
        </clipPath>
        <clipPath id='Scrapper_segment3_clip1'>
          <use href='#Scrapper_segment3_stroke1' />
        </clipPath>
        <clipPath id='Scrapper_segment3_clip2'>
          <use href='#Scrapper_segment3_stroke2' />
        </clipPath>
        <clipPath id='Scrapper_segment3_clip3'>
          <use href='#Scrapper_segment3_stroke3' />
        </clipPath>
        <clipPath id='Scrapper_segment3_clip4'>
          <use href='#Scrapper_segment3_stroke4' />
        </clipPath>
        <clipPath id='Scrapper_segment4_clip1'>
          <use href='#Scrapper_segment4_stroke1' />
        </clipPath>
        <clipPath id='Scrapper_segment4_clip2'>
          <use href='#Scrapper_segment4_stroke2' />
        </clipPath>
        <clipPath id='Scrapper_segment5_clip'>
          <use href='#Scrapper_segment5' />
        </clipPath>
        <clipPath id='Scrapper_segment6_clip'>
          <use href='#Scrapper_segment6' />
        </clipPath>
        <clipPath id='Scrapper_segment7_clip'>
          <use href='#Scrapper_segment7' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M110.7676,328.1133c-38.2813-38.2813-53.5072-84.86-31.5371-106.8301l24.0059-24.0063c3.0818-3.0818,6.7456-5.4897,10.8901-7.1865-.0176-.3262-.0352-.6538-.0532-.9814-7.4996,2.3108-15.1749-3.0996-15.5205-10.9395-1.1051-25.0645-4.1151-50.2005-8.9429-74.7114-1.6113-8.1808,5.4272-15.483,13.6611-14.1699,25.5201,4.0698,51.5654,6.1671,77.4111,6.25,8.133.0261,13.8913,7.9878,11.3701,15.7202,3.1286.0423,5.9564.0517,8.7373.0366,1.207-10.4995,5.718-17.2888,9.8501-21.4209l24.0059-24.0059c21.9701-21.9701,68.5487-6.7442,106.8301,31.5371,38.2813,38.2813,53.5062,84.8595,31.5361,106.8296l-24.0059,24.0063c-5.5537,5.5537-12.9971,8.9194-21.7393,9.8755,2.9322,4.041,4.3918,8.983,3.9199,13.9648,5.1609,4.2519,7.6531,11.0355,6.1211,17.5444,35.666,47.9746,73.8449,95.0273,113.5234,139.917,4.1993,4.7509,3.9775,11.9492-.5059,16.4326l-29.3096,29.3096c-4.6705,4.6705-12.2401,4.6896-16.9336.0371-42.3004-41.931-86.8955-82.5547-132.6113-120.7979-6.1958,1.0044-12.4156-1.539-16.3906-6.3389-2.4091.2289-4.9677.0093-7.5171-.7432-1.7827,3.4678-3.9177,6.1589-5.96,8.2012l-24.0059,24.0068c-21.9701,21.9701-68.5482,6.7443-106.8296-31.5371Z'
        />
      </Show>
      <g clip-path='url(#Scrapper_segment1_clip1)'>
        <Show when={options.stroke}>
          <Rectangle fill={props.palette.Dark} />
        </Show>
        <g clip-path='url(#Scrapper_segment1_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Scrapper_segment1_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <g stroke={props.palette.Highlight}>
              <use {...strokeWidth.x1} href='#Scrapper_segment1_stroke1' />
              <use {...strokeWidth.x05} href='#Scrapper_segment1_stroke2' />
            </g>
            <use
              {...strokeWidth.x05}
              href='#Scrapper_segment1_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </g>
      <g clip-path='url(#Scrapper_segment2_clip1)'>
        <Show when={options.stroke}>
          <Rectangle fill={props.palette.Dark} />
        </Show>
        <g clip-path='url(#Scrapper_segment2_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Scrapper_segment2_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <g stroke={props.palette.Highlight}>
              <use {...strokeWidth.x1} href='#Scrapper_segment2_stroke1' />
              <use {...strokeWidth.x05} href='#Scrapper_segment2_stroke2' />
            </g>
            <use
              {...strokeWidth.x05}
              href='#Scrapper_segment2_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </g>
      <g clip-path='url(#Scrapper_segment3_clip1)'>
        <g clip-path='url(#Scrapper_segment3_clip2)'>
          <Show when={options.stroke}>
            <Rectangle fill={props.palette.Dark} />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x05}
              href='#Scrapper_segment3_stroke3'
              stroke={props.palette.Highlight}
            />
          </Show>
          <g clip-path='url(#Scrapper_segment3_clip3)'>
            <g clip-path='url(#Scrapper_segment3_clip4)'>
              <Rectangle
                fill={
                  options.shading
                    ? 'url(#Scrapper_segment3_shading)'
                    : props.palette.Flat
                }
              />
              <Show when={options.stroke}>
                <g stroke={props.palette.Highlight}>
                  <use {...strokeWidth.x1} href='#Scrapper_segment3_stroke1' />
                  <use {...strokeWidth.x05} href='#Scrapper_segment3_stroke2' />
                </g>
              </Show>
            </g>
          </g>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x05}
              href='#Scrapper_segment3_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </g>
      <g clip-path='url(#Scrapper_segment4_clip1)'>
        <Show when={options.stroke}>
          <Rectangle fill={props.palette.Dark} />
        </Show>
        <g clip-path='url(#Scrapper_segment4_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Scrapper_segment4_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <path
              d='M512,512l-147.4732-316.2504c-16.1008,16.1008-56.3388,1.9907-89.8621-31.5326s-47.6349-73.7627-31.534-89.8635L0,0l512,512Z'
              fill='url(#Scrapper_segment2_shading)'
            />
          </Show>
          <Show when={options.stroke}>
            <g stroke={props.palette.Highlight}>
              <use {...strokeWidth.x1} href='#Scrapper_segment4_stroke1' />
              <use {...strokeWidth.x05} href='#Scrapper_segment4_stroke2' />
            </g>
            <use
              {...strokeWidth.x05}
              href='#Scrapper_segment4_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </g>
      <g clip-path='url(#Scrapper_segment5_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Scrapper_segment5_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x05}
            href='#Scrapper_segment5'
            stroke={props.palette.Highlight}
          />
        </Show>
      </g>
      <g clip-path='url(#Scrapper_segment6_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Scrapper_segment6_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Scrapper_segment6'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Scrapper_segment6'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <g clip-path='url(#Scrapper_segment7_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Scrapper_segment7_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Scrapper_segment7'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Scrapper_segment7'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
