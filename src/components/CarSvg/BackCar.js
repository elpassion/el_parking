import classNames from 'classnames';

import style from './style.scss';

export default ({
  className,
}) => {
  const svgClasses = classNames(style['splash-image'], className);
  return (
    <div className='svg-wrapper'>
      <svg className={svgClasses} width='216' height='175' xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' fillRule='evenodd'>
          <path fill='#1C00A8' d='M143.22 152.934l.022 13.577 62.964-36.531-.022-13.577z' />
          <path fill='#1C00A8' d='M0 83.66l143.11 82.931.238-16.299L0 66.882z' />
          <path
            fill='#5956F5'
            d='M.064 53.063l34.441 19.981 63.032-36.81-34.441-19.981zM120.79 123.105l63.031-36.81 22.476
        13.04-63.032 36.81z'
          />
          <path fill='#3225C0' d='M143.265 136.145l63.032-36.81-.049 17.375-63.031 36.81z' />
          <path
            fill='#4037D4'
            d='M34.505 73.044L.065 53.063l-.05 17.374 143.201 83.083.05-17.375-22.477-13.04.15-52.956-57.464-33.34z'
          />
          <path fill='#4037D4' d='M120.939 70.149l63.031-36.81-.149 52.957-63.032 36.81z' />
          <path fill='#5956F5' d='M126.507 0L63.475 36.81l57.464 33.339 63.031-36.81z' />
          <path fill='#3225C0' d='M0 70.477l143.348 82.938v-17.204L0 53.016z' />
          <path
            d='M108.626 125.744c5.007 2.905 9.05 9.946 9.035 15.726-.017 5.78-4.087 8.11-9.094
        5.205-5.005-2.903-9.05-9.942-9.033-15.722.016-5.78 4.087-8.113 9.092-5.209M32.481
        81.58c5.005 2.905 9.05 9.944 9.033 15.723-.016 5.782-4.087 8.113-9.092
        5.21-5.006-2.906-9.05-9.945-9.035-15.726.017-5.78 4.087-8.111 9.094-5.206'
            fill='#1C00A8'
          />
          <path
            d='M108.616 129.586c3.292 1.91 5.951 6.54 5.94 10.34-.01 3.799-2.687 5.332-5.979
        3.422-3.29-1.91-5.95-6.538-5.939-10.338.01-3.8 2.687-5.334 5.978-3.424'
            fill='#5956F5'
          />
          <path
            d='M108.601 134.992c.706.41 1.276 1.402 1.273 2.216-.002.815-.575
        1.143-1.281.734-.705-.41-1.275-1.401-1.273-2.216.002-.814.576-1.143
        1.281-.734M32.47 85.164c3.292 1.91 5.951 6.539 5.94 10.339-.01
        3.8-2.686 5.332-5.978 3.423-3.29-1.91-5.95-6.538-5.94-10.338.011-3.8
        2.688-5.334 5.979-3.424'
            fill='#5956F5'
          />
          <path
            d='M32.456 90.57c.705.41 1.275 1.402 1.273 2.216-.002.815-.576
        1.143-1.282.734-.705-.41-1.275-1.401-1.273-2.216.003-.814.576-1.143 1.282-.734'
            fill='#5956F5'
          />
          <path
            fill='#00C5C5'
            d='M157.718 132.884l.021 7.535-10.875 6.31-.021-7.536zM173.604 50.636l.023
        8.163-40.604 23.558-.023-8.163zM202.435 106.693l.022 7.535-10.877 6.311-.021-7.535z'
          />
          <path
            d='M90.838 123.63V47.494M136.321 126.325L43.567 72.403M67.586 33.63l53.148 31.07M131.977
        110.919l51.97-29.884 31.075 18.329M131.977 57.415l51.97-29.884 31.075 18.33'
            stroke='#FFF'
            strokeWidth='.51'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M39.845 65.34c2.703-1.569 4.901-.31 4.91 2.811.009 3.122-2.175 6.923-4.878
        8.491-2.703 1.569-4.902.31-4.91-2.812-.01-3.121 2.175-6.922 4.878-8.49'
            fill='#5956F5'
          />
          <path
            d='M39.845 65.34c2.703-1.569 4.901-.31 4.91 2.811.009 3.122-2.175 6.923-4.878
        8.491-2.703 1.569-4.902.31-4.91-2.812-.01-3.121 2.175-6.922 4.878-8.49z'
            stroke='#FFF'
            strokeWidth='.51'
          />
          <path
            d='M189.106 159.631l25.552 14.936M207.742 159.242l5.462
        3.193M205.332 150.37l4.0882.389M120.734 64.57v52.511'
            stroke='#FFF'
            strokeWidth='.51'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </svg>
    </div>
  );
};
