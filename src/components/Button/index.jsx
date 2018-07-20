import { Link } from 'preact-router/match';
import classNames from 'classnames';

import style from './style.scss';

export default ({
  Primary,
  Secondary,
  className,
  href,
  children,
  onClick,
}) => {
  const buttonClass = classNames(style.button, className, { [style.primary]: Primary, [style.secondary]: Secondary });
  return (
    onClick ? (
      <a className={buttonClass} onClick={onClick} href={href}>
        {children}
      </a>
    ) : (
      <Link className={buttonClass} href={href}>
        {children}
      </Link>
    )
  );
};
