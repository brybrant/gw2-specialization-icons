import {
  batch,
  createEffect,
  createMemo,
  createSignal,
  onMount,
  onCleanup,
  Show,
} from 'solid-js';

import { render, Dynamic } from 'solid-js/web';

import GitHubSVG from '@brybrant/svg-icons/GitHub.svg';

import { Vertical } from '@brybrant/fade-scroll';

import { createStoredStore } from './components/stored-store';

import * as Control from './components/form-controls';

import { fourDecimals, iconSize, OptionsContext } from './const';

import palettes from './palettes';
import * as specializations from './specializations/specializations';

import './app.scss';

/**
 * @typedef {import('./palettes.js').Color} Color
 * @typedef {import('./palettes.js').Palette} Palette
 * @typedef {import('./const').Options} Options
 */

/**
 * @typedef {Object} Specialization
 * @prop {String} name
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
    const [paletteStore, setPalette] = createStoredStore(
      `${specializationObject.name}_palette`,
      JSON.parse(JSON.stringify(palette)),
    );

    specializationObject.palette = paletteStore;
    specializationObject.setPalette = setPalette;
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

  /** @type {[Options, import('solid-js/store').SetStoreFunction<Options>]} */
  const [options, setOptions] = createStoredStore('options', {
    backgroundColor: 'white',
    backgroundOpacity: 1,
    checkerboard: true,
    cropmarks: true,
    specialization: [randomProfession, randomSpecialization],
    crop: false,
    square: false,
    outline: false,
    shading: false,
    stroke: false,
    size: iconSize.default,
    rasterize: true,
  });

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

    /** @type {Number} */
    let width;
    /** @type {Number} */
    let height;

    if (!options.crop || options.square || viewBox.width === viewBox.height) {
      width = height = options.size;
    } else {
      if (viewBox.width > viewBox.height) {
        width = options.size;
        height = options.size * aspectRatio;
      } else {
        width = options.size * aspectRatio;
        height = options.size;
      }
    }

    iconRef.dataset.specialization = activeSpecialization().name;
    iconRef.style.width = `${width}px`;
    iconRef.style.height = `${height}px`;

    // Necessary to listen for these signals to re-run effect when these change
    if (options.outline || options.stroke) return;
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
      <main>
        <div
          class='preview'
          onWheel={(e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
              setOptions(
                'size',
                Math.min(iconSize.max, options.size + iconSize.step),
              );
            } else if (e.deltaY > 0) {
              setOptions(
                'size',
                Math.max(iconSize.min, options.size - iconSize.step),
              );
            }
          }}
          style={{
            background: options.checkerboard ? null : 'none',
          }}
        >
          <div class='icon'>
            <div
              class='icon__background'
              style={{
                background: options.backgroundColor,
                opacity: options.backgroundOpacity,
              }}
            />
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
                default={'white'}
                value={options.backgroundColor}
                callback={(color) => setOptions('backgroundColor', color)}
              />
              <Control.Range
                label={`Background Opacity: ${Math.round(
                  options.backgroundOpacity * 100,
                )}%`}
                min={0}
                max={1}
                step={'any'}
                value={options.backgroundOpacity}
                callback={(value) => {
                  setOptions('backgroundOpacity', fourDecimals(value));
                }}
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
                  label='Crop'
                  value={options.crop}
                  callback={(checked) => setOptions('crop', checked)}
                />
                <Control.Checkbox
                  disabled={!options.crop}
                  label='Square'
                  value={options.square}
                  callback={(checked) => setOptions('square', checked)}
                />
                <Control.Checkbox
                  label='Outline'
                  value={options.outline}
                  callback={(checked) => setOptions('outline', checked)}
                />
                <Control.Checkbox
                  label='Shading'
                  value={options.shading}
                  callback={(checked) => setOptions('shading', checked)}
                />
                <Control.Checkbox
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
                  /** @param {(keyof palettes)|''} palette */
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
              <Show when={!options.shading}>
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
              <Control.Range
                label={`Size: ${options.size}px`}
                min={iconSize.min}
                max={iconSize.max}
                step={iconSize.step}
                value={options.size}
                callback={(value) => setOptions('size', value)}
                list={[
                  { label: '32px', value: 32 },
                  { label: '64px', value: 64 },
                  { label: '128px', value: 128 },
                  { label: '256px', value: 256 },
                  { label: '512px', value: 512 },
                  { label: '1024px', value: 1024 },
                ]}
              />
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
