import { createUniqueId, For } from 'solid-js';

import type { InputValue } from '../form-controls.tsx';

type Option<T> = {
  /** Option label */
  label: string;
  /** Option value */
  value: T;
};

type RadioProps<T> = {
  /** Radio options */
  options?: Option<T>[];
  /** Radio label */
  label: string;
  /** Radio value */
  value: T;
  /** Radio callback */
  callback: (value: T) => void;
};

export const Radio = <T extends InputValue>(props: RadioProps<T>) => {
  const name = createUniqueId();

  return (
    <For each={props.options}>
      {(option) => {
        const id = createUniqueId();

        return (
          <div class='form__radio'>
            <label for={id}>{option.label}</label>
            <input
              type='radio'
              id={id}
              value={JSON.stringify(option.value)}
              checked={props.value == option.value}
              name={name}
              onChange={(event) => {
                props.callback(JSON.parse(event.target.value) as T);
              }}
            />
          </div>
        );
      }}
    </For>
  );
};
