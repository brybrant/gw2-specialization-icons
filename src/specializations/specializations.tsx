import { createStore, type SetStoreFunction } from 'solid-js/store';
import type { Component } from 'solid-js';

import { Amalgam } from './engineer/amalgam.tsx';
import { Antiquary } from './thief/antiquary.tsx';
import { Antiquary2026 } from './thief/antiquary2026.tsx';
import { Berserker } from './warrior/berserker.tsx';
import { Bladesworn } from './warrior/bladesworn.tsx';
import { Catalyst } from './elementalist/catalyst.tsx';
import { Chronomancer } from './mesmer/chronomancer.tsx';
import { Conduit } from './revenant/conduit.tsx';
import { Daredevil } from './thief/daredevil.tsx';
import { Deadeye } from './thief/deadeye.tsx';
import { Dragonhunter } from './guardian/dragonhunter.tsx';
import { Druid } from './ranger/druid.tsx';
import { Elementalist } from './elementalist/elementalist.tsx';
import { Engineer } from './engineer/engineer.tsx';
import { Evoker } from './elementalist/evoker.tsx';
import { Firebrand } from './guardian/firebrand.tsx';
import { Galeshot } from './ranger/galeshot.tsx';
import { Guardian } from './guardian/guardian.tsx';
import { Harbinger } from './necromancer/harbinger.tsx';
import { Herald } from './revenant/herald.tsx';
import { Holosmith } from './engineer/holosmith.tsx';
import { Luminary } from './guardian/luminary.tsx';
import { Luminary2026 } from './guardian/luminary2026.tsx';
import { Mechanist } from './engineer/mechanist.tsx';
import { Mesmer } from './mesmer/mesmer.tsx';
import { Mirage } from './mesmer/mirage.tsx';
import { Necromancer } from './necromancer/necromancer.tsx';
import { Paragon } from './warrior/paragon.tsx';
import { Ranger } from './ranger/ranger.tsx';
import { Reaper } from './necromancer/reaper.tsx';
import { Renegade } from './revenant/renegade.tsx';
import { Revenant } from './revenant/revenant.tsx';
import { Ritualist } from './necromancer/ritualist.tsx';
import { Scourge } from './necromancer/scourge.tsx';
import { Scrapper } from './engineer/scrapper.tsx';
import { Soulbeast } from './ranger/soulbeast.tsx';
import { Specter } from './thief/specter.tsx';
import { Spellbreaker } from './warrior/spellbreaker.tsx';
import { Tempest } from './elementalist/tempest.tsx';
import { Thief } from './thief/thief.tsx';
import { Troubadour } from './mesmer/troubadour.tsx';
import { Untamed } from './ranger/untamed.tsx';
import { Vindicator } from './revenant/vindicator.tsx';
import { Virtuoso } from './mesmer/virtuoso.tsx';
import { Warrior } from './warrior/warrior.tsx';
import { Weaver } from './elementalist/weaver.tsx';
import { Willbender } from './guardian/willbender.tsx';

import { loadFromStorage } from '../storage.ts';
import { PALETTES, type Palette } from '../palettes.ts';

export type SpecializationProps = {
  palette: Palette;
};

export type Specialization = {
  readonly name?: string;
  iconNormal: Component<SpecializationProps>;
  iconTiny: Component<SpecializationProps>;
};

export type RuntimeSpecialization = Specialization & {
  readonly name: string;
  readonly palette: Palette;
  readonly setPalette: SetStoreFunction<Palette>;
};

const professions = {
  Elementalist: {
    Catalyst,
    Elementalist,
    Evoker,
    Tempest,
    Weaver,
  },
  Engineer: {
    Amalgam,
    Engineer,
    Holosmith,
    Mechanist,
    Scrapper,
  },
  Guardian: {
    Dragonhunter,
    Firebrand,
    Guardian,
    Luminary,
    Luminary2026,
    Willbender,
  },
  Mesmer: {
    Chronomancer,
    Mesmer,
    Mirage,
    Troubadour,
    Virtuoso,
  },
  Necromancer: {
    Harbinger,
    Necromancer,
    Reaper,
    Ritualist,
    Scourge,
  },
  Ranger: {
    Druid,
    Galeshot,
    Ranger,
    Soulbeast,
    Untamed,
  },
  Revenant: {
    Conduit,
    Herald,
    Renegade,
    Revenant,
    Vindicator,
  },
  Thief: {
    Antiquary,
    Antiquary2026,
    Daredevil,
    Deadeye,
    Specter,
    Thief,
  },
  Warrior: {
    Berserker,
    Bladesworn,
    Paragon,
    Spellbreaker,
    Warrior,
  },
} as const;

export type ProfessionName = keyof typeof professions;

export type SpecializationName = {
  [K in ProfessionName]: keyof (typeof professions)[K];
}[ProfessionName];

type Profession = {
  readonly name: ProfessionName;
  readonly palette: Palette;
  readonly specializations: Record<SpecializationName, RuntimeSpecialization>;
};

export type Professions = Record<ProfessionName, Profession>;

type KeysOfUnion<T> = T extends unknown ? keyof T : never;

const randomKeyOf = <T extends object>(obj: T): KeysOfUnion<T> => {
  const keys = Object.keys(obj) as KeysOfUnion<T>[];
  return keys[Math.floor(Math.random() * keys.length)];
};

export const randomProfession = randomKeyOf(professions);

export const randomSpecialization = randomKeyOf(professions[randomProfession]);

export const getProfessions = () => {
  const storedPalettes = loadFromStorage<Record<string, Palette>>('palettes');

  const professionsObject = {} as Professions;

  for (const professionName of Object.keys(professions) as ProfessionName[]) {
    const defaultPalette = PALETTES[professionName];
    const specializations = professions[professionName];

    const specializationsObject: Record<string, RuntimeSpecialization> = {};

    for (const [specializationName, specialization] of Object.entries(
      specializations,
    ) as [SpecializationName, Specialization][]) {
      const [palette, setPalette] = createStore<Palette>({
        ...defaultPalette,
        ...storedPalettes[specializationName],
      });

      specializationsObject[specializationName] = Object.freeze({
        name: specialization.name ?? specializationName,
        iconNormal: specialization.iconNormal,
        iconTiny: specialization.iconTiny,
        palette,
        setPalette,
      });
    }

    professionsObject[professionName] = Object.freeze({
      name: professionName,
      palette: defaultPalette,
      specializations: specializationsObject,
    });
  }

  return professionsObject;
};
