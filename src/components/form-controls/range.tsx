import { createMemo, createUniqueId, For, Show } from 'solid-js';

type Option = {
  /** Option label */
  label: string;
  /** Option value */
  value: number;
};

type RangeProps = {
  /** Radio label */
  label: string;
  /** Range minimum */
  min: number;
  /** Range maximum */
  max: number;
  /** Range granularity (step) */
  step?: number | 'any';
  /** Radio value */
  value: number;
  /** Range suggested values */
  list?: Option[];
  /** Range callback */
  callback: (value: number) => void;
};

export const Range = (props: RangeProps) => {
  const id = createUniqueId();

  const datalist = createMemo(() =>
    Array.isArray(props.list) ? createUniqueId() : undefined,
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
        onInput={(event) => {
          props.callback(event.target.valueAsNumber);
        }}
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
};
