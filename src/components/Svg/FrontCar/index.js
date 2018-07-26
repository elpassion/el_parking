import classNames from 'classnames';

import style from '../style.scss';

const FrontCar = ({ className, LightBackground }) => {
  const containerClasses = classNames(style.svgWrapper, className);
  return (
    LightBackground
      ? (<div className={containerClasses}>
        <svg
          className={style.splashImage}
          width='254'
          height='190'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <defs>
            <path id='a' d='M.133.127h63.426v50.402H.133z' />
            <path id='c' d='M.23.22h107.078v62.297H.23z' />
            <path id='e' d='M.244.038h63.404v54.819H.244z' />
          </defs>
          <g fill='none' fillRule='evenodd'>
            <path
              fill='#5956F5'
              d='M205.7 78.717c2.717-1.575 4.927-.311 4.935 2.823.01 3.134-2.1866.95-4.903
            8.525-2.7171.574-4.926.31-4.935-2.823-.009-3.134 2.186-6.95 4.903-8.525'
            />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              d='M205.7 78.717c2.717-1.575 4.927-.311 4.935 2.823.01 3.134-2.186 6.95-4.903
            8.525-2.717 1.574-4.926.31-4.935-2.823-.009-3.134 2.186-6.95 4.903-8.525z'
            />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M228.06 103.317l25.683 14.995'
            />
            <g transform='translate(190.307 139.238)'>
              <mask id='b' fill='#fff'>
                <use xlinkHref='#a' />
              </mask>
              <path fill='#1C00A8' mask='url(#b)' d='M63.537.127l.022 13.657L.133 50.762v-13.89z' />
            </g>
            <path fill='#1F02AD' d='M190.564 172.043L36.212 82.328v18.046L190.564 190z' />
            <path fill='#4037D4' d='M131.155 78.876l63.353-36.957 15.722 55-63.353 36.958z' />
            <path fill='#5956F5' d='M58.824 36.957L122.178 0l72.33 41.919-63.353 36.957z' />
            <path
              fill='#4037D4'
              d='M131.155 78.876l15.722 55 43.725 25.342-.05 17.862-154.34-89.646.05-17.861 22.562-32.616z'
            />
            <g transform='translate(146.647 96.7)'>
              <mask id='d' fill='#fff'><use xlinkHref='#c' /></mask>
              <path fill='#5956F5' mask='url(#d)' d='M.23 37.176L63.583.22l43.725 25.341-63.353 36.957z' />
            </g>
            <g transform='translate(190.307 122.223)'>
              <mask id='f' fill='#fff'><use xlinkHref='#e' /></mask>
              <path fill='#4037D4' mask='url(#f)' d='M.295 36.995L63.648.038l-.05 17.862L.243 54.857z' />
            </g>
            <path fill='#3224C0' d='M253.844 132.404l.023 7.985-63.404 36.746-.023-7.986z' />
            <path
              fill='#5956F5'
              d='M224.458 146.529c1.107-.641 2.007-.127 2.01 1.15.004 1.276-.89 2.83-1.997
            3.472-1.107.642-2.007.127-2.01-1.15-.004-1.276.89-2.83 1.997-3.472'
            />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M224.458 146.787c1.107-.642 2.007-.127 2.01 1.15.004 1.276-.89 2.83-1.997
            3.472-1.107.642-2.007.127-2.01-1.15-.004-1.276.89-2.83 1.997-3.472z'
            />
            <path
              fill='#0FF'
              d='M198.766 157.862c2.717-1.575 4.926-.311 4.935 2.823.009 3.134-2.186 6.95-4.903 8.525-2.717
            1.575-4.927.31-4.935-2.823-.01-3.134 2.186-6.95 4.903-8.525m47.769-27.327c2.717-1.575 4.927-.311
            4.936 2.823.008 3.134-2.187 6.95-4.904 8.525-2.717 1.575-4.926.31-4.935-2.823-.009-3.134 2.186-6.95
            4.903-8.525'
            />
            <path fill='#3225C0' d='M190.564 159.41L36.212 69.695v18.047l154.352 89.478z' />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M53 74.323l137.59 78.043L239 125'
            />
            <path
              stroke='#1E0381'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M.128 77.408l25.683 14.996'
            />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M198.563 94.948L145 126l-15.432-51.793m44.945-31.71l-45.345 26.155L76 37'
            />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M179.906 45.591l-49.968 28.732L71 40m20.925 80.225l.513-67.544'
            />
            <path
              fill='#1F02AD'
              d='M141.54 140.652c5.032 2.917 9.097 9.986 9.08 15.788-.016 5.803-4.107 8.143-9.14
            5.227-5.03-2.916-9.095-9.983-9.079-15.786.017-5.802 4.108-8.145 9.139-5.229M56.788
            90.64c5.031 2.916 9.096 9.983 9.08 15.786-.017 5.805-4.108 8.145-9.139
            5.23-5.032-2.917-9.097-9.984-9.08-15.79.016-5.802 4.107-8.142 9.14-5.226'
            />
            <path
              fill='#5956F5'
              d='M141.53 144.509c3.309 1.917 5.981 6.565 5.97 10.38-.01 3.815-2.7 5.354-6.01
            3.437-3.307-1.917-5.98-6.564-5.968-10.379.01-3.815 2.7-5.355 6.008-3.438'
            />
            <path
              fill='#1C00A8'
              d='M141.515 149.937c.71.411 1.282 1.407 1.28 2.225-.002.818-.579
            1.147-1.288.736-.71-.41-1.282-1.406-1.28-2.224.002-.818.579-1.148
            1.288-.737'
            />
            <path
              fill='#5956F5'
              d='M56.778 94.238c3.308 1.917 5.98 6.565 5.97 10.38-.01 3.815-2.7
            5.354-6.01 3.436-3.307-1.916-5.98-6.563-5.969-10.378.011-3.815
            2.701-5.355 6.009-3.438'
            />
            <path
              fill='#1C00A8'
              d='M56.763 99.666c.709.41 1.282 1.407 1.28 2.224-.003.818-.58
            1.148-1.289.737-.708-.41-1.281-1.407-1.28-2.224.003-.818.58-1.148 1.289-.737'
            />
            <path
              stroke='#1E0381'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18.86 77.018l5.489 3.205M16.437 68.11l4.109 2.398'
            />
            <path
              fill='#5956F5'
              d='M133.019 115.067c2.717-1.575 4.926-.311 4.935 2.823.009 3.134-2.186 6.95-4.903
            8.525-2.717 1.574-4.927.31-4.936-2.823-.008-3.134 2.187-6.95 4.904-8.525'
            />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              d='M133.019 115.067c2.717-1.575 4.926-.311 4.935 2.823.009 3.134-2.186 6.95-4.903
            8.525-2.717 1.574-4.927.31-4.936-2.823-.008-3.134 2.187-6.95 4.904-8.525z'
            />
          </g>
        </svg>
      </div>)
      : (<div className={containerClasses}>
        <svg
          className={style.splashImage}
          width='254'
          height='190'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <defs>
            <path id='a' d='M.133.127h63.426v50.402H.133z' />
            <path id='c' d='M.23.22h107.078v62.297H.23z' />
            <path id='e' d='M.244.038h63.404v54.819H.244z' />
          </defs>
          <g fill='none' fillRule='evenodd'>
            <path
              d='M205.7 78.717c2.717-1.575 4.927-.311 4.935 2.823.01 3.134-2.186 6.95-4.903 8.525-2.717 1.574-4.926.31-4.935-2.823-.009-3.134 2.186-6.95 4.903-8.525'
              fill='#5956F5'
            />
            <path
              d='M205.7 78.717c2.717-1.575 4.927-.311 4.935 2.823.01 3.134-2.186 6.95-4.903 8.525-2.717 1.574-4.926.31-4.935-2.823-.009-3.134 2.186-6.95 4.903-8.525z'
              stroke='#FFF'
              strokeWidth='.5'
            />
            <path
              d='M228.06 103.317l25.683 14.995'
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <g transform='translate(190.307 139.238)'>
              <mask id='b' fill='#fff'>
                <use xlinkHref='#a' />
              </mask>
              <path
                fill='#1C00A8'
                mask='url(#b)'
                d='M63.537.127l.022 13.657L.156 50.529.133 36.872z'
              />
            </g>
            <path fill='#1F02AD' d='M190.564 172.043L36.212 82.328v18.046l154.095 89.2z' />
            <path fill='#4037D4' d='M131.155 78.876l63.353-36.957 15.722 55-63.353 36.958z' />
            <path fill='#5956F5' d='M58.824 36.957L122.178 0l72.33 41.919-63.353 36.957z' />
            <path
              fill='#4037D4'
              d='M131.155 78.876l15.722 55 43.725 25.342-.05 17.862-154.34-89.646.05-17.861 22.562-32.616z'
            />
            <g transform='translate(146.647 96.7)'>
              <mask id='d' fill='#fff'>
                <use xlinkHref='#c' />
              </mask>
              <path fill='#5956F5' mask='url(#d)' d='M.23 37.176L63.583.22l43.725 25.341-63.353 36.957z' />
            </g>
            <g transform='translate(190.307 122.223)'>
              <mask id='f' fill='#fff'>
                <use xlinkHref='#e' />
              </mask>
              <path fill='#4037D4' mask='url(#f)' d='M.295 36.995L63.648.038l-.05 17.862L.243 54.857z' />
            </g>
            <path fill='#3224C0' d='M253.844 132.404l.023 7.985-63.404 36.746-.023-7.986z' />
            <path
              d='M224.458 146.529c1.107-.641 2.007-.127 2.01 1.15.004 1.276-.89 2.83-1.997 3.472-1.107.642-2.007.127-2.01-1.15-.004-1.276.89-2.83 1.997-3.472'
              fill='#5956F5'
            />
            <path
              d='M224.458 146.787c1.107-.642 2.007-.127 2.01 1.15.004 1.276-.89 2.83-1.997 3.472-1.107.642-2.007.127-2.01-1.15-.004-1.276.89-2.83 1.997-3.472z'
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M198.766 157.862c2.717-1.575 4.926-.311 4.935 2.823.009 3.134-2.186 6.95-4.903 8.525-2.717 1.575-4.927.31-4.935-2.823-.01-3.134 2.186-6.95 4.903-8.525M246.535 130.535c2.717-1.575 4.927-.311 4.936 2.823.008 3.134-2.187 6.95-4.904 8.525-2.717 1.575-4.926.31-4.935-2.823-.009-3.134 2.186-6.95 4.903-8.525'
              fill='#0FF'
            />
            <path fill='#3225C0' d='M190.564 159.41L36.212 69.695v18.047l154.352 89.478z' />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M32.745 63.38l157.562 91.906 53.548-31.065M.128 77.408l25.683 14.996'
            />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M198.654 97.667l-53.563 31.052-15.523-54.512M174.513 42.497l-45.345 26.155-72.281-41.88'
            />
            <path
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M179.906 45.591l-49.968 28.732-75.62-43.169M91.925 120.225l.513-67.544'
            />
            <path
              d='M141.54 140.652c5.032 2.917 9.097 9.986 9.08 15.788-.016 5.803-4.107 8.143-9.14 5.227-5.03-2.916-9.095-9.983-9.079-15.786.017-5.802 4.108-8.145 9.139-5.229M56.788 90.64c5.031 2.916 9.096 9.983 9.08 15.786-.017 5.805-4.108 8.145-9.139 5.23-5.032-2.917-9.097-9.984-9.08-15.79.016-5.802 4.107-8.142 9.14-5.226'
              fill='#1F02AD'
            />
            <path
              d='M141.53 144.509c3.309 1.917 5.981 6.565 5.97 10.38-.01 3.815-2.7 5.354-6.01 3.437-3.307-1.917-5.98-6.564-5.968-10.379.01-3.815 2.7-5.355 6.008-3.438'
              fill='#5956F5'
            />
            <path
              d='M141.515 149.937c.71.411 1.282 1.407 1.28 2.225-.002.818-.579 1.147-1.288.736-.71-.41-1.282-1.406-1.28-2.224.002-.818.579-1.148 1.288-.737'
              fill='#1C00A8'
            />
            <path
              d='M56.778 94.238c3.308 1.917 5.98 6.565 5.97 10.38-.01 3.815-2.7 5.354-6.01 3.436-3.307-1.916-5.98-6.563-5.969-10.378.011-3.815 2.701-5.355 6.009-3.438'
              fill='#5956F5'
            />
            <path
              d='M56.763 99.666c.709.41 1.282 1.407 1.28 2.224-.003.818-.58 1.148-1.289.737-.708-.41-1.281-1.407-1.28-2.224.003-.818.58-1.148 1.289-.737'
              fill='#1C00A8'
            />
            <path
              d='M18.86 77.018l5.489 3.205M16.437 68.11l4.109 2.398'
              stroke='#FFF'
              strokeWidth='.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M133.019 115.067c2.717-1.575 4.926-.311 4.935 2.823.009 3.134-2.186 6.95-4.903 8.525-2.717 1.574-4.927.31-4.936-2.823-.008-3.134 2.187-6.95 4.904-8.525'
              fill='#5956F5'
            />
            <path
              d='M133.019 115.067c2.717-1.575 4.926-.311 4.935 2.823.009 3.134-2.186 6.95-4.903 8.525-2.717 1.574-4.927.31-4.936-2.823-.008-3.134 2.187-6.95 4.904-8.525z'
              stroke='#FFF'
              strokeWidth='.5'
            />
          </g>
        </svg>
      </div>)
  );
};

export default FrontCar;
