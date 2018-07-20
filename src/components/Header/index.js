import classNames from 'classnames';
import { format } from 'date-fns';

import style from './style.scss';

export default ({
  className,
  Dark,
  Light,
}) => {
  const LogOutIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25'>
      <g className={style.powerIconFill} fillRule='evenodd'>
        <path d='M12.499.064C5.64.064.065 5.648.065 12.504c0 6.858 5.575 12.433 12.434 12.433 6.857 0 12.435-5.575 12.435-12.432S19.356.064 12.499.064zm0 23.591c-6.151 0-11.156-5-11.156-11.151 0-6.159 5.006-11.159 11.156-11.159 6.147 0 11.154 5 11.154 11.159 0 6.15-5.005 11.151-11.154 11.151z' />
        <path d='M13.14 6.844V4.783a.638.638 0 0 0-.641-.64.639.639 0 0 0-.643.64v2.061a5.7 5.7 0 0 0-5.05 5.66 5.697 5.697 0 0 0 5.693 5.692 5.7 5.7 0 0 0 5.694-5.692 5.701 5.701 0 0 0-5.054-5.66zm-.641 10.071a4.42 4.42 0 0 1-4.416-4.411 4.42 4.42 0 0 1 3.774-4.366v4.366c0 .35.288.633.643.633.352 0 .64-.282.64-.633V8.137a4.421 4.421 0 0 1 3.778 4.367 4.424 4.424 0 0 1-4.42 4.411z' />
      </g>
    </svg>
  );

  const today = new Date();
  const headerClass = classNames(className, style.header, { [style.isDark]: Dark, [style.isLight]: Light });

  return (
    <header className={headerClass}>
      <div className={style.headerDate}>
        <span>
          Dziś
        </span>
        <time className={style.dateToday} dateTime={today}>
          {format(today, 'DD.MM.YYYY')}
        </time>
      </div>
      <div className={style.headerAction}>
        <LogOutIcon />
      </div>
    </header>
  );
};
