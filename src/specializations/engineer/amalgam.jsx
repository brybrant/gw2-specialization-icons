import { Show } from 'solid-js';

import { Icon } from '../../components/icon';

import { Rectangle } from '../../components/rectangle';

import { RadialGradient } from '../../components/radial-gradient';

import { outlineStyle, strokeWidth, useOptions } from '../../const';

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 * @param {Number} [props.rotation]
 * @param {String} props.shading1
 * @param {String} props.shading2
 * @param {String} props.shading3
 */
const AmalgamSegment1 = (props) => {
  const options = useOptions();

  return (
    <g
      clip-path='url(#Amalgam_segment1_clip)'
      transform={props.rotation ? `rotate(${props.rotation} 256 256)` : null}
    >
      <Rectangle fill={props.shading1} />
      <Show when={options.shading}>
        <path
          fill={props.shading2}
          d='M171.1386,120.4256c3.004,23.7397-5.4301,41.2058-35.6051,77.8998l376.4666,313.6746H0V0l171.1386,120.4256Z'
        />
        <path
          fill={props.shading3}
          d='M512,512L215.6629,182.7535c-10.15-9.3452-51.1158-19.7098-80.1294,15.5719-24.5219,29.8196-41.035,65.2088-53.76,112.9551-13.8954,52.1379-2.4953,97.7751,32.452,114.7769s397.7745,85.9427,397.7745,85.9427Z'
        />
      </Show>
      <Show when={options.stroke}>
        <use
          {...strokeWidth.x1}
          href='#Amalgam_segment1'
          stroke={props.palette.Highlight}
        />
        <use
          {...strokeWidth.x05}
          href='#Amalgam_segment1'
          stroke={props.palette.Dark}
        />
      </Show>
    </g>
  );
};

/**
 * @param {Object} props
 * @param {import('../../palettes').Palette} props.palette
 */
