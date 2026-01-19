import { createEffect, Show } from 'solid-js';

import { Rectangle } from './rectangle';

import { RadialGradient } from './radial-gradient';

import { outlineStyle, useOptions } from '../const';

export const Favicon = () => {
  const options = useOptions();

  /** @type {SVGSVGElement} */
  let ref;

  createEffect(() => {
    /** @type {HTMLLinkElement} */
    const favicon = document.getElementById('favicon');

    const encodedSVG = encodeURIComponent(
      new XMLSerializer().serializeToString(ref),
    );

    favicon.href = `data:image/svg+xml,${encodedSVG}`;
    favicon.dataset.outline = Number(options.outline);
    favicon.dataset.shading = Number(options.shading);
    favicon.dataset.stroke = Number(options.stroke);
  });

  return (
    <svg ref={ref} viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <RadialGradient
          id='Favicon_shading'
          viewBox={[0, 0, 64, 64]}
          cy={16}
          fy={16}
          dx={80}
          dy={80}
          stops={[{ color: '#fcc' }, { color: '#f55' }, { color: '#b11' }]}
        />
        <circle id='Favicon_shape' cx='32' cy='32' r='28' />
        <clipPath id='Favicon_clip'>
          <use href='#Favicon_shape' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <circle {...outlineStyle} cx={32} cy={32} r={32} />
      </Show>
      <g clip-path='url(#Favicon_clip)' fill='none'>
        <Rectangle
          width={64}
          height={64}
          fill={options.shading ? 'url(#Favicon_shading)' : 'red'}
        />
        <Show when={options.stroke}>
          <use href='#Favicon_shape' stroke='#fcc' stroke-width='16' />
          <use href='#Favicon_shape' stroke='#b11' stroke-width='8' />
        </Show>
      </g>
    </svg>
  );
};
