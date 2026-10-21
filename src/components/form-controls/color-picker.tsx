import { createEffect, createSignal, createUniqueId, Show } from 'solid-js';

import * as Icon from '../ui-icons.tsx';

import type { Color } from '../../palettes.ts';

type ColorPickerProps = {
  /** Color default */
  default?: Color;
  /** Color label */
  label: string;
  /** Color value */
  value: Color;
  /** Color callback */
  callback: (color: Color) => void;
};

const hexColorPartial = /^#?[0-9A-F]{0,6}$/i;

const normalizeHex = (value: string) => {
  const hex = value.replace('#', '').toUpperCase();

  if (hex.length < 3) return undefined;

  if (hex.length === 3) {
    return `#${hex
      .split('')
      .map((digit) => digit.repeat(2))
      .join('')}`;
  }

  return `#${hex.padEnd(6, '0')}`;
};

export const ColorPicker = (props: ColorPickerProps) => {
  const id = createUniqueId();

  // eslint-disable-next-line solid/reactivity
  const [hex, setHex] = createSignal(props.value);
  const [typing, setTyping] = createSignal(false);

  createEffect(() => {
    if (!typing()) setHex(props.value);
  });

  return (
    <div class='form__group'>
      <label for={id}>{props.label}</label>
      <div class='form__subgroup'>
        <input
          type='color'
          id={id}
          class='form__control form__control--square'
          style={{
            'border-top-right-radius': 0,
            'border-bottom-right-radius': 0,
          }}
          value={props.value}
          onChange={(event) => {
            props.callback(event.target.value.toUpperCase());
          }}
        />
        <input
          type='text'
          class='form__control'
          style={
            props.default
              ? { 'border-radius': 0 }
              : {
                  'border-top-left-radius': 0,
                  'border-bottom-left-radius': 0,
                }
          }
          value={hex()}
          placeholder='#RRGGBB'
          maxLength={7}
          spellcheck={false}
          autocomplete='off'
          aria-label={`${props.label} hex code`}
          aria-invalid={!normalizeHex(hex())}
          onFocus={() => {
            setTyping(true);
          }}
          onInput={(event) => {
            const value = event.currentTarget.value;

            if (!hexColorPartial.test(value)) {
              event.currentTarget.value = hex();
              return;
            }

            setHex(value);

            const color = normalizeHex(value);

            if (color) props.callback(color);
          }}
          onBlur={() => {
            const color = normalizeHex(hex());

            setHex(color ?? props.value);

            if (color && color !== props.value) {
              props.callback(color);
            }

            setTyping(false);
          }}
        />
        <Show when={props.default}>
          <button
            class='form__control--square'
            style={{
              'border-top-left-radius': 0,
              'border-bottom-left-radius': 0,
            }}
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              props.callback(props.default!);
            }}
            aria-label={`Reset ${props.label} color`}
          >
            <Icon.ResetIcon />
          </button>
        </Show>
      </div>
    </div>
  );
};
