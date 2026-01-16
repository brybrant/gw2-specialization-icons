import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Dragonhunter = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [77.7562, 45.395, 356.4876, 402.5931]
          : [89.79, 57.44, 332.42, 378.55]
      }
    >
      <defs>
        <RadialGradient
          id='Dragonhunter_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={348.0923}
          cy={226.2457}
          fx={380.41}
          fy={57.44}
          dx={247.5}
          dy={458.1427}
          rotate={23.7048}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Dragonhunter_shading2'
          viewBox={[-256, 0, 512, 512]}
          cx={163.9077}
          cy={226.2457}
          fx={131.59}
          fy={57.44}
          dx={247.5}
          dy={458.1427}
          rotate={-23.7048}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Dragonhunter_stroke1'
          d='M330.29,199.51c18.06-46.71,34.78-94.08,50.12-142.07-40.45,42.64-81.93,84.29-124.41,124.89-42.48-40.6-83.96-82.25-124.41-124.89,15.34,47.99,32.06,95.36,50.12,142.07-32.52-15.1-63.28-33.32-91.92-54.29,35.08,108.62,92.2401,207.31,166.21,290.77,73.97-83.46,131.13-182.15,166.21-290.77-28.64,20.97-59.4,39.19-91.92,54.29Z'
        />
        <Rectangle
          id='Dragonhunter_stroke2'
          d='M256,221.12c26.84-25.28,53.3-50.97,79.36-77.06-14.57,35.47-30.27,70.35-47.06,104.61,30.46-14.77,60.07-31.03,88.72-48.68-30.45,72.8-71.42,140.12-121.02,200.03v-178.9Z'
        />
        <clipPath id='Dragonhunter_clip1'>
          <use href='#Dragonhunter_stroke1' />
        </clipPath>
        <clipPath id='Dragonhunter_clip2'>
          <use href='#Dragonhunter_stroke2' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M415.1211,135.5376c-19.9356,14.5967-40.9385,27.8232-62.7061,39.5005,14.0254-37.6387,27.2471-75.8452,39.4258-113.9443,3.8685-12.1019-11.3927-21.1302-20.1367-11.9126-37.5889,39.6245-76.4736,78.7832-115.7041,116.5234-39.2305-37.7402-78.1152-76.899-115.7041-116.5235-8.744-9.2176-24.0052-.1893-20.1367,11.9126,12.1787,38.0991,25.4004,76.3057,39.4258,113.9443-21.7676-11.6772-42.7705-24.9038-62.7061-39.5005-9.3616-6.8545-22.0737,2.3289-18.5078,13.3701,35.1781,108.9238,92.7265,209.3808,168.6484,295.0415,4.7722,5.3844,13.1887,5.3844,17.9609,0,75.9219-85.6607,133.4704-186.1177,168.6484-295.0415,3.5659-11.0412-9.1462-20.2246-18.5078-13.3701Z'
        />
      </Show>
      <g clip-path='url(#Dragonhunter_clip1)'>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x05}
            href='#Dragonhunter_stroke2'
            stroke={props.palette.Dark}
          />
        </Show>
        <g clip-path='url(#Dragonhunter_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Dragonhunter_shading1)'
                : props.palette.Flat
            }
          />
          <Show when={options.shading}>
            <Rectangle x='-256' fill='url(#Dragonhunter_shading2)' />
          </Show>
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Dragonhunter_stroke1'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Dragonhunter_stroke1'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </g>
    </Icon>
  );
};
