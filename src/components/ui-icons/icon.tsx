import type { ParentComponent } from 'solid-js';

// https://lucide.dev
export const Icon: ParentComponent = (props) => (
  <svg
    viewBox='0 0 24 24'
    style={{
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2, // eslint-disable-line solid/style-prop
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    }}
  >
    {props.children}
  </svg>
);
