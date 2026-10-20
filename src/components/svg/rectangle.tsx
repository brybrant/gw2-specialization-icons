import { mergeProps, splitProps } from 'solid-js';

const pathDefinitions = ['d', 'height', 'width', 'x', 'y'] as const;

const pathDefaults = {
  d: '',
  x: 0,
  y: 0,
  width: 512,
  height: 512,
} as const;

/**
 * Create a rectangular path, optionally intersected with another path (`d`)
 */
type RectangleProps = {
  id?: Element['id'];
  /** Path definition to be intersected with Rectangle. */
  d?: string;
  /** CSS color or `url()` to SVG gradient definition */
  fill?: string;
  /**
   * Rectangle height
   * @default 512
   */
  height?: number;
  /**
   * Rectangle width
   * @default 512
   */
  width?: number;
  /**
   * Rectangle x position
   * @default 0
   */
  x?: number;
  /**
   * Rectangle y position
   * @default 0
   */
  y?: number;
};

export const Rectangle = (props: RectangleProps) => {
  const [definitions, attributes] = splitProps(props, pathDefinitions);

  const path = mergeProps(pathDefaults, definitions);

  return (
    <path
      {...attributes}
      d={`M${path.x},${path.y}v${path.height}h${path.width}V${path.y}Z${path.d}`}
    />
  );
};
