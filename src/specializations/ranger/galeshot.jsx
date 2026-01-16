import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

const galeshotRectangle = {
  y: -44,
  height: 600,
};

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Galeshot = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [25.7135, 25.9302, 460.3563, 460.3563]
          : [37.8128, 37.9471, 436.2401, 436.2401]
      }
    >
      <defs>
        <RadialGradient
          id='Galeshot_shading1'
          viewBox={[0, -44, 512, 600]}
          cx={260.1775}
          cy={256}
          fx={352.5363}
          fy={148.9966}
          dx={462.25}
          dy={576.35}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Galeshot_shading2'
          viewBox={[0, -44, 512, 600]}
          cx={260.1775}
          cy={256}
          fx={352.5363}
          fy={363.0034}
          dx={462.25}
          dy={576.35}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Galeshot_segment1_stroke1'
          d='M325,146l-77.7975-109.9367c-75.2346-3.5938-100.2719,32.7961-73.851,82.0024-30.7577,16.3347-39.733,38.0005-3.3125,68.1889-33.935,27.0048-7.2894,57.199,102.9354,69.7454'
        />
        <path
          id='Galeshot_segment1_stroke2'
          d='M123.1046,172.1292l139.118,56.2079c-.0546,2.4713-.0988,5.0304-.1339,7.6819h-134.0888M119.1458,158.6658l143.4447,57.956c.3802-8.9637.9699-16.5877,1.8571-23.1906l-125.4913-96.2926M86.016,42.651l180.6788,138.6393c3.1736-12.7772,8.3755-20.987,16.7964-28.9383C231.3574,97.1802,173.0054,24.25,205.9399-17.5806'
        />
        <path
          id='Galeshot_segment2_stroke1'
          d='M64,256l-33.3987-33.3987h106.614s17.4177,17.4177,17.4177,17.4177h111.4144c0-156-101.1876-201.442-48.4587-254.1709,16.7468-16.7468,41.2405-22.405,62.2025-14.4304-19.519,14.5823-17.2727,45.8107-6.4177,74.8481,27.2279,72.8354,90.864,104.0032,68.5253,126.3418-9.9778,9.9778-18.0112-.3148-30.7405,11.0886-9.7027,8.692-10.8877,18.2209-11.0316,56.3228h24c0-10-.3798-22.1266-1.614-30.3291,29.2405,2.943,92.9621,22.9937,116.8289,46.3101-23.8668,23.3165-87.5883,43.3671-116.8289,46.3101,1.2342-8.2025,1.614-20.3291,1.614-30.3291h-24c.1439,38.1019,1.3288,47.6308,11.0316,56.3228,12.7293,11.4034,20.7627,1.1108,30.7405,11.0886,22.3386,22.3386-41.2975,53.5064-68.5253,126.3418-10.855,29.0374-13.1013,60.2658,6.4177,74.8481-20.962,7.9747-45.4557,2.3165-62.2025-14.4304-52.729-52.729,48.4587-98.1709,48.4587-254.1709h-111.4144s-17.4177,17.4177-17.4177,17.4177H30.6013s33.3987-33.3987,33.3987-33.3987Z'
        />
        <Rectangle
          {...galeshotRectangle}
          id='Galeshot_segment2_stroke2'
          d='M217.5886,526.1519h-57.5886v-254.1709h113.0473c.6298,61.9811,5.643,70.68,26.4717,86.8046-73.1013,75.9042-111.9921,137.3046-81.9304,167.3663ZM273.0473,240.019h-113.0473V-14.1519h57.5886c-30.0617,30.0617,8.8291,91.462,81.9304,167.3663-20.8287,16.1246-25.8419,24.8235-26.4717,86.8046Z'
        />
        <Rectangle
          {...galeshotRectangle}
          id='Galeshot_segment2_mask'
          d='M273.0473,271.981l-59.0473,26.019-59.3671-26.019,7-7h111.4144v7ZM273.0473,247.019h-111.4144l-7-7,59.3671-26.019,59.0473,26.019v7ZM324.1266,271.981l-13.1266,26.019-10.8734-26.019v-7h24v7ZM324.1266,247.019h-23.9999v-7s10.8734-26.019,10.8734-26.019l13.1266,26.019v7Z'
        />
        <clipPath id='Galeshot_segment1_clip1'>
          <use href='#Galeshot_segment1_stroke1' />
        </clipPath>
        <clipPath id='Galeshot_segment1_clip2'>
          <use href='#Galeshot_segment1_stroke2' />
        </clipPath>
        <clipPath id='Galeshot_segment2_clip1'>
          <use href='#Galeshot_segment2_stroke1' />
        </clipPath>
        <clipPath id='Galeshot_segment2_clip2'>
          <use href='#Galeshot_segment2_stroke2' />
        </clipPath>
        <clipPath id='Galeshot_segment2_mask_clip'>
          <use href='#Galeshot_segment2_mask' />
        </clipPath>
        <g
          clip-path='url(#Galeshot_segment1_clip1)'
          id='Galeshot_segment1_composite'
        >
          <Show when={options.stroke}>
            <Rectangle fill={props.palette.Dark} />
          </Show>
          <g clip-path='url(#Galeshot_segment1_clip2)'>
            <Rectangle {...galeshotRectangle} />
            <Show when={options.stroke}>
              <g fill='none'>
                <g stroke={props.palette.Highlight}>
                  <use {...strokeWidth.x05} href='#Galeshot_segment1_stroke2' />
                  <use {...strokeWidth.x1} href='#Galeshot_segment1_stroke1' />
                </g>
                <use
                  {...strokeWidth.x05}
                  href='#Galeshot_segment1_stroke1'
                  stroke={props.palette.Dark}
                />
              </g>
            </Show>
          </g>
        </g>
      </defs>
      <g transform='rotate(-45 256 256)'>
        <Show when={options.outline}>
          <path
            {...outlineStyle}
            d='M323.7139,314.2495c32.477-3.2739,98.504-24.7445,124.0137-49.6655,4.8169-4.7057,4.8169-12.4623,0-17.168-25.5097-24.921-91.5367-46.3916-124.0137-49.6655-3.5146-.3543-6.9299.8605-9.4082,3.1846,3.1411-12.4338,13.2788-11.3163,13.9629-11.3296,5.5234-.107,13.8711-.2686,22.1152-8.5127,6.386-6.386,12.3264-17.4186,4.3564-33.7095-11.793-24.1052-50.6846-53.3086-70.127-105.3193-8.3726-22.3978-12.1498-50.1934,2.3594-61.0327,7.5705-5.6556,5.9172-17.4689-2.915-20.8291-46.8037-17.8065-101.9096,22.1866-92.5288,70.4575-31.2853,11.224-51.7021,39.6183-33.7017,82.7202-14.4578,9.7776-42.1848,35.821-5.2188,73.2178-7.2286,8.9908-9.4138,18.1166-7.8955,26.6338-2.1177-1.6943-4.7593-2.6304-7.4976-2.6304H30.6011c-10.6684,0-16.0291,12.9417-8.4854,20.4854l24.9136,24.9136-24.9136,24.9136c-7.5437,7.5437-2.183,20.4854,8.4854,20.4854h106.6143c2.7383,0,5.3799-.936,7.4976-2.6304-1.5182,8.5172.6669,17.643,7.8955,26.6338-36.966,37.3968-9.2391,63.4401,5.2188,73.2178-18.0005,43.102,2.4164,71.4962,33.7017,82.7202-9.3808,48.2709,45.7251,88.2641,92.5288,70.4575,8.8322-3.3602,10.4855-15.1735,2.915-20.8291-14.5092-10.8393-10.732-38.635-2.3594-61.0327,19.4424-52.0108,58.334-81.2142,70.127-105.3193,7.97-16.2909,2.0295-27.3235-4.3564-33.7095-8.2441-8.2441-16.5918-8.4057-22.1152-8.5127-.6841-.0132-10.8218,1.1042-13.9629-11.3296,2.4782,2.324,5.8936,3.5389,9.4082,3.1846Z'
          />
        </Show>
        <use
          fill={
            options.shading ? 'url(#Galeshot_shading1)' : props.palette.Flat
          }
          href='#Galeshot_segment1_composite'
        />
        <use
          fill={
            options.shading ? 'url(#Galeshot_shading2)' : props.palette.Flat
          }
          href='#Galeshot_segment1_composite'
          transform='translate(0 512) scale(1 -1)'
        />
        <g
          clip-path='url(#Galeshot_segment2_clip1)'
          id='Galeshot_segment2_composite'
        >
          <Show when={options.stroke}>
            <Rectangle y={-44} height={108} fill={props.palette.Dark} />
            <Rectangle y={448} height={108} fill={props.palette.Dark} />
          </Show>
          <g clip-path='url(#Galeshot_segment2_clip2)'>
            <g
              clip-path={
                options.stroke ? '' : 'url(#Galeshot_segment2_mask_clip)'
              }
            >
              <Rectangle
                {...galeshotRectangle}
                fill={
                  options.shading
                    ? 'url(#Galeshot_shading1)'
                    : props.palette.Flat
                }
              />
              <Show when={options.stroke}>
                <g stroke={props.palette.Highlight}>
                  <use {...strokeWidth.x05} href='#Galeshot_segment2_stroke2' />
                  <use {...strokeWidth.x1} href='#Galeshot_segment2_stroke1' />
                </g>
                <use
                  {...strokeWidth.x05}
                  href='#Galeshot_segment2_stroke1'
                  stroke={props.palette.Dark}
                />
              </Show>
            </g>
          </g>
        </g>
      </g>
    </Icon>
  );
};
