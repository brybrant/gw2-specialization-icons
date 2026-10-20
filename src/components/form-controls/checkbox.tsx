import { createUniqueId } from 'solid-js';

type CheckboxProps = {
  /** Checkbox disabled status */
  disabled?: boolean;
  /** Checkbox label */
  label: string;
  /** Checkbox value */
  value: boolean;
  /** Checkbox callback */
  callback: (value: boolean) => void;
};

export const Checkbox = (props: CheckboxProps) => {
  const id = createUniqueId();

  return (
    <div class={`form__checkbox${props.disabled ? ' disabled' : ''}`}>
      <label for={id}>{props.label}</label>
      <input
        type='checkbox'
        id={id}
        checked={props.value}
        disabled={props.disabled}
        onChange={(event) => {
          props.callback(event.target.checked);
        }}
      />
    </div>
  );
};
