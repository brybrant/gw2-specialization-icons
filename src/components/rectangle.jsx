import { mergeProps, splitProps } from 'solid-js';

const pathDefinitions = ['d', 'height', 'width', 'x', 'y'];

const pathDefaults = {
  d: '',
  x: 0,
  y: 0,
  width: 512,
  height: 512,
};

/**
 * Create a rectangular path, optionally intersected with another path (`d`)
 * @param {object} props
 * @param {string} [props.d] Path definition to be intersected with Rectangle.
 * @param {number} [props.height] Rectangle height *(default = `512`)*
 * @param {number} [props.width] Rectangle width *(default = `512`)*
 * @param {number} [props.x] Rectangle x position *(default = `0`)*
 * @param {number} [props.y] Rectangle y position *(default = `0`)*
 */
export function Rectangle(props) {
  const [definitions, attributes] = splitProps(props, pathDefinitions);

  const path = mergeProps(pathDefaults, definitions);

  return (
    <path
      {...attributes}
      d={`M${path.x},${path.y}v${path.height}h${path.width}V${path.y}Z${path.d}`}
    />
  );
}
