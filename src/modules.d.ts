declare module '*.svg' {
  const source: string;
  export default source;
}

declare module '*.scss' {
  const source: Record<string, string>;
  export default source;
}
