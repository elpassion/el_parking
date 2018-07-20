import { Link } from 'preact-router/match';
import classNames from 'classnames';

import style from './style.scss';

export default ({
  Primary,
  Secondary,
  className,
  href,
  children,
}) => {
  const buttonClass = classNames(style.button, className, { [style.primary]: Primary, [style.secondary]: Secondary });
  return (
    <Link className={buttonClass} href={href}>
      {children}
    </Link>
  );
};
