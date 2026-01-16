import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Elementalist = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [117.0498, 52.6784, 286.2296, 415.6712]
          : [129.05, 64.68, 262.17, 391.67]
      }
    >
      <defs>
        <RadialGradient
          id='Elementalist_shading'
          viewBox={[0, 0, 512, 512]}
          cx={259.62}
          cy={259.7492}
          fx={281.39}
          fy={64.68}
          dx={319.5068}
          dy={393.9446}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Elementalist_stroke1'
          d='M205.8323,153.1171c-7.1772,19.1392-10.443,56.0886-.3038,84.7975,10.9431,30.9851,7.871,57.8075-16.5684,64.8654,22.71-22.93,6.53-65.31-7.06-67.44,13.24,45.41-28.73,46.42-26.5,89.65-6.9607-20.88-8.0791-45.5315-1.25-68.69-15.78,20.8-25.1,46.46-25.1,74.21,0,69.7928,58.759,125.84,130.57,125.84,61.55,0,112.718-40.9225,126.73-95.44-15.98,15.3014-35.5525,27.8398-55.86,37.06,16.798-15.3339,16.9344-30.8076,25.3682-41.7093,8.0627-10.4221,19.569-18.1689,26.8718-20.8607-21.8996-33.0063-18.7441-80.117,8.49-108.88-34.6282,14.2807-50.4257,53.1667-54.2231,97.6731,1.9747-45.8734-18.6277-100.2214-49.0768-142.623-45.1716-62.9032-50.43-95.47-6.53-116.89-26.0946.9356-41.3371,10.8811-48.9855,25.229-23.5203,44.1225-19.395,44.0688-26.5722,63.2081Z'
        />
        <Rectangle
          id='Elementalist_stroke2'
          d='M205.8323,153.1171c-7.3514-41.3516,39.3561-87.1898,26.5722-63.2081-12.7839,23.9817-22.7203,54.3089,9.4377,104.9203,21.2999,33.5225,30.8445,41.7379,35.5472,61.1707-27.554-45.4739-64.2057-61.5313-71.5571-102.8829Z'
        />
        <Rectangle
          id='Elementalist_stroke3'
          d='M243.3203,416.0237c-25.4121-1.4509-49.9058-17.2864-46.7855-52.0641,2.9484-32.8618,47.9557-55.3361,64.1047-7.2319-42.2676-41.8566-61.3416,33.9893-16.1965,35.7108,17.9586.6848,53.7817-24.9163,49.3766-70.9036-7.2296-75.475-77.2935-108.2648-87.9873-168.4177s40.8733-90.036,26.5722-63.2081c-14.3011,26.8279-8.8467,63.091,15.346,101.1662,20.6547,32.507,56.559,58.5087,64.7044,128.1389,7.4723,63.8759-36.92,98.6489-69.1345,96.8096Z'
        />
        <clipPath id='Elementalist_clip1'>
          <use href='#Elementalist_stroke1' />
        </clipPath>
        <clipPath id='Elementalist_clip2'>
          <use href='#Elementalist_stroke2' />
        </clipPath>
        <clipPath id='Elementalist_clip3'>
          <use href='#Elementalist_stroke3' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M221.8149,84.2642c7.3027-13.6993,23.4925-30.2746,59.145-31.5762,12.8986-.4709,17.2913,17.1168,5.6914,22.7769-17.6046,8.59-21.4419,16.7255-22.7969,22.0977-3.8108,15.1086,6.9343,39.5788,33.8125,77.0078,19.5447,27.2169,34.1885,57.2505,42.7598,86.6768,10.5752-22.0146,26.1209-37.5333,46.2178-45.8208,11.9149-4.9134,22.1504,9.9856,13.2891,19.3442-22.9379,24.2252-26.104,65.5147-7.2041,93.9951,4.2805,6.4503,1.4142,15.2177-5.8496,17.8945-2.1581.7953-4.4529,2.0848-6.1442,3.6434,9.1936-4.8661,19.825,3.5192,17.236,13.5939-15.8044,61.5003-72.6982,104.4521-138.3516,104.4521-78.6138,0-142.5703-61.835-142.5703-137.8398,0-29.5449,9.5226-57.7141,27.54-81.4629,8.0254-10.5783,24.8251-2.0895,21.0698,10.6465-1.4489,4.914-2.5151,9.9463-3.2007,15.0371,8.0723-10.5908,13.0964-18.2797,7.9204-36.0317-2.7279-9.356,6.4109-19.7757,19.4321-13.2407-5.2998-27.498-2.0939-58.2103,4.7847-76.5542,2.4691-6.5845,10.0128-9.6087,16.3486-6.6484-1.1285-10.9784-1.9334-33.9727,10.8701-57.9913Z'
        />
      </Show>
      <g clip-path='url(#Elementalist_clip1)'>
        <g clip-path='url(#Elementalist_clip2)'>
          <Show when={options.stroke}>
            <Rectangle fill={props.palette.Dark} />
          </Show>
          <g clip-path='url(#Elementalist_clip3)'>
            <Rectangle
              fill={
                options.shading
                  ? 'url(#Elementalist_shading)'
                  : props.palette.Flat
              }
            />
            <Show when={options.stroke}>
              <g stroke={props.palette.Highlight}>
                <use {...strokeWidth.x05} href='#Elementalist_stroke3' />
                <use {...strokeWidth.x1} href='#Elementalist_stroke1' />
                <use {...strokeWidth.x1} href='#Elementalist_stroke2' />
              </g>
              <g {...strokeWidth.x05} stroke={props.palette.Dark}>
                <use href='#Elementalist_stroke1' />
                <use href='#Elementalist_stroke2' />
              </g>
            </Show>
          </g>
        </g>
      </g>
    </Icon>
  );
};
