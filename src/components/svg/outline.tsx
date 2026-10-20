import { Show } from 'solid-js';

import { useOptions } from '../../options.ts';

type OutlineProps = {
  d: string;
};

export const Outline = (props: OutlineProps) => {
  const options = useOptions();

  return (
    <Show when={options.outline}>
      <path fill='#000' d={props.d} />
    </Show>
  );
};
