import { createUniqueId, For } from 'solid-js';

/** @template T */

/**
 * @typedef {Object} Option
 * @prop {String} label Option label
 * @prop {T} value Option value
 */

/**
 * @callback RadioCallback
 * @param {T} value
 */

/**
 * @param {Object} props
 * @param {Option[]} props.options Radio options
 * @param {T} props.value Radio value
 * @param {RadioCallback} props.callback Radio callback
 */
export function Radio(props) {
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
              value={option.value}
              bool:checked={props.value == option.value}
              name={name}
              onChange={(e) => props.callback(e.target.value)}
            />
          </div>
        );
      }}
    </For>
  );
}
