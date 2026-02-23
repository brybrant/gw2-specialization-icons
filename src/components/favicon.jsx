import { createEffect, Show } from 'solid-js';

import { Rectangle } from './rectangle';

import { RadialGradient } from './radial-gradient';

import { outlineStyle, useOptions } from '../const';

/**
 * @param {Object} props
 * @param {import('../palettes').Palette} props.palette
 */
export const Favicon = (props) => {
  const options = useOptions();

  /** @type {HTMLLinkElement} */
  const favicon = document.getElementById('favicon');

  const svg = (
    <svg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
      <Show
        when={options.tiny}
        fallback={
          <>
            <defs>
              <RadialGradient
                id='Favicon_shading'
                viewBox={[0, 0, 64, 64]}
                cy={16}
                fy={16}
                dx={80}
                dy={80}
                stops={[
                  { color: props.palette.Highlight },
                  { color: props.palette.Neutral },
                  { color: props.palette.Midtone },
                  { color: props.palette.Shadow },
                ]}
              />
              <circle id='Favicon_shape' cx={32} cy={32} r={28} />
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
                fill={
                  options.shading ? 'url(#Favicon_shading)' : props.palette.Flat
                }
              />
              <Show when={options.stroke}>
                <use
                  href='#Favicon_shape'
                  stroke={props.palette.Highlight}
                  stroke-width={16}
                />
                <use
                  href='#Favicon_shape'
                  stroke={props.palette.Dark}
                  stroke-width={8}
                />
              </Show>
            </g>
          </>
        }
      >
        <circle cx={32} cy={32} r={32} fill={props.palette.Flat} />
      </Show>
    </svg>
  );

  createEffect(() => {
    const encodedSVG = encodeURIComponent(
      new XMLSerializer().serializeToString(svg),
    );

    favicon.href = `data:image/svg+xml,${encodedSVG}`;

    // Necessary to listen for these signals to re-run effect when these change
    favicon.dataset.outline = Number(options.outline);
    favicon.dataset.shading = Number(options.shading);
    favicon.dataset.stroke = Number(options.stroke);
    favicon.dataset.tiny = Number(options.tiny);
    favicon.dataset.palette = JSON.stringify(props.palette);
  });

  return <></>;
};
