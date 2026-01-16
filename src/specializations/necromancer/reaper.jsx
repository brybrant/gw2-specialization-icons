import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Reaper = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [72.3909, 20.7588, 391.1904, 480.4761]
          : [84.395, 32.76, 367.21, 456.48]
      }
    >
      <defs>
        <RadialGradient
          id='Reaper_shading'
          viewBox={[0, 0, 512, 512]}
          cx={250.4289}
          cy={-1066.0844}
          fx={211.715}
          fy={32.76}
          dx={963.2064}
          dy={3111.7344}
          rotate={-0.751}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Reaper_stroke1'
          d='M255.105,488.86c-32.659-58.3264-81.6372-108.9523-143.9-143.88,76.3658,6.3427,137.5109,67.2314,143.9,143.88ZM369.895,384.52c19.1196-27.2947,39.3994-45.1634,50.96-54.47-28.8051-122.1836-104.164-228.8813-209.14-297.29-54.9635,107.3203-111.597,248.0092-122.18,301.01-2.5907,13.0247-4.3159,26.2757-5.14,39.53,17.7436-41.1033,38.0381-81.3656,59.62-119.1,24.4205-42.6739,42.7697-72.5695,78.3-103.16-28.9813,54.0564-56.747,106.844-84.1,159.81,41.2579-49.1851,90.5188-106.4933,136.13-157.97,60.8256,36.7037,102.2521,100.432,109.13,173.42-50.12,42.22-87.93,98.58-107.28,162.94,62.5853-72.8079,134.8912-104.0416,175.41-117.29-27.3724-8.4139-57.6977-4.0356-81.71,12.57Z'
        />
        <path
          id='Reaper_stroke2'
          d='M230.185,256.73c-7.22,6.21-15.71,10.97-25.04,13.82,10.5176,20.2727,39.5624,20.2727,50.08,0-9.33-2.85-17.82-7.61-25.04-13.82ZM312.8939,256.7377c-7.22,6.21-15.71,10.97-25.04,13.82,10.5176,20.2727,39.5624,20.2727,50.08,0-9.33-2.85-17.82-7.61-25.04-13.82Z'
        />
        <clipPath id='Reaper_clip'>
          <use href='#Reaper_stroke1' />
          <use href='#Reaper_stroke2' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M265.5469,494.7744c-4.6186,8.1506-16.3705,8.0585-20.9116-.0508-32.6304-58.2754-80.7627-106.4141-139.1958-139.2178-3.436,7.5078-6.7788,15.0254-10.0269,22.5498-5.307,12.2939-23.8254,7.8646-22.9946-5.5.855-13.748,2.6543-27.585,5.3477-41.127,11.063-55.4023,68.6641-197.519,123.2686-304.1392,3.2451-6.3357,11.268-8.469,17.2324-4.5835,53.5918,34.9233,99.4814,79.208,136.3936,131.624,37.0039,52.5444,63.2041,110.7383,77.875,172.9658,1.0605,4.498-.5557,9.2041-4.1553,12.1016-6.7969,5.4717-13.2949,11.2793-19.4746,17.4004,14.9867-2.0713,30.8053-1.0583,46.2256,3.6816,11.162,3.4321,11.3031,19.2463.2041,22.877-45.876,14.999-112.6162,46.9014-170.0391,113.7061-5.5598,6.4675-15.8598,5.1954-19.749-2.2881Z'
        />
      </Show>
      <g clip-path='url(#Reaper_clip)'>
        <Rectangle
          fill={options.shading ? 'url(#Reaper_shading)' : props.palette.Flat}
        />
        <Show when={options.stroke}>
          <g stroke={props.palette.Highlight}>
            <use {...strokeWidth.x075} href='#Reaper_stroke2' />
            <use {...strokeWidth.x1} href='#Reaper_stroke1' />
          </g>
          <use
            {...strokeWidth.x05}
            href='#Reaper_stroke1'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <Show when={options.stroke}>
        <use
          {...strokeWidth.x025}
          href='#Reaper_stroke2'
          stroke={props.palette.Dark}
        />
      </Show>
    </Icon>
  );
};
