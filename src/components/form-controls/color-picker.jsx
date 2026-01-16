import { createUniqueId, Show } from 'solid-js';

/** @typedef {import('../../palettes.js').Color} Color */

/**
 * @callback ColorCallback
 * @param {Color} color
 */

/**
 * @param {Object} props
 * @param {Color} [props.default] - Color default
 * @param {String} props.label - Color label
 * @param {Color} props.value - Color value
 * @param {ColorCallback} props.callback - Color callback
 */
export function ColorPicker(props) {
  const id = createUniqueId();

  return (
    <div class='form__group'>
      <label for={id}>{props.label}</label>
      <div class='form__subgroup'>
        <input
          type='color'
          id={id}
          class='form__control'
          style={
            props.default
              ? {
                  width: '50%',
                  'border-top-right-radius': 0,
                  'border-bottom-right-radius': 0,
                }
              : null
          }
          value={props.value}
          onChange={(e) => props.callback(e.target.value)}
        />
        <Show when={props.default}>
          <button
            style={{
              width: '50%',
              'border-top-left-radius': 0,
              'border-bottom-left-radius': 0,
            }}
            onClick={() => props.callback(props.default)}
          >
            Reset
          </button>
        </Show>
      </div>
    </div>
  );
}
