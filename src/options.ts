import { createContext, useContext } from 'solid-js';

import { createStore } from 'solid-js/store';

import {
  randomProfession,
  randomSpecialization,
  type Professions,
  type ProfessionName,
  type SpecializationName,
} from './specializations/specializations.tsx';

import { loadFromStorage } from './storage.ts';
import type { Color } from './palettes.ts';

import colors from './scss/colors.module.scss';

export type Options = {
  /** Preview background color */
  background: Color;
  /** Preview checkerboard? */
  checkerboard: boolean;
  /** Preview cropmarks? */
  cropmarks: boolean;
  /** Active icon */
  icon: [profession: ProfessionName, specialization: SpecializationName];
  /** Tiny icon version? */
  tiny: boolean;
  /** Crop viewBox to icon size? */
  crop: boolean;
  /** Force square aspect ratio? */
  square: boolean;
  /** Show icon outline? */
  outline: boolean;
  /** Show icon shading? */
  shading: boolean;
  /** Show icon stroke? */
  stroke: boolean;
  /** Current normal icon size */
  sizeNormal: number;
  /** Current tiny icon size */
  sizeTiny: number;
  /** Rasterize output? */
  rasterize: boolean;
  /** Minify SVG output? */
  minify: boolean;
};

export const defaultOptions = {
  background: colors.grey20,
  checkerboard: true,
  cropmarks: true,
  icon: [randomProfession, randomSpecialization],
  tiny: false,
  crop: false,
  square: false,
  outline: false,
  shading: false,
  stroke: false,
  sizeNormal: 512,
  sizeTiny: 24,
  rasterize: true,
  minify: true,
} as const satisfies Options;

export const OptionsContext = createContext<Options>();

export const useOptions = () => {
  const context = useContext(OptionsContext);

  if (context === undefined) {
    throw new Error('useOptions must be used inside OptionsContext.Provider');
  }

  return context;
};

export const getOptions = (professions: Professions) => {
  const storedOptions = loadFromStorage<Partial<Options>>('options');

  const icon = storedOptions.icon as unknown;

  if (icon) {
    if (Array.isArray(icon) && icon.length === 2) {
      const professionName: unknown = icon[0];
      const specializationName: unknown = icon[1];

      if (!(
        typeof professionName === 'string' &&
        Object.hasOwn(professions, professionName) &&
        typeof specializationName === 'string' &&
        Object.hasOwn(
          professions[professionName as ProfessionName].specializations,
          specializationName,
        )
      )) {
        delete storedOptions.icon;
      }
    } else {
      delete storedOptions.icon;
    }
  }

  const mergedOptions = {} as Options;

  const setOption = <K extends keyof Options>(key: K, value: Options[K]) => {
    mergedOptions[key] = value;
  };

  for (const key of Object.keys(defaultOptions) as (keyof Options)[]) {
    const storedValue = storedOptions[key];

    if (
      storedValue !== undefined &&
      typeof storedValue === typeof defaultOptions[key]
    ) {
      setOption(key, storedValue);
    } else {
      setOption(key, defaultOptions[key]);
    }
  }

  return createStore<Options>(mergedOptions);
};
