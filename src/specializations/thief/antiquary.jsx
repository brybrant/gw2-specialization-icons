import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Antiquary = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [32.7971, 79.7374, 446.4058, 351.5575]
          : [44.7963, 91.7336, 422.4075, 327.5618]
      }
    >
      <defs>
        <RadialGradient
          id='Antiquary_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          cy={193.598}
          fy={91.7336}
          dx={353.55}
          dy={353.55}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Antiquary_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          cx={136.8157}
          cy={262.1399}
          fx={133.9969}
          fy={159.0852}
          dx={292.8963}
          dy={315.3711}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Antiquary_segment1_stroke1'
          d='M335.1223,98.7408c-52.1454-9.3431-106.0991-9.343-158.2445,0-16.7192,2.9956-17.3992,3.8872-16.4141,20.844l12.5178,215.4724c1.0464,18.0133,2.2855,19.1743,20.3261,18.8372,42.0553-.7858,83.3297-.7858,125.385,0,18.0405.3371,19.2796-.8239,20.3261-18.8372l12.5178-215.4724c.9851-16.9568.3051-17.8484-16.4141-20.844Z'
        />
        <Rectangle
          id='Antiquary_segment1_stroke2'
          d='M256,259.6077c-9.0475-21.6621-23.2726-41.8926-42.2983-55.645,19.0257-13.7524,33.2319-33.9379,42.2983-55.6451,9.0664,21.7072,23.2727,41.8927,42.2983,55.6451-19.0256,13.7524-33.2508,33.9829-42.2983,55.645Z'
        />
        <path
          id='Antiquary_segment2_stroke1'
          d='M232.6774,367.3969c3.392,14.0551,1.6421,15.5961-14.1459,20.617-26.8254,8.5311-53.3604,17.7136-79.5859,27.5299-17.5732,6.5777-19.5762,5.6403-25.8589-12.0405L48.2551,221.0555c-5.9831-16.8376-5.3531-18.2885,11.144-25.1548,25.9365-10.7952,73.6656-28.2894,136.7882-35.6494,0,0,27.0581,168.0629,36.4902,207.1457Z'
        />
        <path
          id='Antiquary_segment2_stroke2'
          d='M148.4839,120.2808l12.5176,215.4731c1.4354,24.6967,7.7962,30.5992,32.5303,30.1387,41.9098-.7803,83.0267-.7803,124.9366,0l193.5317,146.1074H0V0l148.4839,120.2808Z'
        />
        <clipPath id='Antiquary_segment1_clip1'>
          <use href='#Antiquary_segment1_stroke1' />
        </clipPath>
        <clipPath id='Antiquary_segment1_clip2'>
          <use href='#Antiquary_segment1_stroke2' />
        </clipPath>
        <clipPath id='Antiquary_segment2_clip1'>
          <use href='#Antiquary_segment2_stroke1' />
        </clipPath>
        <clipPath id='Antiquary_segment2_clip2'>
          <use href='#Antiquary_segment2_stroke2' />
        </clipPath>
        <g
          clip-path='url(#Antiquary_segment2_clip1)'
          id='Antiquary_segment2_composite'
        >
          <g
            clip-path={options.stroke ? null : 'url(#Antiquary_segment2_clip2)'}
          >
            <Rectangle
              fill={
                options.shading
                  ? 'url(#Antiquary_segment2_shading)'
                  : props.palette.Flat
              }
            />
            <Show when={options.stroke}>
              <use
                {...strokeWidth.x1}
                href='#Antiquary_segment2_stroke1'
                stroke={props.palette.Highlight}
              />
              <use
                {...strokeWidth.x05}
                href='#Antiquary_segment2_stroke1'
                stroke={props.palette.Dark}
              />
            </Show>
          </g>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M477.5767,199.8828c-3.5718-8.0713-11.7285-11.4668-20.3643-15.061-31.4377-13.0845-63.9217-22.9205-95.7378-29.3984l2.0415-35.1426c.5381-9.2632,1.0029-17.2637-4.1152-23.7715-5.1353-6.5298-13.0259-7.9435-22.1626-9.5806-53.5286-9.5909-108.948-9.5909-162.4766,0-9.1367,1.6371-17.0273,3.0508-22.1626,9.5806-5.1182,6.5078-4.6533,14.5083-4.1152,23.7715l2.0415,35.1426c-31.8161,6.4779-64.3,16.314-95.7378,29.3984-8.6357,3.5942-16.7925,6.9897-20.3643,15.061-3.5645,8.0552-.6069,16.3784,2.5244,25.1909l64.8315,182.4468c3.7637,10.5918,8.4478,23.7744,23.3511,23.7744,5.0142,0,10.2021-1.5859,18.0215-4.5127,25.9834-9.7256,52.5684-18.9219,79.0161-27.333,8.1475-2.5908,15.8433-5.0381,20.3794-11.3613,5.3799-7.499,3.5483-16.1992,1.9761-22.7549h22.9531c-1.5723,6.5557-3.4038,15.2559,1.9761,22.7549,4.5361,6.3232,12.2319,8.7705,20.3794,11.3613,26.4478,8.4111,53.0327,17.6074,79.0161,27.333,7.8193,2.9268,13.0073,4.5127,18.0215,4.5127,14.9033,0,19.5874-13.1826,23.3511-23.7744l64.8315-182.4468c3.1313-8.8125,6.0889-17.1357,2.5244-25.1909Z'
        />
      </Show>
      <use href='#Antiquary_segment2_composite' />
      <use
        href='#Antiquary_segment2_composite'
        transform='translate(512) scale(-1 1)'
      />
      <g clip-path='url(#Antiquary_segment1_clip1)'>
        <Show when={options.stroke}>
          <Rectangle fill={props.palette.Dark} />
        </Show>
        <g clip-path='url(#Antiquary_segment1_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Antiquary_segment1_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Antiquary_segment1_stroke1'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Antiquary_segment1_stroke1'
              stroke={props.palette.Dark}
            />
            <use
              {...strokeWidth.x05}
              href='#Antiquary_segment1_stroke2'
              stroke={props.palette.Highlight}
            />
          </Show>
        </g>
      </g>
    </Icon>
  );
};
