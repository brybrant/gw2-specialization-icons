import * as Icon from '../ui-icons.tsx';

import { useOptions } from '../../options.ts';

/**
 * Encode SVG and optionally minify with SVGO
 * @param svg SVG string
 * @param minify Minify SVG with SVGO?
 * @returns Encoded SVG string
 */
async function encodeSVG(svg: string, minify: boolean) {
  svg = svg.replace(/\sdata-viewbox="[^"]*"/, '');

  if (minify) {
    const { optimize } = await import('svgo/browser');

    const { data } = optimize(svg, {
      plugins: [
        'cleanupAttrs',
        'cleanupIds',
        'cleanupListOfValues',
        'cleanupNumericValues',
        'collapseGroups',
        'convertColors',
        'convertEllipseToCircle',
        'convertPathData',
        'convertShapeToPath',
        'convertTransform',
        'mergePaths',
        'removeUnknownsAndDefaults',
        'sortAttrs',
        'sortDefsChildren',
      ],
    });

    svg = data;
  }

  return encodeURIComponent(svg);
}

type DownloadProps = {
  /** Name of specialization */
  name: string;
  /** Size of the icon */
  size: number;
  /** Icon element (ref) to be downloaded */
  svg: SVGSVGElement;
  /** Error callback */
  error: (error: string | false) => void;
};

export const Download = (props: DownloadProps) => {
  const options = useOptions();

  const download = async () => {
    props.error(false);

    const fileName = [
      props.name,
      options.tiny
        ? 'Tiny'
        : [
            Number(options.crop),
            Number(options.outline),
            Number(options.shading),
            Number(options.stroke),
            ...(!options.crop || options.square ? ['_Square'] : []),
          ].join(''),
      ...(options.rasterize ? [props.size] : []),
    ].join('_');

    const encodedSVG = await encodeSVG(
      props.svg.outerHTML,
      !options.rasterize && options.minify,
    );

    if (options.rasterize) {
      const width = props.svg.clientWidth;
      const height = props.svg.clientHeight;
      const img = document.createElement('img');
      img.width = width;
      img.height = height;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');

        if (context === null) {
          props.error('Failed to create 2D canvas context');
          return;
        }

        context.drawImage(img, 0, 0, width, height);

        // eslint-disable-next-line solid/reactivity
        canvas.toBlob((blob) => {
          if (blob === null) {
            props.error('Failed to generate image');
            return;
          }

          const link = document.createElement('a');
          const url = URL.createObjectURL(blob);
          link.href = url;
          link.download = `${fileName}.png`;
          link.click();
          setTimeout(() => {
            URL.revokeObjectURL(url);
          }, 1000);
        });
      };
      img.onerror = () => {
        props.error('Failed to load SVG for PNG export');
      };
      img.src = `data:image/svg+xml;charset=utf-8,${encodedSVG}`;
    } else {
      const link = document.createElement('a');
      const url = `data:text/xml;charset=utf-8,${encodedSVG}`;
      link.href = url;
      link.download = `${fileName}.svg`;
      link.click();
    }
  };

  return (
    <button
      onClick={() => {
        void download().catch((error: unknown) => {
          props.error(
            error instanceof Error ? error.message : 'Download failed',
          );
        });
      }}
    >
      Download {options.rasterize ? 'PNG' : 'SVG'}&nbsp;
      <Icon.DownloadIcon />
    </button>
  );
};
