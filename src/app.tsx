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

import * as Icon from './components/ui-icons.tsx';

import * as Control from './components/form-controls.tsx';

import { PALETTES, SHADES, type Palette } from './palettes.ts';

import {
  defaultOptions,
  getOptions,
  OptionsContext,
  type Options,
} from './options.ts';

import {
  getProfessions,
  type RuntimeSpecialization,
  type ProfessionName,
  type SpecializationName,
} from './specializations/specializations.tsx';

/** Maximum size of normal icon */
const NORMAL_MAX = 1024;
/** Minimum size of normal icon */
const NORMAL_MIN = 32;
/** Normal icon size increment / decrement */
const NORMAL_STEP = 32;

/** Maximum size of tiny icon */
const TINY_MAX = 32;
/** Minimum size of tiny icon */
const TINY_MIN = 16;
/** Tiny icon size increment / decrement */
const TINY_STEP = 1;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const app = document.getElementById('app')!;

type PaletteName = keyof typeof PALETTES;

type ShadingShade = (typeof SHADES)[number];

const dispose = render(() => {
  const professions = getProfessions();

  const [options, setOptions] = getOptions(professions);

  createEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  });

  const sizeKey = createMemo(() => {
    return `size${options.tiny ? 'Tiny' : 'Normal'}` as const;
  });
  const sizeMin = createMemo(() => (options.tiny ? TINY_MIN : NORMAL_MIN));
  const sizeMax = createMemo(() => (options.tiny ? TINY_MAX : NORMAL_MAX));
  const sizeStep = createMemo(() => (options.tiny ? TINY_STEP : NORMAL_STEP));
  const size = createMemo(() => options[sizeKey()]);

  const activeProfession = createMemo(() => {
    return professions[options.icon[0]];
  });

  const activeSpecialization = createMemo(() => {
    return activeProfession().specializations[options.icon[1]];
  });

  /** Track usage of active specialization shading via proxy & reflect */
  const [paletteUsage, setPaletteUsage] = createSignal<
    ReadonlyMap<RuntimeSpecialization, ReadonlySet<ShadingShade>>
  >(new Map());

  const trackedPalette = createMemo(() => {
    const specialization = activeSpecialization();

    return new Proxy(specialization.palette, {
      get(palette, property, receiver) {
        if (
          options.shading &&
          !options.tiny &&
          typeof property === 'string' &&
          SHADES.includes(property as ShadingShade) &&
          (property !== 'Highlight' || !options.stroke)
        ) {
          const shade = property as ShadingShade;

          setPaletteUsage((current) => {
            const used = current.get(specialization);

            if (used && used.has(shade)) return current;

            const next = new Map(current);

            next.set(specialization, new Set([...(used ?? []), shade]));

            return next;
          });
        }

        return Reflect.get(palette, property, receiver) as unknown;
      },
    });
  });

  /**
   * Check if the active specialization uses `shade`
   * @param shade `ShadingShade`
   * @returns `true` if `shade` is used by the active specialization
   */
  const usesShade = (shade: ShadingShade) => {
    const palette = paletteUsage().get(activeSpecialization());

    return palette ? palette.has(shade) : false;
  };

  /**
   * Applies the palette `preset` to the active specialization
   * @param preset `PaletteName`
   */
  const applyPalette = (preset: PaletteName) => {
    const palette = PALETTES[preset];
    const specialization = activeSpecialization();

    batch(() => {
      specialization.setPalette('Highlight', palette.Highlight);
      specialization.setPalette('Neutral', palette.Neutral);
      specialization.setPalette('Midtone', palette.Midtone);
      specialization.setPalette('Shadow', palette.Shadow);
      specialization.setPalette('Dark', palette.Dark);
      specialization.setPalette('Flat', palette.Flat);
    });
  };

  /**
   * Gets the active specialization's palette preset name
   * (returns `''` if no match is found)
   */
  const palettePreset = createMemo<PaletteName | ''>(() => {
    const palette = activeSpecialization().palette;

    const current = {
      Highlight: palette.Highlight,
      Neutral: palette.Neutral,
      Midtone: palette.Midtone,
      Shadow: palette.Shadow,
      Dark: palette.Dark,
      Flat: palette.Flat,
    } as const satisfies Palette;

    return (
      (Object.keys(PALETTES) as PaletteName[]).find((name) => {
        const preset = PALETTES[name];

        return (Object.keys(preset) as (keyof Palette)[]).every(
          (key) => current[key] === preset[key],
        );
      }) ?? ''
    );
  });

  // eslint-disable-next-line no-unassigned-vars
  let previewRef!: HTMLDivElement;

  const [panning, setPanning] = createSignal(false);

  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let startScrollTop = 0;

  // eslint-disable-next-line no-unassigned-vars
  let iconRef!: HTMLDivElement;

  /** Sets the width and height of the icon DOM element */
  createEffect(() => {
    const svg = iconRef.firstElementChild as SVGSVGElement;

    const viewBox = svg.viewBox.baseVal;

    const aspectRatio =
      Math.min(viewBox.width, viewBox.height) /
      Math.max(viewBox.width, viewBox.height);

    let width: number;
    let height: number;

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

    previewRef.scrollLeft =
      (previewRef.scrollWidth - previewRef.clientWidth) / 2;
    previewRef.scrollTop =
      (previewRef.scrollHeight - previewRef.clientHeight) / 2;

    // Necessary to listen for these signals to re-run effect when these change
    iconRef.dataset.signal = [
      activeSpecialization().name,
      ...(options.outline ? ['outline'] : []),
      ...(options.stroke ? ['stroke'] : []),
      ...(options.tiny ? ['tiny'] : []),
    ].join();
  });

  const favicon = document.getElementById('favicon') as HTMLLinkElement;

  /** Sets the favicon to match the active specialization icon */
  createEffect(() => {
    const specialization = activeSpecialization();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const svg = iconRef.firstElementChild!.cloneNode(true) as SVGSVGElement;

    if (!options.tiny) {
      svg.setAttribute('viewBox', svg.dataset.viewbox as string);
    }

    favicon.href = `data:image/svg+xml,${encodeURIComponent(svg.outerHTML)}`;

    // Necessary to listen for these signals to re-run effect when these change
    favicon.dataset.signal = [
      ...(options.outline ? ['outline'] : []),
      ...(options.shading ? ['shading'] : []),
      ...(options.stroke ? ['stroke'] : []),
      JSON.stringify(specialization.palette),
    ].join();

    document.title = `${specialization.name} | Specialization Icons`;
  });

  /** Save specialization palettes to localStorage when they change */
  createEffect(() => {
    const storedPalettes: Record<string, Palette> = {};

    for (const professionName of Object.keys(professions) as ProfessionName[]) {
      const profession = professions[professionName];

      for (const [specializationName, specialization] of Object.entries(
        profession.specializations,
      )) {
        storedPalettes[specializationName] = {
          ...specialization.palette,
        };
      }
    }

    localStorage.setItem('palettes', JSON.stringify(storedPalettes));
  });

  // eslint-disable-next-line no-unassigned-vars
  let optionsRef!: HTMLDivElement;

  const [error, setError] = createSignal<string | false>(false);

  let scroller: Vertical;

  onMount(() => {
    scroller = new Vertical(optionsRef);
    scroller.mount();
  });

  onCleanup(() => {
    scroller.destroy();
  });

  return (
    <OptionsContext.Provider value={options}>
      <main>
        <Show when={options.checkerboard}>
          <div class='preview__checkerboard' />
        </Show>
        <div
          ref={previewRef}
          class={`preview${panning() ? ' preview--panning' : ''}`}
          onPointerDown={(event) => {
            if (!event.isPrimary || event.button !== 0) return;

            if (
              previewRef.scrollWidth <= previewRef.clientWidth &&
              previewRef.scrollHeight <= previewRef.clientHeight
            ) {
              return;
            }

            startX = event.clientX;
            startY = event.clientY;

            startScrollLeft = previewRef.scrollLeft;
            startScrollTop = previewRef.scrollTop;

            setPanning(true);
            previewRef.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!panning()) return;

            previewRef.scrollLeft = startScrollLeft - (event.clientX - startX);
            previewRef.scrollTop = startScrollTop - (event.clientY - startY);
          }}
          onPointerUp={() => setPanning(false)}
          onPointerCancel={() => setPanning(false)}
          onLostPointerCapture={() => setPanning(false)}
          onWheel={(event) => {
            const delta =
              Math.abs(event.deltaX) > Math.abs(event.deltaY)
                ? event.deltaX
                : event.deltaY;

            if (delta === 0) return;

            if (delta < 0) {
              setOptions(sizeKey(), Math.min(sizeMax(), size() + sizeStep()));
            } else {
              setOptions(sizeKey(), Math.max(sizeMin(), size() - sizeStep()));
            }
          }}
          style={{ background: options.background }}
        >
          <div class='preview__stage'>
            <div class='icon'>
              <Show when={options.cropmarks}>
                <div class='icon__cropmark icon__cropmark--top-left' />
                <div class='icon__cropmark icon__cropmark--top-right' />
                <div class='icon__cropmark icon__cropmark--bottom-right' />
                <div class='icon__cropmark icon__cropmark--bottom-left' />
              </Show>
              <div ref={iconRef}>
                <Show
                  // Necessary to force recreation of the DOM subtree
                  when={[
                    activeSpecialization(),
                    options.tiny,
                    options.shading,
                    options.stroke,
                  ]}
                  keyed
                >
                  <Show
                    when={options.tiny}
                    fallback={
                      <Dynamic
                        component={activeSpecialization().iconNormal}
                        palette={trackedPalette()}
                      />
                    }
                  >
                    <Dynamic
                      component={activeSpecialization().iconTiny}
                      palette={trackedPalette()}
                    />
                  </Show>
                </Show>
              </div>
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
                callback={(color) => {
                  setOptions('background', color);
                }}
              />
              <div>
                <Control.Checkbox
                  label='Checkerboard'
                  value={options.checkerboard}
                  callback={(checked) => {
                    setOptions('checkerboard', checked);
                  }}
                />
                <Control.Checkbox
                  label='Cropmarks'
                  value={options.cropmarks}
                  callback={(checked) => {
                    setOptions('cropmarks', checked);
                  }}
                />
              </div>
            </fieldset>
            <Control.Select<Options['icon']>
              label='Specialization'
              options={(Object.keys(professions) as ProfessionName[]).map(
                (professionName) => {
                  const profession = professions[professionName];

                  return {
                    label: profession.name,
                    options: Object.entries(profession.specializations).map(
                      ([specializationName, specialization]) => ({
                        label: specialization.name,
                        value: [
                          professionName,
                          specializationName as SpecializationName,
                        ],
                      }),
                    ),
                  };
                },
              )}
              shuffle={true}
              value={options.icon}
              callback={(value) => {
                setOptions('icon', value);
              }}
            />
            <fieldset>
              <legend>Icon</legend>
              <div>
                <Control.Checkbox
                  label='Tiny'
                  value={options.tiny}
                  callback={(checked) => {
                    setOptions('tiny', checked);
                  }}
                />
                <Control.Checkbox
                  disabled={options.tiny}
                  label='Crop'
                  value={options.crop}
                  callback={(checked) => {
                    setOptions('crop', checked);
                  }}
                />
                <Control.Checkbox
                  disabled={options.tiny || !options.crop}
                  label='Square'
                  value={options.square}
                  callback={(checked) => {
                    setOptions('square', checked);
                  }}
                />
                <Control.Checkbox
                  disabled={options.tiny}
                  label='Outline'
                  value={options.outline}
                  callback={(checked) => {
                    setOptions('outline', checked);
                  }}
                />
                <Control.Checkbox
                  disabled={options.tiny}
                  label='Shading'
                  value={options.shading}
                  callback={(checked) => {
                    setOptions('shading', checked);
                  }}
                />
                <Control.Checkbox
                  disabled={options.tiny}
                  label='Stroke'
                  value={options.stroke}
                  callback={(checked) => {
                    setOptions('stroke', checked);
                  }}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Color Palette</legend>
              <Control.Select<PaletteName | ''>
                label='Preset'
                options={[
                  { label: 'Custom', value: '', disabled: true },
                  ...(Object.keys(PALETTES) as PaletteName[]).map(
                    (palette) => ({
                      label: palette,
                      value: palette,
                    }),
                  ),
                ]}
                shuffle={true}
                value={palettePreset()}
                callback={(palette) => {
                  if (palette !== '') applyPalette(palette);
                }}
              />
              <Show when={!options.tiny}>
                <Show
                  when={
                    (options.shading && usesShade('Highlight')) ||
                    options.stroke
                  }
                >
                  <Control.ColorPicker
                    label='Highlight'
                    default={activeProfession().palette.Highlight}
                    value={activeSpecialization().palette.Highlight}
                    callback={(color) => {
                      activeSpecialization().setPalette('Highlight', color);
                    }}
                  />
                </Show>
                <Show when={options.shading && usesShade('Neutral')}>
                  <Control.ColorPicker
                    label='Neutral'
                    default={activeProfession().palette.Neutral}
                    value={activeSpecialization().palette.Neutral}
                    callback={(color) => {
                      activeSpecialization().setPalette('Neutral', color);
                    }}
                  />
                </Show>
                <Show when={options.shading && usesShade('Midtone')}>
                  <Control.ColorPicker
                    label='Midtone'
                    default={activeProfession().palette.Midtone}
                    value={activeSpecialization().palette.Midtone}
                    callback={(color) => {
                      activeSpecialization().setPalette('Midtone', color);
                    }}
                  />
                </Show>
                <Show when={options.shading && usesShade('Shadow')}>
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
                    applyPalette(activeProfession().name);
                  }}
                >
                  Reset Palette&nbsp;
                  <Icon.ResetIcon />
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
                    min={NORMAL_MIN}
                    max={NORMAL_MAX}
                    step={NORMAL_STEP}
                    value={options.sizeNormal}
                    callback={(value) => {
                      setOptions('sizeNormal', value);
                    }}
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
                  min={TINY_MIN}
                  max={TINY_MAX}
                  step={TINY_STEP}
                  value={options.sizeTiny}
                  callback={(value) => {
                    setOptions('sizeTiny', value);
                  }}
                />
              </Show>
              <div>
                <Control.Checkbox
                  label='Rasterize'
                  value={options.rasterize}
                  callback={(checked) => {
                    setOptions('rasterize', checked);
                  }}
                />
                <Show when={!options.rasterize}>
                  <Control.Checkbox
                    label='Minify'
                    value={options.minify}
                    callback={(checked) => {
                      setOptions('minify', checked);
                    }}
                  />
                </Show>
              </div>
              <div class='form__group'>
                <Control.Download
                  name={activeSpecialization().name}
                  size={size()}
                  svg={iconRef.firstElementChild as SVGSVGElement}
                  error={(error) => {
                    setError(error);
                  }}
                />
              </div>
            </fieldset>
            <a
              class='source-link'
              href='https://github.com/brybrant/gw2-specialization-icons'
              target='_blank'
              rel='noopener noreferrer'
              title='GitHub'
              innerHTML={GitHubSVG} // eslint-disable-line solid/no-innerhtml
            />
            <small>Made by Matt Bryant</small>
          </div>
        </div>
      </main>
      <Show when={error()}>
        <div class='error'>
          <div class='error__message'>
            {error()}
            <a
              class='error__close'
              title='Dismiss'
              onClick={() => {
                setError(false);
              }}
            >
              <Icon.CloseIcon />
            </a>
          </div>
        </div>
      </Show>
    </OptionsContext.Provider>
  );
}, app);

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(dispose);
}
