import { createUniqueId } from 'solid-js';

/**
 * @callback CheckboxCallback
 * @param {boolean} value
 */

/**
 * @param {object} props
 * @param {boolean} [props.disabled] Checkbox disabled status
 * @param {string} props.label Checkbox label
 * @param {boolean} props.value Checkbox value
 * @param {CheckboxCallback} props.callback Checkbox callback
 */
export function Checkbox(props) {
  const id = createUniqueId();

  return (
    <div class={`form__checkbox${props.disabled ? ' disabled' : ''}`}>
      <label for={id}>{props.label}</label>
      <input
        type='checkbox'
        id={id}
        bool:checked={props.value}
        bool:disabled={props.disabled}
        onChange={(e) => props.callback(e.target.checked)}
      />
    </div>
  );
}
