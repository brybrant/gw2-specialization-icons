import { createMemo, createUniqueId, For, Show } from 'solid-js';

/** @template T */

/**
 * @typedef {Object} Option
 * @prop {String} label Option label
 * @prop {T} value Option value
 */

/**
 * @callback RangeCallback
 * @param {Number} value
 */

/**
 * @param {Object} props
 * @param {String} props.label Range label
 * @param {Number} props.min Range minimum
 * @param {Number} props.max Range maximum
 * @param {Number|'any'} [props.step] Range granularity (step)
 * @param {Number} props.value Range value
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
