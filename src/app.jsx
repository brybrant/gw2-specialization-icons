import {
  batch,
  createEffect,
  createMemo,
  createSignal,
  onMount,
  onCleanup,
  Show,
} from 'solid-js';

import { createStore } from 'solid-js/store';

import { render, Dynamic } from 'solid-js/web';

import GitHubSVG from '@brybrant/svg-icons/GitHub.svg';

import { Vertical } from '@brybrant/fade-scroll';

import { Favicon } from './components/favicon';

import * as Control from './components/form-controls';

import { defaultOptions, OptionsContext } from './const';

import palettes from './palettes';
import * as specializations from './specializations/specializations';

import './app.scss';

/**
 * @typedef {import('./palettes.js').Color} Color
 * @typedef {import('./palettes.js').Palette} Palette
 * @typedef {import('./const').Options} Options
 */

/**
 * @typedef {object} Specialization
 * @prop {string} name
 * @prop {import('solid-js').JSXElement} component
 * @prop {Palette} palette
 * @prop {import('solid-js/store').SetStoreFunction<Palette>} setPalette
 */

/**
 * @param {keyof palettes} name Profession name
 * @param {Specialization[]} specializationsArray Specialization objects
 */
const createProfession = (name, specializationsArray) => {
  const palette = palettes[name];

  for (const specializationObject of specializationsArray) {
    /** @type {[Palette, import('solid-js/store').SetStoreFunction<Palette>]} */
    const [paletteStore, setPalette] = createStore(
      JSON.parse(JSON.stringify(palette)),
    );

    Object.defineProperties(specializationObject, {
      palette: {
        get() {
          return paletteStore;
        },
      },
      setPalette: {
        value: setPalette,
      },
    });
  }

  return Object.freeze({
    name,
    palette,
    specializations: specializationsArray,
  });
};

