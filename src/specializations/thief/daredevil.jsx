import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Daredevil = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [42.6825, 75.5921, 414.0559, 367.0271]
          : [54.6835, 87.6083, 390.0546, 343.0114]
      }
    >
      <defs>
        <RadialGradient
          id='Daredevil_segment1_shading'
          viewBox={[0, 0, 512, 512]}
          cx={209.3711}
          cy={103.9049}
          fx={170.5253}
          fy={121.6772}
          dx={208}
          dy={208}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Daredevil_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          cx={329.6037}
          cy={277.95}
          fy={138.0626}
          dx={377.34}
          dy={377.34}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Daredevil_segment3_shading'
          viewBox={[0, 0, 512, 512]}
          cx={278.4621}
          cy={136.2892}
          fx={202.8041}
          fy={182.3909}
          dx={452.4864}
          dy={452.4864}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <path
          id='Daredevil_segment1'
          d={
            options.stroke
              ? 'M266.0192,262.9485c-104.8334-98.7206-139.401-118.5078-151.7832-139.5032-5.5125-9.347-6.6295-18.935-7.5953-35.837l159.3785,88.7296v86.6105Z'
              : 'M225.2136,153.6205l-118.5729-66.0122c.9658,16.902,2.0828,26.4899,7.5953,35.837l109.428,60.921,1.5496-30.7458Z'
          }
        />
        <path
          id='Daredevil_segment2'
          d={
            options.stroke
              ? 'M243.7785,325.1076l-.4557,1.538-31.4576-4.2182-7.7422,37.8281-10.0178,48.9464,87.038,15.9493,3.6456-20.0506c27.7595,17.6202,60.1519,25.519,104.3544,25.519s55.5949-3.1899,55.5949-3.1899c0,0-.9464-33.2345-3.9084-43.2218-68.7341,3.6835-95.2435-43.1706-117.3068-92.5757,6.076-24.7975,56.0507-153.5696,56.0507-153.5696l-141.7215,3.1899-2.5008,49.6204-1.1235,22.2914-20.4406,99.8719,29.9912,12.0715Z'
              : 'M444.7381,427.4297s-11.3924,3.1899-55.5949,3.1899-76.595-7.8987-104.3544-25.519l-3.6456,20.0506-87.038-15.9493,10.0178-48.9464c18.275,4.3579,66.7028,11.1841,96.2,13.7883l15.7045-24.1799c-3.2328-4.2542-12.3666-17.1355-35.9263-40.6296-.5626-4.5096-3.5599-36.4322,7.0135-89.5436l-51.7634-28.8178,2.5008-49.6204,141.7215-3.1899s-49.9747,128.7722-56.0507,153.5696c22.0633,49.4051,48.5727,96.2592,117.3068,92.5757,2.962,9.9873,3.9084,43.2218,3.9084,43.2218Z'
          }
        />
        <path
          id='Daredevil_segment3'
          d='M211.6709,349.6456c23.7176,4.8345,69.971,10.7023,82.5191,11.8101l7.1772-11.0507c-6.6914-8.8055-24.0815-27.2653-32.5065-35.3924-3.8734-20.2784-.0759-64.7088,4.7779-89.0901L54.6835,104.0253c1.8228,31.8987,4.1772,37.7468,35.6202,65.0886,31.4431,27.3417,129.7976,99.4177,129.7976,99.4177l-146.2785-60.6076c15.4937,40.329,22.405,54,67.9747,74.5063,45.5696,20.5064,100.1772,43.0633,100.1772,43.0633l-97.9747-13.2152c.9114,10.0254,32.5798,30.2141,67.6709,37.3671Z'
        />
        <clipPath id='Daredevil_segment1_clip'>
          <use href='#Daredevil_segment1' />
        </clipPath>
        <clipPath id='Daredevil_segment2_clip'>
          <use href='#Daredevil_segment2' />
        </clipPath>
        <clipPath id='Daredevil_segment3_clip'>
          <use href='#Daredevil_segment3' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M389.1436,442.6191c-39.0273,0-69.2754-5.8789-95.5566-18.8262l-.6367,3.5049c-1.1871,6.5231-7.4483,10.8534-13.9697,9.6572l-87.0381-15.9492c-6.6122-1.2131-10.9406-7.6238-9.5933-14.21l10.228-49.8096c-27.8638-8.9072-58.9331-26.085-60.5278-43.6211-.697-7.6701,5.9222-14.0102,13.5547-12.9795l10.1069,1.3633c-61.1256-26.8849-72.0093-34.6493-93.0898-89.5215-3.7733-9.8208,6.0754-19.4168,15.7949-15.3896l57.6357,23.8799c-21.3735-16.3022-41.9077-32.3623-53.6221-42.5488-16.5039-14.3511-25.9258-23.585-31.623-34.2271-6.1055-11.4048-7.1724-22.9385-8.1035-39.2319-.5386-9.4312,9.5636-15.7642,17.8174-11.1694l37.2222,20.7227c-1.8672-7.5962-2.5083-15.9219-3.0825-25.9702-.5386-9.4312,9.5636-15.7642,17.8174-11.1694l113.415,63.1411c.501-6.0981,5.5312-10.8706,11.6895-11.0093l141.7207-3.1899c.0908-.002.1816-.0029.2715-.0029,8.4298,0,14.2353,8.4821,11.1865,16.3413-16.2207,41.7964-47.1797,123.2192-54.5273,148.231,22.9374,50.5912,47.6878,84.5885,103.9541,81.5908,5.5217-.2985,10.5627,3.2285,12.1475,8.5703,3.2432,10.9365,4.2334,40.4805,4.3984,46.292.1572,5.5068-3.4551,10.4121-8.7598,11.8975-2.168.6064-15.1904,3.6338-58.8301,3.6338Z'
        />
      </Show>
      <g clip-path='url(#Daredevil_segment1_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Daredevil_segment1_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Daredevil_segment1'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Daredevil_segment1'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <g clip-path='url(#Daredevil_segment2_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Daredevil_segment2_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Daredevil_segment2'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Daredevil_segment2'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
      <g clip-path='url(#Daredevil_segment3_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Daredevil_segment3_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Daredevil_segment3'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Daredevil_segment3'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
