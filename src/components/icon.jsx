import { fourDecimals, useOptions } from '../const';

/**
 * @param {Object} props
 * @param {[Number, Number, Number, Number]} props.viewBox
 */
export function Icon(props) {
  const options = useOptions();

  const viewbox = () => {
    if (options.crop === false) return [0, 0, 512, 512];

    if (options.square === false) return props.viewBox;

    const centerX = props.viewBox[0] + props.viewBox[2] / 2;

    const centerY = props.viewBox[1] + props.viewBox[3] / 2;

    const dimension = Math.max(props.viewBox[2], props.viewBox[3]);

    const marginX = fourDecimals(centerX - dimension / 2);

    const marginY = fourDecimals(centerY - dimension / 2);

    return [marginX, marginY, dimension, dimension];
  };

  return (
    <svg
      fill='none'
      stroke-linecap={options.stroke ? 'round' : null}
      stroke-linejoin={options.stroke ? 'round' : null}
      viewBox={viewbox().join(' ')}
      xmlns='http://www.w3.org/2000/svg'
    >
      {props.children}
    </svg>
  );
}
