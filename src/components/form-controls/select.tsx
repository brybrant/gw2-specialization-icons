import { createMemo, createEffect, createUniqueId, For, Show } from 'solid-js';

import * as Icon from '../ui-icons.tsx';

import type { InputValue } from '../form-controls.tsx';

type Option<T> = {
  /** Option label */
  label: string;
  /** Option value */
  value: T;
  /** Disable selection and shuffling? */
  disabled?: boolean;
};

type Optgroup<T> = {
  /** Optgroup label */
  label: string;
  /** Optgroup options */
  options: Option<T>[];
};

type SelectProps<T> = {
  /** Select label */
  label: string;
  /** Select options */
  options: (Option<T> | Optgroup<T>)[];
  /** Shuffle button? */
  shuffle?: boolean;
  /** Select value */
  value: T;
  /** Select callback */
  callback: (value: T) => void;
};

export const Select = <T extends InputValue>(props: SelectProps<T>) => {
  const id = createUniqueId();

  /* eslint-disable-next-line no-unassigned-vars */
  let selectRef!: HTMLSelectElement;

  const currentValue = createMemo(() => JSON.stringify(props.value));

  createEffect(() => {
    selectRef.selectedIndex = Array.from(selectRef.options).findIndex(
      (option) => currentValue() === option.value,
    );
  });

  return (
    <div class='form__group'>
      <label for={id}>{props.label}</label>
      <div class='form__subgroup'>
        <select
          id={id}
          class='form__control'
          style={
            props.shuffle
              ? {
                  'border-top-right-radius': 0,
                  'border-bottom-right-radius': 0,
                }
              : undefined
          }
          onChange={(event) => {
            props.callback(JSON.parse(event.target.value) as T);
          }}
          ref={selectRef}
        >
          <For each={props.options}>
            {(option) => {
              if ('options' in option) {
                return (
                  <optgroup label={option.label}>
                    <For each={option.options}>
                      {(subOption) => {
                        const optionValue = JSON.stringify(subOption.value);

                        return (
                          <option
                            value={optionValue}
                            selected={currentValue() === optionValue}
                            disabled={subOption.disabled}
                          >
                            {subOption.label}
                          </option>
                        );
                      }}
                    </For>
                  </optgroup>
                );
              }

              const optionValue = JSON.stringify(option.value);

              return (
                <option
                  value={optionValue}
                  selected={currentValue() === optionValue}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              );
            }}
          </For>
        </select>
        <Show when={props.shuffle}>
          <button
            class='form__control--square'
            style={{
              'border-top-left-radius': 0,
              'border-bottom-left-radius': 0,
            }}
            onClick={() => {
              const options = props.options
                .flatMap((option) =>
                  'options' in option ? option.options : [option],
                )
                .filter(
                  (option) =>
                    !option.disabled &&
                    JSON.stringify(option.value) !== currentValue(),
                );

              if (options.length === 0) return;

              props.callback(
                options[Math.floor(Math.random() * options.length)].value,
              );
            }}
            aria-label={`Shuffle ${props.label} value`}
          >
            <Icon.ShuffleIcon />
          </button>
        </Show>
      </div>
    </div>
  );
};
