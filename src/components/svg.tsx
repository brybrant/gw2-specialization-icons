import type { Color } from '../palettes.ts';

export type ViewBox = [x: number, y: number, width: number, height: number];

export type Stop = {
  /** Gradient stop offset (0..1) */
  offset?: number;
  /** Gradient stop-color */
  color: Color;
  /** Gradient stop-opacity (0..1) */
  opacity?: number;
};

export { LinearGradient } from './svg/linear-gradient.tsx';
export { Outline } from './svg/outline.tsx';
export { RadialGradient } from './svg/radial-gradient.tsx';
export { Rectangle } from './svg/rectangle.tsx';

/**
 * Draw an ellipse using path commands
 * @param cx Center X
 * @param cy Center Y
 * @param rx Radius X
 * @param [ry] Radius Y *(default = `rx`)*
 * @returns SVG ellipse
 */
export function ellipse(cx: number, cy: number, rx: number, ry = rx) {
  const dx = rx * 2;

  return `M${cx - rx},${cy}a${rx},${ry} 0 1,1 ${dx},0a${rx},${ry} 0 1,1 -${dx},0Z`;
}

const STROKE_BASE = 28;

export const stroke = {
  x1: { 'stroke-width': STROKE_BASE },
  x075: { 'stroke-width': STROKE_BASE * 0.75 },
  x05: { 'stroke-width': STROKE_BASE * 0.5 },
  x025: { 'stroke-width': STROKE_BASE * 0.25 },
  x0125: { 'stroke-width': STROKE_BASE * 0.125 },
} as const;
