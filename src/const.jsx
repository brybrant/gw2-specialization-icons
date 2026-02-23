import { createContext, useContext } from 'solid-js';

import { grey200 } from './scss/const/colors.module.scss';

/** @param {Number} number */
export const fourDecimals = (number) => Math.round(number * 1e4) / 1e4;

/**
 * @typedef {Object} Options
 * @prop {Color} background Preview background color
 * @prop {Boolean} checkerboard Preview checkerboard?
 * @prop {Boolean} cropmarks Preview cropmarks?
 * @prop {[Number, Number]} specialization [0] Profession, [1] Specialization
 * @prop {Boolean} tiny Tiny icon version?
 * @prop {Boolean} crop Crop viewBox to icon size?
 * @prop {Boolean} square Force square aspect ratio?
 * @prop {Boolean} outline Show icon outline?
 * @prop {Boolean} shading Show icon shading?
 * @prop {Boolean} stroke Show icon stroke?
 * @prop {Number} sizeNormal Current normal icon size
 * @prop {Number} sizeTiny Current tiny icon size
 * @prop {Boolean} rasterize Rasterize output?
 */

/** @type {Options} */
export const defaultOptions = Object.freeze({
  background: grey200,
  checkerboard: true,
  cropmarks: true,
  specialization: [0, 0],
  tiny: false,
  crop: false,
  square: false,
  outline: false,
  shading: false,
  stroke: false,
  sizeNormal: 512,
  sizeTiny: 24,
  rasterize: true,
});

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
