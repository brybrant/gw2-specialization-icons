import { useOptions } from '../../const';

/**
 * Minimise SVG node ID lengths and return encoded string for downloading
 * @param {SVGSVGElement} svg
 */
function encodeSVG(svg) {
  const matches = svg.outerHTML.matchAll(/id="(\w+)"/g);

  let uid = 0;

  /** @type {[string, string][]} */
  const ids = [];

  for (const match of matches) {
    let id = ((uid++ % 26) + 10).toString(36);

    const quotient = uid / 26;

    if (quotient > 1) id = (Math.floor(quotient) + 9).toString(36) + id;

    ids.push([match[1], id]);
  }

  let svgString = svg.outerHTML;

  for (const id of ids) {
    const oldId = id[0];

    const newId = id[1];

    // Replace `id` attribute values
    svgString = svgString.replaceAll(`id="${oldId}"`, `id="${newId}"`);

    // Replace `href` attribute values
    svgString = svgString.replaceAll(`href="#${oldId}"`, `href="#${newId}"`);

    // Replace `fill` and `clip-path` attribute values
    svgString = svgString.replaceAll(`"url(#${oldId})"`, `"url(#${newId})"`);
  }

  // `offset` attribute value is `0` by default
  svgString = svgString.replaceAll(' offset="0"', '');

  return encodeURIComponent(
    new XMLSerializer().serializeToString(
      new DOMParser().parseFromString(svgString, 'image/svg+xml'),
    ),
  );
}

/**
 * @param {object} props
 * @param {string} props.name - Name of specialization
 * @param {number} props.size - Size of the icon
 * @param {SVGSVGElement} props.svg - Icon element (ref) to be downloaded
 */
export function Download(props) {
  const options = useOptions();

  return (
    <button
      onClick={() => {
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

        const encodedSVG = encodeSVG(props.svg);

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
            canvas.getContext('2d').drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob) => {
              if (blob === null) {
                return console.error('Failed to generate image');
              }

              const link = document.createElement('a');
              const url = URL.createObjectURL(blob);
              link.href = url;
              link.download = `${fileName}.png`;
              link.click();
              URL.revokeObjectURL(url);
            });
          };
          img.src = `data:image/svg+xml;charset=utf-8,${encodedSVG}`;
        } else {
          const link = document.createElement('a');
          const url = `data:text/xml;charset=utf-8,${encodedSVG}`;
          link.href = url;
          link.download = `${fileName}.svg`;
          link.click();
        }
      }}
    >
      Download ({options.rasterize ? 'PNG' : 'SVG'})
    </button>
  );
}
