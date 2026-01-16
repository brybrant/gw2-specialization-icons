import { createMemo, createEffect, createUniqueId, For } from 'solid-js';

/** @template T */

/**
 * @typedef {Object} Option
 * @prop {String} label Option label
 * @prop {T} value Option value
 */

/**
 * @typedef {Object} Optgroup
 * @prop {String} label Optgroup label
 * @prop {Option[]} options Optgroup options
 */

/**
 * @param {Object} props
 * @param {String} props.label
 * @param {String<T>} props.value
 * @param {Boolean} props.selected
 */
const Option = (props) => (
  <option value={props.value} bool:selected={props.selected}>
    {props.label}
  </option>
);

/**
 * @callback SelectCallback
 * @param {T} value
 */

/**
 * @param {Object} props
 * @param {String} props.label Select label
 * @param {Array.<Option|Optgroup>} props.options Select options
 * @param {T} props.value Select value
 * @param {SelectCallback} props.callback Select callback
 */
export function Select(props) {
  const id = createUniqueId();

  /** @type {HTMLSelectElement} */
  let selectRef;

  const currentValue = createMemo(() => JSON.stringify(props.value));

  createEffect(() => {
    selectRef.selectedIndex = Array.from(selectRef.options).findIndex(
      (option) => currentValue() === option.value,
    );
  });

  return (
    <div class='form__group'>
      <label for={id}>{props.label}</label>
      <select
        id={id}
        class='form__control'
        onChange={(e) => props.callback(JSON.parse(e.target.value))}
        ref={selectRef}
      >
        <For each={props.options}>
          {(option) => {
            if (Array.isArray(option.options)) {
              return (
                <optgroup label={option.label}>
                  <For each={option.options}>
                    {(subOption) => {
                      const optionValue = JSON.stringify(subOption.value);

                      return (
                        <Option
                          label={subOption.label}
                          value={optionValue}
                          selected={currentValue() === optionValue}
                        />
                      );
                    }}
                  </For>
                </optgroup>
              );
            }

            const optionValue = JSON.stringify(option.value);

            return (
              <Option
                label={option.label}
                value={optionValue}
                selected={currentValue() === optionValue}
              />
            );
          }}
        </For>
      </select>
    </div>
  );
}
