import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Revenant = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [27.5888, 52.0098, 456.8225, 430.5382]
          : [39.59, 64.01, 432.8199, 406.58]
      }
    >
      <defs>
        <RadialGradient
          id='Revenant_shading1'
          viewBox={[0, 0, 512, 512]}
          cy={228.17}
          fy={64.01}
          dx={432.8199}
          dy={484.84}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Revenant_shading2'
          viewBox={[0, 0, 256, 512]}
          cx={256}
          cy={228.17}
          fx={256}
          fy={140.08}
          dx={432.8199}
          dy={484.84}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <path
          id='Revenant_icon'
          d='M472.41,228.17c-109.923-41.8199-194.5629-78.7131-216.41-88.09-21.3812,9.177-106.2669,46.1864-216.41,88.09,65.8255-47.7248,141.0143-104.439,216.41-164.16,73.9768,58.5971,149.3895,115.5688,216.41,164.16ZM256,161.2c-14.6069,17.412-30.4845,33.0066-46.68,46.42,29.939,8.2255,62.3317,8.5248,93.36,0-16.1955-13.4134-32.0731-29.008-46.68-46.42ZM387.4941,207.8831c-15.9841,15.618-55.412,44.5375-86.9141,51.9368-1.07,13.87-2.3,27.7-3.68,41.48,44.4146-19.2062,90.8789-49.0851,118.0852-82.5112-9.56-3.7636-18.8132-7.4361-27.4911-10.9056ZM124.5059,207.8833c-8.6771,3.4692-17.9327,7.1425-27.4911,10.9055,27.2063,33.4261,73.6706,63.3051,118.0852,82.5112-1.38-13.78-2.61-27.61-3.68-41.48-31.502-7.3994-70.93-36.3188-86.9141-51.9367ZM154.2869,195.8565c15.7258,27.4726,49.0676,41.903,72.0931,46.8935,5.3258,75.8568,15.0322,151.6543,29.62,227.84,14.5878-76.1857,24.2942-151.9832,29.62-227.84,23.0256-4.9905,56.3674-19.4209,72.0931-46.8935-62.371,38.5531-141.0553,38.5531-203.4263,0Z'
        />
        <clipPath id='Revenant_clip'>
          <use href='#Revenant_icon' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M479.4541,218.4546c-70.6533-51.2246-145.3457-107.8833-216.0029-163.8511-4.3665-3.4583-10.5359-3.4583-14.9023,0-70.6572,55.9678-145.3496,112.6265-216.0029,163.8511-4.8716,3.5322-6.374,10.1265-3.5132,15.4204,2.8606,5.2935,9.2007,7.6509,14.8242,5.5107,14.437-5.4927,28.4624-10.9106,41.9912-16.2026.4468,1.1362,1.0698,2.2104,1.8594,3.1807,25.8926,31.811,71.7354,63.9419,122.6299,85.9507,3.3085,1.4291,6.9978,1.2709,10.0894-.2617,5.7168,54.1533,13.6782,107.998,23.7876,160.7939,2.4764,12.935,21.0949,12.935,23.5713,0,10.1094-52.7959,18.0708-106.6406,23.7876-160.7939,3.0916,1.5327,6.7809,1.6908,10.0894.2617,50.8945-22.0088,96.7373-54.1396,122.6299-85.9507.7896-.9702,1.4126-2.0444,1.8594-3.1807,13.5288,5.292,27.5542,10.71,41.9912,16.2026,5.6235,2.1402,11.9636-.2172,14.8242-5.5107,2.8608-5.2939,1.3584-11.8882-3.5132-15.4204Z'
        />
      </Show>
      <g clip-path='url(#Revenant_clip)'>
        <Rectangle
          fill={
            options.shading ? 'url(#Revenant_shading1)' : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <Rectangle width='256' fill='url(#Revenant_shading2)' />
        </Show>
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Revenant_icon'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Revenant_icon'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
