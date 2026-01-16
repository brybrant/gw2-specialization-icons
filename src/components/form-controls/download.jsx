import { useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {String} props.name - Name of specialization
 * @param {SVGSVGElement} props.svg - Icon element (ref) to be downloaded
 */
export function Download(props) {
  const options = useOptions();

  return (
    <button
      onClick={() => {
        const fileName = [
          props.name,
          [
            Number(options.crop),
            Number(options.outline),
            Number(options.shading),
            Number(options.stroke),
          ].join(''),
          ...(!options.crop || options.square ? ['Square'] : []),
        ].join('_');

        const encodedSVG = encodeURIComponent(
          new XMLSerializer().serializeToString(props.svg),
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
            canvas.getContext('2d').drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob) => {
              if (blob === null) {
                return console.error('Failed to generate image');
              }

              const link = document.createElement('a');
              const url = URL.createObjectURL(blob);
              link.href = url;
              link.download = `${fileName}_${options.size}.png`;
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
      Download
    </button>
  );
}
