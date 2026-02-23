import { createMemo, createUniqueId, For, Show } from 'solid-js';

/** @template T */

/**
 * @typedef {object} Option
 * @prop {string} label Option label
 * @prop {T} value Option value
 */

/**
 * @callback RangeCallback
 * @param {number} value
 */

/**
 * @param {object} props
 * @param {string} props.label Range label
 * @param {number} props.min Range minimum
 * @param {number} props.max Range maximum
 * @param {number|'any'} [props.step] Range granularity (step)
 * @param {number} props.value Range value
 * @param {Option[]} [props.list] Range suggested values
 * @param {RangeCallback} props.callback Range callback
 */
export function Range(props) {
  const id = createUniqueId();

  const datalist = createMemo(() =>
    Array.isArray(props.list) ? createUniqueId() : null,
  );

  return (
    <div class='form__group'>
      <label for={id}>{props.label}</label>
      <input
        type='range'
        id={id}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        list={datalist()}
        onInput={(e) => props.callback(e.target.valueAsNumber)}
      />
      <Show when={Array.isArray(props.list)}>
        <datalist id={datalist()}>
          <For each={props.list}>
            {(item) => <option value={item.value} label={item.label} />}
          </For>
        </datalist>
      </Show>
    </div>
  );
}
