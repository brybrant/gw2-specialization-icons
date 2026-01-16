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
export const Bladesworn = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [30.6339, 63.3545, 450.7322, 385.291]
          : [42.6835, 75.3544, 426.6329, options.stroke ? 367.2257 : 361.2912]
      }
    >
      <defs>
        <RadialGradient
          id='Bladesworn_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          cy={296.0344}
          fy={125.1962}
          dx={217.4652}
          dy={343.11}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Bladesworn_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          cx={141.3418}
          cy={230.5759}
          fx={240}
          fy={75.3544}
          dx={243.3323}
          dy={533.8765}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <LinearGradient
          id='Bladesworn_helix_shading1'
          viewBox={[0, 0, 512, 512]}
          x1={181}
          x2={331}
          stops={[
            { color: props.palette.Shadow },
            { color: props.palette.Midtone, offset: 0.135 },
            { color: props.palette.Midtone, offset: 0.865 },
            { color: props.palette.Shadow },
          ]}
        />
        <LinearGradient
          id='Bladesworn_helix_shading2'
          viewBox={[0, 0, 512, 512]}
          x1={181}
          x2={331}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral, offset: 0.135 },
            { color: props.palette.Highlight },
            { color: props.palette.Neutral, offset: 0.865 },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Bladesworn_segment1'
          d='M318.3101,276.4303v84.2659h-124.6202v-84.2658c0-60.3038,53.6202-151.2342,62.3101-151.2342s62.3101,90.9303,62.3101,151.2341ZM318.3101,372.924h-124.6202v25.7468h124.6202v-25.7468ZM318.3101,410.8988h-124.6202v25.7468h124.6202v-25.7468Z'
        />
        <path
          id='Bladesworn_segment1_stroke'
          d='M193.6899,276.4304c0-60.3038,53.6202-151.2342,62.3101-151.2342s62.3101,90.9303,62.3101,151.2341v160.2153h-124.6202v-160.2152Z'
        />
        <path
          id='Bladesworn_helix1_1'
          d='M326,231.3801c0,1.73-.17,3.36-.51,4.91-.37-2.61-.94-5.05-1.71-7.34-3.1201-9.38-9.35-16.1801-17.38-21.3701,9.52,4.06,16.5,9.6201,18.79,17.7401.53,1.88.81,3.89.81,6.06Z'
        />
        <path
          id='Bladesworn_helix1_2'
          d='M331,354.4201c0,2.18-.28,4.21-.84,6.12-.62-2.21-1.59-4.24-2.8799-6.12-22.02-32.11-134.67-18.92-145.44-56.65-.56-1.91-.84-3.94-.84-6.12,0-2.17.28-4.21.84-6.11.62,2.2,1.6,4.23,2.8799,6.11,22.03,32.12,134.69,18.91,145.44,56.66.56,1.9.84,3.94.84,6.11Z'
        />
        <path
          id='Bladesworn_helix1_3'
          d='M199.43,440.8301c-9-4.28-15.41-9.84-17.59-17.52-.56-1.91-.84-3.94-.84-6.12,0-1.7.17-3.32.52-4.85.37,2.6.95,5.05,1.72,7.36,2.94,8.9,8.66,15.7,16.19,21.1299Z'
        />
        <path
          id='Bladesworn_helix2_1'
          d='M326,231.3801c0,2.2-.276,4.2611-.81,6.17-10.3727,37.0764-118.62,22.64-140.43,54.15-1.29,1.85-2.27,3.87-2.92,6.0699-.56-1.91-.84-3.94-.84-6.12,0-2.17.2802-4.2099.84-6.11,10.8811-36.9304,119.0699-22.5,140.48-54.08,1.28-1.87,2.24-3.91,2.87-6.14.53,1.88.81,3.89.81,6.06Z'
        />
        <path
          id='Bladesworn_helix2_2'
          d='M331,354.4201c0,2.18-.28,4.21-.84,6.12-10.77,37.74-123.44,24.53-145.44,56.66-1.29,1.8799-2.27,3.91-2.8799,6.11-.56-1.91-.84-3.94-.84-6.12,0-2.17.28-4.21.84-6.11,10.75-37.75,123.41-24.54,145.44-56.66,1.28-1.88,2.2599-3.91,2.8799-6.11.56,1.9.84,3.94.84,6.11Z'
        />
        <path
          id='Bladesworn_segment2'
          d='M42.6835 385.7974 134.2785 180.6202 80.0506 198.3924 240 75.3544 138.3797 322.3418 42.6835 385.7974Z'
        />
        <clipPath id='Bladesworn_segment1_clip'>
          <use href='#Bladesworn_segment1' />
        </clipPath>
        <clipPath id='Bladesworn_segment2_clip'>
          <use href='#Bladesworn_segment2' />
        </clipPath>
        <clipPath id='Bladesworn_helix_clip1'>
          <use href='#Bladesworn_helix1_1' />
          <use href='#Bladesworn_helix1_2' />
          <use href='#Bladesworn_helix1_3' />
        </clipPath>
        <clipPath id='Bladesworn_helix_clip2'>
          <use href='#Bladesworn_helix2_1' />
          <use href='#Bladesworn_helix2_2' />
        </clipPath>
        <g
          clip-path='url(#Bladesworn_segment2_clip)'
          id='Bladesworn_segment2_composite'
        >
          <Rectangle
            fill={
              options.shading
                ? 'url(#Bladesworn_segment2_shading)'
                : props.palette.Flat
            }
          />
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Bladesworn_segment2'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Bladesworn_segment2'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M480.2739,380.9062l-80.5552-180.4487c31.8071,10.4245,29.6688,9.9365,32.2295,9.9365,11.437.0013,16.3829-14.5399,7.3174-21.5127l-159.9492-123.0386c-2.1562-1.6587-4.7363-2.4883-7.3164-2.4883h-32c-2.5801,0-5.1602.8296-7.3164,2.4883l-159.9492,123.0386c-9.0656,6.9728-4.1196,21.514,7.3174,21.5127,2.5607,0,.4224.488,32.2295-9.9365L31.7261,380.9062c-4.8825,10.935,7.6096,21.512,17.5894,14.8926l95.3694-63.2393,37.6713,108.0382c1.6338,4.6855,6.0912,8.0478,11.3339,8.0478h124.6201c5.2427,0,9.7001-3.3623,11.3339-8.0478l37.6713-108.0382,95.3694,63.2393c9.9798,6.6194,22.4719-3.9576,17.5894-14.8926Z'
        />
      </Show>
      <Show when={options.stroke}>
        <use fill={props.palette.Dark} href='#Bladesworn_segment1_stroke' />
        <g
          {...strokeWidth.x0125}
          fill={props.palette.Dark}
          stroke={props.palette.Dark}
        >
          <use href='#Bladesworn_helix1_1' />
          <use href='#Bladesworn_helix1_2' />
          <use href='#Bladesworn_helix1_3' />
          <use href='#Bladesworn_helix2_1' />
          <use href='#Bladesworn_helix2_2' />
        </g>
        <g clip-path='url(#Bladesworn_helix_clip1)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Bladesworn_helix_shading1)'
                : props.palette.Midtone
            }
          />
        </g>
      </Show>
      <g clip-path='url(#Bladesworn_segment1_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Bladesworn_segment1_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Bladesworn_segment1_stroke'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Bladesworn_segment1'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Bladesworn_segment1_stroke'
            stroke={props.palette.Dark}
          />
          <g
            {...strokeWidth.x0125}
            fill={props.palette.Dark}
            stroke={props.palette.Dark}
          >
            <use href='#Bladesworn_helix2_1' />
            <use href='#Bladesworn_helix2_2' />
          </g>
        </Show>
      </g>
      <Show when={options.stroke}>
        <g clip-path='url(#Bladesworn_helix_clip2)'>
          <Rectangle
            fill={
              options.shading
                ? 'url(#Bladesworn_helix_shading2)'
                : props.palette.Highlight
            }
          />
        </g>
      </Show>
      <use href='#Bladesworn_segment2_composite' />
      <use
        href='#Bladesworn_segment2_composite'
        transform='translate(512) scale(-1 1)'
      />
    </Icon>
  );
};
