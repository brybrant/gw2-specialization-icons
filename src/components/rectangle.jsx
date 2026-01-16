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
 * @param {Object} props
 * @param {String} [props.d] Path definition to be intersected with Rectangle.
 * @param {Number} [props.height] Rectangle height *(default = `512`)*
 * @param {Number} [props.width] Rectangle width *(default = `512`)*
 * @param {Number} [props.x] Rectangle x position *(default = `0`)*
 * @param {Number} [props.y] Rectangle y position *(default = `0`)*
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
