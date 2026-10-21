// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const loadFromStorage = <T extends Record<string, unknown>>(
  key: string,
): T => {
  const storedValue = localStorage.getItem(key);

  if (storedValue === null) return {} as T;

  try {
    const parsed: unknown = JSON.parse(storedValue);

    return parsed && Object.getPrototypeOf(parsed) === Object.prototype
      ? (parsed as T)
      : ({} as T);
  } catch {
    return {} as T;
  }
};
