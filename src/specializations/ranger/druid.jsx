import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { ellipse, outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Druid = (props) => {
  const options = useOptions();

  const Normal = () => (
    <Icon
      viewBox={
        options.outline
          ? [44.021, 44.021, 423.958, 423.958]
          : [56, 56, 400, 400]
      }
    >
      <defs>
        <RadialGradient
          id='Druid_shading'
          viewBox={[0, 0, 512, 512]}
          fy={148.79}
          dx={400.6835}
          dy={400.6835}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <circle id='Druid_circle' cx={256} cy={256} r={107.21} />
        <Rectangle
          id='Druid_circle_stroke'
          d='M247.36,347.44c52.1137-49.8412,52.1137-133.0388,0-182.88,53.8797-5.1227,100.49,37.3174,100.49,91.44s-46.6103,96.5627-100.49,91.44Z'
        />
        <path
          id='Druid_point'
          d={
            options.stroke
              ? 'M286.09,140.62c-9.61-2.5-19.69-3.83-30.09-3.83s-20.48,1.33-30.09,3.83l30.09-84.62,30.09,84.62Z'
              : 'M256,126c8.8359,0,17.4644.8857,25.8054,2.5656l-25.8054-72.5656-25.8054,72.5656c8.3409-1.6799,16.9695-2.5656,25.8054-2.5656Z'
          }
        />
        <g id='Druid_stroke'>
          <use href='#Druid_circle' />
          <use href='#Druid_point' />
          <use href='#Druid_point' transform='rotate(45 256 256)' />
          <use href='#Druid_point' transform='rotate(90 256 256)' />
          <use href='#Druid_point' transform='rotate(135 256 256)' />
          <use href='#Druid_point' transform='rotate(180 256 256)' />
          <use href='#Druid_point' transform='rotate(225 256 256)' />
          <use href='#Druid_point' transform='rotate(270 256 256)' />
          <use href='#Druid_point' transform='rotate(315 256 256)' />
        </g>
        <clipPath id='Druid_clip'>
          <use href='#Druid_circle' />
          <use href='#Druid_point' />
          <use href='#Druid_point' transform='rotate(45 256 256)' />
          <use href='#Druid_point' transform='rotate(90 256 256)' />
          <use href='#Druid_point' transform='rotate(135 256 256)' />
          <use href='#Druid_point' transform='rotate(180 256 256)' />
          <use href='#Druid_point' transform='rotate(225 256 256)' />
          <use href='#Druid_point' transform='rotate(270 256 256)' />
          <use href='#Druid_point' transform='rotate(315 256 256)' />
        </clipPath>
        <clipPath id='Druid_circle_clip'>
          <use href='#Druid_circle_stroke' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M144.4919,306.5401c1.4167-2.9804.0319-6.3236-3.0773-7.4293l-89.4351-31.8042c-10.6113-3.7732-10.6113-18.8396,0-22.6128l89.435-31.8049c3.1092-1.1057,4.494-4.4489,3.0773-7.4293l-40.7511-85.7292c-4.8352-10.173,5.8165-20.8244,15.9897-15.9897l85.7294,40.7512c2.9804,1.4167,6.3236.0319,7.4293-3.0773l31.8047-89.4351c3.7732-10.6113,18.8396-10.6113,22.6128,0l31.8043,89.4349c1.1057,3.1093,4.4489,4.4941,7.4293,3.0773l85.7302-40.751c10.1713-4.8351,20.8242,5.8184,15.9893,15.9897l-40.7526,85.7299c-1.4168,2.9804-.032,6.3236,3.0773,7.4292l89.4361,31.8043c10.6113,3.7732,10.6113,18.8396,0,22.6128l-89.4344,31.8046c-3.1092,1.1057-4.494,4.4489-3.0773,7.4293l40.751,85.728c4.8345,10.1715-5.818,20.8253-15.9893,15.9902l-85.7305-40.7512c-2.9804-1.4167-6.3236-.0319-7.4293,3.0773l-31.8041,89.4355c-3.7732,10.6113-18.8396,10.6113-22.6128,0l-31.8045-89.4358c-1.1057-3.1093-4.4489-4.494-7.4293-3.0773l-85.7296,40.7513c-10.1713,4.8351-20.8251-5.8181-15.9897-15.9893l40.7512-85.7294Z'
        />
      </Show>
      <g clip-path='url(#Druid_clip)'>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x05}
            href='#Druid_circle_stroke'
            stroke={props.palette.Dark}
          />
        </Show>
        <g clip-path='url(#Druid_circle_clip)'>
          <Rectangle
            fill={options.shading ? 'url(#Druid_shading)' : props.palette.Flat}
          />
          <Show when={options.stroke}>
            <use
              {...strokeWidth.x1}
              href='#Druid_stroke'
              stroke={props.palette.Highlight}
            />
            <use
              {...strokeWidth.x05}
              href='#Druid_stroke'
              stroke={props.palette.Dark}
            />
          </Show>
        </g>
      </g>
    </Icon>
  );

  return (
    <Show when={options.tiny} fallback={<Normal />}>
      <Icon fill={props.palette.Flat}>
        <defs>
          <circle id='Druid_tiny' cx={16} cy={16} r={8} />
          <Rectangle
            id='Druid_tiny_mask'
            d={ellipse(16, 16, 10.5)}
            width={32}
            height={32}
          />
          <clipPath id='Druid_tiny_clip1'>
            <use href='#Druid_tiny' />
          </clipPath>
          <clipPath id='Druid_tiny_clip2'>
            <use href='#Druid_tiny_mask' />
          </clipPath>
        </defs>
        <g clip-path='url(#Druid_tiny_clip1)'>
          <use
            fill='none'
            href='#Druid_tiny'
            stroke={props.palette.Flat}
            stroke-width={4}
          />
          <circle cx={7} cy={16} r={10} />
        </g>
        <path
          clip-path='url(#Druid_tiny_clip2)'
          d='M0 16 28 4 16 32 4 4 32 16 4 28 16 0 28 28Z'
        />
      </Icon>
    </Show>
  );
};
