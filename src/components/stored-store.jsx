import { createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

/**
 * Create a store whose value is set from & stored in localStorage
 * @template T
 * @param {String} key - Key for localStorage retrieval
 * @param {T} defaultValue - Default store value *(if no localStorage value)*
 * @returns {[T, import('solid-js/store').SetStoreFunction<T>]}
 */
export function createStoredStore(key, defaultValue) {
  /** @type {T} */
  const initialValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : defaultValue;

  const [value, setValue] = createStore(initialValue);

  createEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];
}