export const Amalgam = (props) => {
  const options = useOptions();

  return (
    <Icon
      viewBox={
        options.outline
          ? [49.5732, 69.0498, 412.8535, 373.9003]
          : [61.5673, 81.0497, 388.8655, 349.9007]
      }
    >
      <defs>
        <RadialGradient
          id='Amalgam_segment1_shading1'
          viewBox={[0, 0, 512, 512]}
          cx={175.5435}
          cy={167.8154}
          fx={170.1469}
          fy={114.1175}
          dx={108.1494}
          dy={108.1494}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Amalgam_segment1_shading2'
          viewBox={[0, 0, 512, 512]}
          cx={110.9631}
          cy={233.9717}
          fx={131.8724}
          fy={166.5255}
          dx={149.0326}
          dy={385}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Amalgam_segment1_shading3'
          viewBox={[76.0119, 173.7462, 435.9881, 338.2538]}
          cx={168.4341}
          cy={305.2787}
          fx={174.8645}
          fy={220.4401}
          dx={247}
          dy={269}
          stops={[
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Amalgam_segment1_shading4'
          viewBox={[0, 0, 512, 512]}
          cx={175.5435}
          cy={167.8154}
          fx={186.0623}
          fy={183.2438}
          dx={108.1494}
          dy={108.1494}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Amalgam_segment1_shading5'
          viewBox={[0, 0, 512, 512]}
          cx={110.9631}
          cy={233.9717}
          fx={109.8851}
          fy={425.4369}
          dx={149.0326}
          dy={385}
          stops={[
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <RadialGradient
          id='Amalgam_segment1_shading6'
          viewBox={[76.0119, 173.7462, 435.9881, 338.2538]}
          cx={168.4341}
          cy={305.2787}
          fx={114.2254}
          fy={426.0573}
          dx={247}
          dy={269}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral, offset: 0.6 },
            { color: props.palette.Midtone },
          ]}
        />
        <RadialGradient
          id='Amalgam_segment2_shading'
          viewBox={[0, 0, 512, 512]}
          cy={238.3698}
          fy={220.73965}
          dx={176.3018}
          dy={176.3018}
          stops={[
            { color: props.palette.Highlight },
            { color: props.palette.Neutral },
            { color: props.palette.Midtone },
            { color: props.palette.Shadow },
          ]}
        />
        <path
          id='Amalgam_segment1'
          d='M250.0926,388.9625l-4.673-8.9991c1.9816-1.2128,3.9027-2.415,5.7532-3.593l3.6636,7.9552c-1.4831,1.5695-3.0736,3.1146-4.7438,4.6369ZM245.6631,392.7663l-5.1269-9.873c-2.3836,1.3994-4.8519,2.7996-7.3948,4.1843l5.6604,10.9005c2.3909-1.6939,4.6809-3.4332,6.8613-5.2118ZM235.0988,400.5214l-5.8926-11.3475c-3.305,1.7187-6.7297,3.3959-10.2685,4.9951l6.4052,12.3347c3.3636-1.9133,6.6291-3.9086,9.7559-5.9823ZM170.1469,114.1175c2.2933,7.4702,4.1749,6.0872-24.3118,37.7812-58.8593,65.4864-88.2722,147.2667-83.8293,199.846,4.4429,52.5793,35.3125,78.4164,83.8104,79.1974,19.7794.3186,50.43-8.6302,76.1588-22.5695l-6.571-12.654c-14.9294,6.3792-31.7456,11.2178-49.926,11.9007-43.4985,1.6339-63.4081-21.0537-60.0874-56.7801,5.1071-54.9449,36.5078-98.6798,87.4214-154.5494,20.617-22.6239,23.9352-12.1702,32.5307-7.4438-8.3377-33.5844-28.0671-60.5874-55.1959-74.7286Z'
        />
        <circle cx='256' cy='256' id='Amalgam_segment2' r='70.5207' />
        <clipPath id='Amalgam_segment1_clip'>
          <use href='#Amalgam_segment1' />
        </clipPath>
        <clipPath id='Amalgam_segment2_clip'>
          <use href='#Amalgam_segment2' />
        </clipPath>
      </defs>
      <Show when={options.outline}>
        <path
          {...outlineStyle}
          d='M461.9512,159.2451c-5.0469-59.739-42.52-90.1953-96.8018-90.1953-34.462,0-90.264,22.3922-116.709,50.3843-3.3638,3.561-4.2251,8.8096-2.1763,13.2593l3.6631,7.9551c3.0397,6.6006,11.2113,9.0061,17.3423,5.105,25.6892-16.3477,53.1412-29.4556,83.5908-29.4556,30.7593,0,46.5809,13.8461,43.8008,43.752-3.9084,42.0474-24.6609,77.652-59.4913,119.2667,8.2269-28.0264,1.29-59.5585-20.819-81.6675-21.6902-21.6902-52.446-28.7582-80.0673-21.2507-10.436-32.8497-30.9798-58.5294-58.5902-72.9218-9.157-4.7727-20.4104,3.5256-16.8037,14.8467-11.1115,16.4238-58.6805,56.3683-89.8418,133.8613-14.6533,36.4419-21.4004,72.1587-18.999,100.5703,5.0469,59.739,42.52,90.1953,96.8018,90.1953,34.462,0,90.264-22.3922,116.709-50.3843,3.3638-3.561,4.2251-8.8096,2.1763-13.2593l-3.6631-7.9551c-3.0397-6.6006-11.2113-9.0061-17.3423-5.105-25.6892,16.3477-53.1411,29.4556-83.5908,29.4556-30.7593,0-46.5808-13.8461-43.8008-43.752,3.9084-42.0474,24.6609-77.6521,59.4913-119.2668-8.2269,28.0264-1.2901,59.5585,20.8189,81.6675,21.6902,21.6902,52.446,28.7582,80.0673,21.2507,10.436,32.8496,30.9798,58.5294,58.5902,72.9218,9.157,4.7727,20.4105-3.5256,16.8037-14.8467,11.1115-16.4238,58.6805-56.3683,89.8418-133.8613,14.6533-36.4419,21.4004-72.1587,18.999-100.5703Z'
        />
      </Show>
      <AmalgamSegment1
        options={props.options}
        palette={props.palette}
        shading1={
          options.shading
            ? 'url(#Amalgam_segment1_shading1)'
            : props.palette.Flat
        }
        shading2='url(#Amalgam_segment1_shading2)'
        shading3='url(#Amalgam_segment1_shading3)'
      />
      <AmalgamSegment1
        options={props.options}
        palette={props.palette}
        rotation={180}
        shading1={
          options.shading
            ? 'url(#Amalgam_segment1_shading4)'
            : props.palette.Flat
        }
        shading2='url(#Amalgam_segment1_shading5)'
        shading3='url(#Amalgam_segment1_shading6)'
      />
      <g clip-path='url(#Amalgam_segment2_clip)'>
        <Rectangle
          fill={
            options.shading
              ? 'url(#Amalgam_segment2_shading)'
              : props.palette.Flat
          }
        />
        <Show when={options.stroke}>
          <use
            {...strokeWidth.x1}
            href='#Amalgam_segment2'
            stroke={props.palette.Highlight}
          />
          <use
            {...strokeWidth.x05}
            href='#Amalgam_segment2'
            stroke={props.palette.Dark}
          />
        </Show>
      </g>
    </Icon>
  );
};
