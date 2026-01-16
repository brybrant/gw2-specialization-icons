import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Ritualist = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [36.3505, 39.3198, 425.093, 446.7641]
          : [48.3351, 51.3198, 401.0954, 422.7802]
      }
    >
      <defs>
        <RadialGradient
          id='Ritualist_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={214.9557}
          cy={184.8717}
          fx={260.8103}
          fy={155.4098}
          dx={244.6706}
          dy={173.9782}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <RadialGradient
          id='Ritualist_segment1_shading2'
          viewBox={[0, 0, 512, 512]}
          cx={137.0306}
          cy={358.5373}
          fx={96.74}
          fy={344.69}
          dx={435.5411}
          dy={252.38}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Ritualist_segment1_shading3'
          viewBox={[179.4114, 0, 332.5886, 512]}
          cx={297.8543}
          cy={328.4651}
          fx={318.0047}
          fy={224.1978}
          dx={276}
          dy={224.435}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Neutral },
            { color: props.palette.Highlight },
          ]}
        />
        <RadialGradient
          id='Ritualist_segment1_shading4'
          viewBox={[49.45, 366.2623, 155.85, 107.8377]}
          cx={171.303}
          cy={486.1101}
          fx={49.45}
          fy={474.1}
          dx={334.7747}
          dy={239.8141}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Ritualist_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          cx={343.9435}
          cy={168.0565}
          fx={317.9001}
          fy={137.4947}
          dx={280.8}
          dy={280.8}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Ritualist_segment1'
          d={
            options.stroke
              ? 'M390.7807,272.0767c-54.0586-23.4692-112.0966-4.9809-143.1708,38.6233,0,39.7412-15.9194,75.2689-42.31,101-59.9515-20.9537-126.6376,5.4359-155.85,62.4-5.8071-47.7269,11.2353-95.8572,47.29-129.41,57.4522,2.7614,97.767-59.093,69.96-111.17,50.5647-15.6631,90.4884-55.7983,105.7975-106.5254,76.3885,28.4485,133.5025,129.0055,118.2832,145.0821Z'
              : 'M301.0635,228.5039c-3.1252,0-17.8389.2715-17.8389.2715l.2188-12.4277c.4229-24.0156-1.5781-29.917-13.3809-39.4648-4.8576-3.9293-10.0713-7.9819-15.2748-11.0972-20.1413,31.9691-51.2906,56.336-88.0876,67.7344,27.807,52.0771-12.5078,113.9314-69.96,111.17-36.0547,33.5527-53.0971,81.683-47.29,129.41,29.2123-56.9641,95.8985-83.3536,155.85-62.4,26.3906-25.7311,42.31-61.2588,42.31-101,23.0794-32.3857,61.0336-50.9098,101.1835-48.6859-3.1663-6.7196-8.4945-13.6701-13.6772-20.0771-8.9365-11.0479-14.9834-13.4331-34.0527-13.4331Z'
          }
        />
        <path
          id='Ritualist_segment2'
          d='M449.1438,83.9131c-10.3674,44.5724-37.094,54.7902-46.9747,64.6708-9.8146,9.8146-39.1329,38.5633-38.8101,44.7532.7538,14.4555,39.3024,50.4083,33.095,73.9367-4.9818,18.8827-10.3808,31.2896-19.7778,37.3082-12.0849-1.1435-24.3965-.931-37.094.9007,40.4487-23.8023,21.3203-50.7496,4.8645-71.0925-13.2872-16.4259-24.2078-18.2683-49.0053-17.8316.4367-24.7975-1.4057-35.7181-17.8316-49.0053-20.343-16.4557-47.2901-35.5842-71.0925,4.8644,1.8329-12.7054,2.0435-25.0168.9007-37.0939,6.0187-9.397,18.4255-14.796,37.3082-19.7778,23.5284-6.2075,59.4812,32.3411,73.9367,33.095,6.1899.3228,30.3459-23.1877,41.3164-34.1583,18.8354-18.8354,25.8608-36.9114,26.2074-49.5133.8399-30.5364,68.1597-3.4234,62.9572,18.9437Z'
        />
        <clipPath id='Ritualist_segment1_clip'>
          <use href='#Ritualist_segment1' />
        </clipPath>
        <clipPath id='Ritualist_segment2_clip'>
          <use href='#Ritualist_segment2' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M37.5381,475.5488c-6.3071-51.8359,12.7686-104.0391,51.0273-139.6426,4.2578-3.9626,8.7312-3.127,11.8779-3.127,46.9191-.0021,78.3628-51.11,55.6714-93.6069-3.5477-6.6444-.1604-14.8863,7.0347-17.1147,32.9741-10.2148,61.7158-32.1792,80.5049-61.1455-12.1546-2.9203-20.1917,6.3707-26.7949,17.5918-6.6444,11.2913-24.0901,5.1676-22.2192-7.7993,1.6548-11.4692,1.9268-22.6729.8311-34.2505-.2524-2.6689.396-5.3452,1.8418-7.6025,8.9458-13.9673,26.603-20.2261,44.3516-24.9087,27.6634-7.2998,60.5321,25.459,76.2261,32.1958,4.249-2.7212,14.6221-11.1602,33.6035-30.1411,20.5703-20.5708,22.5732-36.8569,22.6973-41.3584.4229-15.3809,11.6895-25.3193,28.7041-25.3193,25.7523,0,63.8392,21.9437,57.9355,47.312-11.4101,49.0559-41.8853,62.146-50.1768,70.4375-7.2834,7.2644-28.8233,28.6659-34.6963,37.2603,7.2258,16.2184,39.3922,48.3581,32.0986,76.0054-4.6816,17.748-10.9404,35.4062-24.9092,44.3525-2.2951,1.4696-4.985,2.0911-7.6025,1.8408-11.4677-1.084-22.8492-.813-34.25.8311-12.969,1.8653-19.0908-15.574-7.7988-22.2197,13.9932-8.2334,17.7275-15.4531,18.2139-20.8857-36.7849-3.2837-71.1058,13.0299-92.1504,40.4668-1.0127,40.2607-17.2148,77.6201-45.8823,105.5713-3.2606,3.1789-8.0397,4.2379-12.3369,2.7363-53.6108-18.7381-114.28,4.0278-141.2124,56.5469-5.3817,10.4953-21.1656,7.682-22.5898-4.0264Z'
        />
      </Show>
      <g clip-path='url(#Ritualist_segment1_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Ritualist_segment1_shading1)'
              : props.palette.Flat
          }
        />
        <Show when={options.shading}>
          <path
            fill='url(#Ritualist_segment1_shading2)'
            d='M0,512V0l166.7,233.52c18.9772,1.2015,42.6734,20.1129,48.2557,38.3408l297.0443,240.1392'
          />
          <path
            fill='url(#Ritualist_segment1_shading3)'
            d='M512,0l-216.5587,216.5587c-7.365,15.2304-67.384,43.4456-80.4856,55.3021,7.519,31.8608-6.6076,79.1392-35.5443,94.6329l76.5886,145.5063h256'
          />
          <path
            fill='url(#Ritualist_segment1_shading4)'
            d='M205.3,411.7c-1.6987-16.4216-12.1798-36.2823-25.8886-45.2064-60.1519-3.5696-118.1772,34.2532-129.9614,107.6063'
          />
        </Show>
        <Show when={options.stroke}>
          <g {...strokeWidth.x1} stroke={props.palette.Highlight}>
            <use href='#Ritualist_segment2' />
            <use href='#Ritualist_segment1' />
          </g>
          <g {...strokeWidth.x05} stroke={props.palette.Dark}>
            <use href='#Ritualist_segment2' />
            <use href='#Ritualist_segment1' />
          </g>
        </Show>
      </g>
      <g clip-path='url(#Ritualist_segment2_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Ritualist_segment2_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Ritualist_segment2'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Ritualist_segment2'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