const dispose = render(() => {
  const professions = [
    createProfession('Elementalist', [
      { name: 'Catalyst', component: specializations.Catalyst },
      { name: 'Elementalist', component: specializations.Elementalist },
      { name: 'Evoker', component: specializations.Evoker },
      { name: 'Tempest', component: specializations.Tempest },
      { name: 'Weaver', component: specializations.Weaver },
    ]),
    createProfession('Engineer', [
      { name: 'Amalgam', component: specializations.Amalgam },
      { name: 'Engineer', component: specializations.Engineer },
      { name: 'Holosmith', component: specializations.Holosmith },
      { name: 'Mechanist', component: specializations.Mechanist },
      { name: 'Scrapper', component: specializations.Scrapper },
    ]),
    createProfession('Guardian', [
      { name: 'Dragonhunter', component: specializations.Dragonhunter },
      { name: 'Firebrand', component: specializations.Firebrand },
      { name: 'Guardian', component: specializations.Guardian },
      { name: 'Luminary', component: specializations.Luminary },
      { name: 'Luminary (2026)', component: specializations.Luminary2026 },
      { name: 'Willbender', component: specializations.Willbender },
    ]),
    createProfession('Mesmer', [
      { name: 'Chronomancer', component: specializations.Chronomancer },
      { name: 'Mesmer', component: specializations.Mesmer },
      { name: 'Mirage', component: specializations.Mirage },
      { name: 'Troubadour', component: specializations.Troubadour },
      { name: 'Virtuoso', component: specializations.Virtuoso },
    ]),
    createProfession('Necromancer', [
      { name: 'Harbinger', component: specializations.Harbinger },
      { name: 'Necromancer', component: specializations.Necromancer },
      { name: 'Reaper', component: specializations.Reaper },
      { name: 'Ritualist', component: specializations.Ritualist },
      { name: 'Scourge', component: specializations.Scourge },
    ]),
    createProfession('Ranger', [
      { name: 'Druid', component: specializations.Druid },
      { name: 'Galeshot', component: specializations.Galeshot },
      { name: 'Ranger', component: specializations.Ranger },
      { name: 'Soulbeast', component: specializations.Soulbeast },
      { name: 'Untamed', component: specializations.Untamed },
    ]),
    createProfession('Revenant', [
      { name: 'Conduit', component: specializations.Conduit },
      { name: 'Herald', component: specializations.Herald },
      { name: 'Renegade', component: specializations.Renegade },
      { name: 'Revenant', component: specializations.Revenant },
      { name: 'Vindicator', component: specializations.Vindicator },
    ]),
    createProfession('Thief', [
      { name: 'Antiquary', component: specializations.Antiquary },
      { name: 'Antiquary (2026)', component: specializations.Antiquary2026 },
      { name: 'Daredevil', component: specializations.Daredevil },
      { name: 'Deadeye', component: specializations.Deadeye },
      { name: 'Specter', component: specializations.Specter },
      { name: 'Thief', component: specializations.Thief },
    ]),
    createProfession('Warrior', [
      { name: 'Berserker', component: specializations.Berserker },
      { name: 'Bladesworn', component: specializations.Bladesworn },
      { name: 'Paragon', component: specializations.Paragon },
      { name: 'Spellbreaker', component: specializations.Spellbreaker },
      { name: 'Warrior', component: specializations.Warrior },
    ]),
  ];

  const randomProfession = Math.round(Math.random() * (professions.length - 1));

  const randomSpecialization = Math.round(
    Math.random() * (professions[randomProfession].specializations.length - 1),
  );

  /** @type {Options} */
  const storedOptions = JSON.parse(localStorage.getItem('options')) ?? {
    specialization: [randomProfession, randomSpecialization],
  };

  /** @type {Options} */
  const mergedOptions = {};

  for (const key of Object.keys(defaultOptions)) {
    if (Object.prototype.hasOwnProperty.call(storedOptions, key)) {
      if (typeof storedOptions[key] === typeof defaultOptions[key]) {
        mergedOptions[key] = storedOptions[key];
        continue;
      }
    }

    mergedOptions[key] = defaultOptions[key];
  }

  /** @type {[Options, import('solid-js/store').SetStoreFunction<Options>]} */
  const [options, setOptions] = createStore(mergedOptions);

  createEffect(() => localStorage.setItem('options', JSON.stringify(options)));

  const normalMax = 1024;
  const normalMin = 32;
  const normalStep = 32;

  const tinyMax = 32;
  const tinyMin = 16;
  const tinyStep = 1;

  /** @type {import('solid-js').Accessor<'sizeTiny'|'sizeNormal'>} */
  const sizeKey = createMemo(() => `size${options.tiny ? 'Tiny' : 'Normal'}`);
  const sizeMin = createMemo(() => (options.tiny ? tinyMin : normalMin));
  const sizeMax = createMemo(() => (options.tiny ? tinyMax : normalMax));
  const sizeStep = createMemo(() => (options.tiny ? tinyStep : normalStep));
  const size = createMemo(() => options[sizeKey()]);

  const activeProfession = createMemo(() => {
    return professions[options.specialization[0]];
  });

  const activeSpecialization = createMemo(() => {
    return activeProfession().specializations[options.specialization[1]];
  });

  const [palettePreset, setPalettePreset] = createSignal('');

  /** @type {HTMLDivElement} */
  let iconRef;

  createEffect(() => {
    /** @type {SVGSVGElement} */
    const svg = iconRef.firstElementChild;

    const viewBox = svg.viewBox.baseVal;

    const aspectRatio =
      Math.min(viewBox.width, viewBox.height) /
      Math.max(viewBox.width, viewBox.height);

    /** @type {number} */
    let width;
    /** @type {number} */
    let height;

    if (!options.crop || options.square || viewBox.width === viewBox.height) {
      width = height = size();
    } else {
      if (viewBox.width > viewBox.height) {
        width = size();
        height = size() * aspectRatio;
      } else {
        width = size() * aspectRatio;
        height = size();
      }
    }

    iconRef.style.width = `${width}px`;
    iconRef.style.height = `${height}px`;

    // Necessary to listen for these signals to re-run effect when these change
    iconRef.dataset.specialization = activeSpecialization().name;
    iconRef.dataset.outline = Number(options.outline);
    iconRef.dataset.stroke = Number(options.stroke);
    iconRef.dataset.tiny = Number(options.tiny);
  });

  /** @type {HTMLDivElement} */
  let optionsRef;

  /** @type {Vertical} */
  let scroller;

  onMount(() => {
    scroller = new Vertical(optionsRef).mount();
  });

  onCleanup(() => {
    scroller.destroy();
  });

  return (
    <OptionsContext.Provider value={options}>
      <Favicon palette={activeSpecialization().palette} />
      <main>
        <div
          class='preview'
          onWheel={(e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
              setOptions(sizeKey(), Math.min(sizeMax(), size() + sizeStep()));
            } else if (e.deltaY > 0) {
              setOptions(sizeKey(), Math.max(sizeMin(), size() - sizeStep()));
            }
          }}
          style={{ background: options.background }}
        >
          <Show when={options.checkerboard}>
            <div class='preview__checkerboard' />
          </Show>
          <div class='icon'>
            <Show when={options.cropmarks}>
              <div class='icon__cropmark icon__cropmark--top-left' />
              <div class='icon__cropmark icon__cropmark--top-right' />
              <div class='icon__cropmark icon__cropmark--bottom-right' />
              <div class='icon__cropmark icon__cropmark--bottom-left' />
            </Show>
            <div ref={iconRef}>
              <Dynamic
                component={activeSpecialization().component}
                palette={activeSpecialization().palette}
              />
            </div>
          </div>
        </div>
        <div class='options__container'>
          <div class='options' ref={optionsRef}>
            <fieldset>
              <legend>Preview</legend>
              <Control.ColorPicker
                label='Background Color'
                default={defaultOptions.background}
                value={options.background}
                callback={(color) => setOptions('background', color)}
              />
              <div>
                <Control.Checkbox
                  label='Checkerboard'
                  value={options.checkerboard}
                  callback={(checked) => setOptions('checkerboard', checked)}
                />
                <Control.Checkbox
                  label='Cropmarks'
                  value={options.cropmarks}
                  callback={(checked) => setOptions('cropmarks', checked)}
                />
              </div>
            </fieldset>
            <Control.Select
              label='Specialization'
              options={professions.map((profession, professionIndex) => ({
                label: profession.name,
                options: profession.specializations.map((spec, specIndex) => ({
                  label: spec.name,
                  value: [professionIndex, specIndex],
                })),
              }))}
              value={options.specialization}
              callback={(value) => {
                setOptions('specialization', value);
                setPalettePreset('');
              }}
            />
            <fieldset>
              <legend>Icon</legend>
              <div>
                <Control.Checkbox
                  label='Tiny'
                  value={options.tiny}
                  callback={(checked) => setOptions('tiny', checked)}
                />
                <Control.Checkbox
                  disabled={options.tiny}
                  label='Crop'
                  value={options.crop}
                  callback={(checked) => setOptions('crop', checked)}
                />
                <Control.Checkbox
                  disabled={options.tiny || !options.crop}
                  label='Square'
                  value={options.square}
                  callback={(checked) => setOptions('square', checked)}
                />
                <Control.Checkbox
                  disabled={options.tiny}
                  label='Outline'
                  value={options.outline}
                  callback={(checked) => setOptions('outline', checked)}
                />
                <Control.Checkbox
                  disabled={options.tiny}
                  label='Shading'
                  value={options.shading}
                  callback={(checked) => setOptions('shading', checked)}
                />
                <Control.Checkbox
                  disabled={options.tiny}
                  label='Stroke'
                  value={options.stroke}
                  callback={(checked) => setOptions('stroke', checked)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Color Palette</legend>
              <Control.Select
                label='Preset'
                options={[
                  { label: '', value: '' },
                  ...Object.keys(palettes).map((palette) => ({
                    label: palette,
                    value: palette,
                  })),
                ]}
                value={palettePreset()}
                callback={
                  /** @param {(keyof palettes)|''} palette Selected palette */
                  (palette) => {
                    setPalettePreset(palette);

                    if (palette === '') return;

                    const thisPalette = palettes[palette];

                    batch(() => {
                      const spec = activeSpecialization();

                      spec.setPalette('Highlight', thisPalette.Highlight);
                      spec.setPalette('Neutral', thisPalette.Neutral);
                      spec.setPalette('Midtone', thisPalette.Midtone);
                      spec.setPalette('Shadow', thisPalette.Shadow);
                      spec.setPalette('Dark', thisPalette.Dark);
                      spec.setPalette('Flat', thisPalette.Flat);
                    });
                  }
                }
              />
              <Show when={!options.tiny}>
                <Show when={options.shading || options.stroke}>
                  <Control.ColorPicker
                    label='Highlight'
                    default={activeProfession().palette.Highlight}
                    value={activeSpecialization().palette.Highlight}
                    callback={(color) => {
                      activeSpecialization().setPalette('Highlight', color);
                    }}
                  />
                </Show>
                <Show when={options.shading}>
                  <Control.ColorPicker
                    label='Neutral'
                    default={activeProfession().palette.Neutral}
                    value={activeSpecialization().palette.Neutral}
                    callback={(color) => {
                      activeSpecialization().setPalette('Neutral', color);
                    }}
                  />
                  <Control.ColorPicker
                    label='Midtone'
                    default={activeProfession().palette.Midtone}
                    value={activeSpecialization().palette.Midtone}
                    callback={(color) => {
                      activeSpecialization().setPalette('Midtone', color);
                    }}
                  />
                  <Control.ColorPicker
                    label='Shadow'
                    default={activeProfession().palette.Shadow}
                    value={activeSpecialization().palette.Shadow}
                    callback={(color) => {
                      activeSpecialization().setPalette('Shadow', color);
                    }}
                  />
                </Show>
                <Show when={options.stroke}>
                  <Control.ColorPicker
                    label='Dark'
                    default={activeProfession().palette.Dark}
                    value={activeSpecialization().palette.Dark}
                    callback={(color) => {
                      activeSpecialization().setPalette('Dark', color);
                    }}
                  />
                </Show>
              </Show>
              <Show when={options.tiny || !options.shading}>
                <Control.ColorPicker
                  label='Flat'
                  default={activeProfession().palette.Flat}
                  value={activeSpecialization().palette.Flat}
                  callback={(color) => {
                    activeSpecialization().setPalette('Flat', color);
                  }}
                />
              </Show>
              <div class='form__group'>
                <button
                  onClick={() => {
                    batch(() => {
                      const prof = activeProfession();
                      const spec = activeSpecialization();

                      spec.setPalette('Highlight', prof.palette.Highlight);
                      spec.setPalette('Neutral', prof.palette.Neutral);
                      spec.setPalette('Midtone', prof.palette.Midtone);
                      spec.setPalette('Shadow', prof.palette.Shadow);
                      spec.setPalette('Dark', prof.palette.Dark);
                      spec.setPalette('Flat', prof.palette.Flat);
                    });
                  }}
                >
                  Reset Palette
                </button>
              </div>
            </fieldset>
            <fieldset>
              <legend>Output</legend>
              <Show
                when={options.tiny}
                fallback={
                  <Control.Range
                    label={`Size: ${options.sizeNormal}px`}
                    min={normalMin}
                    max={normalMax}
                    step={normalStep}
                    value={options.sizeNormal}
                    callback={(value) => setOptions('sizeNormal', value)}
                    list={[
                      { label: '32px', value: 32 },
                      { label: '64px', value: 64 },
                      { label: '128px', value: 128 },
                      { label: '256px', value: 256 },
                      { label: '512px', value: 512 },
                      { label: '1024px', value: 1024 },
                    ]}
                  />
                }
              >
                <Control.Range
                  label={`Size: ${options.sizeTiny}px`}
                  min={tinyMin}
                  max={tinyMax}
                  step={tinyStep}
                  value={options.sizeTiny}
                  callback={(value) => setOptions('sizeTiny', value)}
                />
              </Show>
              <div>
                <Control.Checkbox
                  label='Rasterize'
                  value={options.rasterize}
                  callback={(checked) => setOptions('rasterize', checked)}
                />
              </div>
              <div class='form__group'>
                <Control.Download
                  name={activeSpecialization().name}
                  size={size()}
                  svg={iconRef.firstElementChild}
                />
              </div>
            </fieldset>
            <a
              class='source-link'
              href='https://github.com/brybrant/gw2-specialization-icons'
              target='_blank'
            >
              <GitHubSVG />
            </a>
            <small>Made by Matt Bryant</small>
          </div>
        </div>
      </main>
    </OptionsContext.Provider>
  );
}, document.getElementById('app'));

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(dispose);
}
