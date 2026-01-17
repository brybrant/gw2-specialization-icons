import { createContext, useContext } from 'solid-js';

/** @param {Number} number */
export const fourDecimals = (number) => Math.round(number * 1e4) / 1e4;

export const iconSize = Object.freeze({
  default: 512,
  min: 32,
  max: 1024,
  step: 32,
});

/**
 * @typedef {Object} Options
 * @prop {Color} backgroundColor Preview background color (default = `#ffffff`)
 * @prop {Number} backgroundOpacity Preview background opacity (default = `1`)
 * @prop {Boolean} checkerboard Preview checkerboard (default = `true`)
 * @prop {Boolean} cropmarks Preview cropmarks (default = `true`)
 * @prop {[Number, Number]} specialization [0] Profession, [1] Specialization
 * @prop {Boolean} crop Crop viewBox to icon size? (default = `false`)
 * @prop {Boolean} square Force square aspect ratio? (default = `false`)
 * @prop {Boolean} outline Show icon outline? (default = `false`)
 * @prop {Boolean} shading Show icon shading? (default = `false`)
 * @prop {Boolean} stroke Show icon stroke? (default = `false`)
 * @prop {Number} size Icon size (default = `512`)
 * @prop {Boolean} rasterize Rasterize output? (default = `true`)
 */

/** @type {import('solid-js').Context<Options>} */
export const OptionsContext = createContext();

export const useOptions = () => useContext(OptionsContext);

/**
 * @typedef {Object} Stop
 * @prop {Number} [offset] Gradient stop offset (float between 0 - 1)
 * @prop {Color} color Gradient stop-color
 * @prop {Number} [opacity] Gradient stop-opacity (float between 0 - 1)
 */

/** 0.01745329251994329576923690768489 */
export const radian = Math.PI / 180;

/** 57.295779513082320876798154814105 */
export const degree = 180 / Math.PI;

export const outlineStyle = { fill: '#000' };

const strokeBase = 28;

export const strokeWidth = {
  x1: { 'stroke-width': strokeBase },
  x075: { 'stroke-width': strokeBase * 0.75 },
  x05: { 'stroke-width': strokeBase * 0.5 },
  x025: { 'stroke-width': strokeBase * 0.25 },
  x0125: { 'stroke-width': strokeBase * 0.125 },
};

/**
 * Draw an ellipse using path commands
 * @param {Number} cx Center X
 * @param {Number} cy Center Y
 * @param {Number} rx Radius X
 * @param {Number} [ry] Radius Y *(default = `rx`)*
 */
export function ellipse(cx, cy, rx, ry = rx) {
  const dx = rx * 2;

  return `M${cx - rx},${cy}a${rx},${ry} 0 1,1 ${dx},0a${rx},${ry} 0 1,1 -${dx},0Z`;
}
