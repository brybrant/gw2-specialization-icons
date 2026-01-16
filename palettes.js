import { writeFileSync } from 'node:fs';

import { convertOkhsvToOklab, convertOklabToRgb, formatHex } from 'culori';

function okhsvToHex(h = 0, s = 0, v = 0) {
  return formatHex(
    convertOklabToRgb(
      convertOkhsvToOklab({
        h,
        s,
        v,
      }),
    ),
  );
}

const typedefs = `/**
 * @typedef {String} Color HEX code
 * @typedef {Object} Palette
 * @prop {Color} Highlight - Icon highlight color (shading & stroke)
 * @prop {Color} Neutral - Icon neutral color (shading)
 * @prop {Color} Midtone - Icon midtone color (shading)
 * @prop {Color} Shadow - Icon shadow color (shading)
 * @prop {Color} Dark - Icon dark color (stroke)
 * @prop {Color} Flat - Icon flat color (without shading)
 */
`;

/**
 * - hue : number between 0 and 360
 * - saturation : number between 0 and 100
 * - value : number between 0 and 100
 */
const palettes = {
  Elementalist: {
    hue: 24,
    shades: {
      Highlight: { saturation: 25, value: 100 },
      Neutral: { saturation: 48, value: 90 },
      Midtone: { saturation: 75, value: 88 },
      Shadow: { saturation: 90, value: 80 },
      Dark: { saturation: 100, value: 60 },
      Flat: { saturation: 86, value: 92 },
    },
  },
  Engineer: {
    hue: 54,
    shades: {
      Highlight: { saturation: 25, value: 96 },
      Neutral: { saturation: 50, value: 90 },
      Midtone: { saturation: 70, value: 85 },
      Shadow: { saturation: 85, value: 67 },
      Dark: { saturation: 100, value: 50 },
      Flat: { saturation: 82, value: 80 },
    },
  },
  Grayscale: {
    hue: 0,
    shades: {
      Highlight: { saturation: 0, value: 100 },
      Neutral: { saturation: 0, value: 86 },
      Midtone: { saturation: 0, value: 72 },
      Shadow: { saturation: 0, value: 56 },
      Dark: { saturation: 0, value: 40 },
      Flat: { saturation: 0, value: 100 },
    },
  },
  Guardian: {
    hue: 220,
    shades: {
      Highlight: { saturation: 15, value: 100 },
      Neutral: { saturation: 40, value: 95 },
      Midtone: { saturation: 55, value: 85 },
      Shadow: { saturation: 95, value: 70 },
      Dark: { saturation: 100, value: 52 },
      Flat: { saturation: 90, value: 90 },
    },
  },
  Healer: {
    hue: 248,
    shades: {
      Highlight: { saturation: 20, value: 100 },
      Neutral: { saturation: 37, value: 100 },
      Midtone: { saturation: 52, value: 90 },
      Shadow: { saturation: 85, value: 85 },
      Dark: { saturation: 100, value: 58 },
      Flat: { saturation: 80, value: 95 },
    },
  },
  Mesmer: {
    hue: 315,
    shades: {
      Highlight: { saturation: 25, value: 100 },
      Neutral: { saturation: 50, value: 92 },
      Midtone: { saturation: 70, value: 88 },
      Shadow: { saturation: 95, value: 72 },
      Dark: { saturation: 100, value: 50 },
      Flat: { saturation: 86, value: 90 },
    },
  },
  Necromancer: {
    hue: 155,
    shades: {
      Highlight: { saturation: 20, value: 100 },
      Neutral: { saturation: 50, value: 90 },
      Midtone: { saturation: 75, value: 75 },
      Shadow: { saturation: 95, value: 66 },
      Dark: { saturation: 100, value: 44 },
      Flat: { saturation: 100, value: 86 },
    },
  },
  Ranger: {
    hue: 132,
    shades: {
      Highlight: { saturation: 25, value: 95 },
      Neutral: { saturation: 50, value: 90 },
      Midtone: { saturation: 70, value: 80 },
      Shadow: { saturation: 100, value: 66 },
      Dark: { saturation: 100, value: 46 },
      Flat: { saturation: 92, value: 86 },
    },
  },
  Revenant: {
    hue: 29,
    shades: {
      Highlight: { saturation: 22, value: 88 },
      Neutral: { saturation: 40, value: 82 },
      Midtone: { saturation: 70, value: 72 },
      Shadow: { saturation: 82, value: 62 },
      Dark: { saturation: 100, value: 45 },
      Flat: { saturation: 88, value: 64 },
    },
  },
  Thief: {
    hue: 13,
    shades: {
      Highlight: { saturation: 10, value: 92 },
      Neutral: { saturation: 20, value: 75 },
      Midtone: { saturation: 35, value: 65 },
      Shadow: { saturation: 60, value: 65 },
      Dark: { saturation: 80, value: 50 },
      Flat: { saturation: 50, value: 80 },
    },
  },
  Warrior: {
    hue: 82,
    shades: {
      Highlight: { saturation: 35, value: 100 },
      Neutral: { saturation: 55, value: 94 },
      Midtone: { saturation: 70, value: 90 },
      Shadow: { saturation: 85, value: 80 },
      Dark: { saturation: 100, value: 55 },
      Flat: { saturation: 82, value: 98 },
    },
  },
};

const exports = [];

for (const [profession, color] of Object.entries(palettes)) {
  const shades = [];

  for (const shade in color.shades) {
    shades.push(
      `${shade}: '${okhsvToHex(
        color.hue,
        color.shades[shade].saturation / 100,
        color.shades[shade].value / 100,
      )}',`,
    );
  }

  exports.push(`/** @type {Palette} */
  ${profession}: {
    ${shades.join('\n    ')}
  },`);
}

writeFileSync(
  './src/palettes.js',
  `${typedefs}export default Object.freeze({\n  ${exports.join('\n  ')}\n});\n`,
);
