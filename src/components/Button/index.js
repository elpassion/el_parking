import { h } from 'preact';
import { Link } from 'preact-router/match';
import classNames from 'classnames';

import style from './style.scss';

export default ({
  type = 'primary',
  className,
  href,
  children,
}) => {
  const buttonClass = classNames(style.button, className, style[`${type}`]);
  return (
    <Link className={buttonClass} href={href}>
      {children}
    </Link>
  );
};
