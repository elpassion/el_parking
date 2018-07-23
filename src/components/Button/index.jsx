import { Link } from 'preact-router/match';
import classNames from 'classnames';

import style from './style.scss';

const Button = ({
  Primary, Secondary, className, href, children, onClick,
}) => {
  const buttonClass = classNames(style.button, className, {
    [style.primary]: Primary,
    [style.secondary]: Secondary,
  });

  return (
    onClick ? (
      <button type='submit' className={buttonClass} onClick={onClick}>
        {children}
      </button>
    ) : (
      <Link className={buttonClass} href={href}>
        {children}
      </Link>
    )
  );
};

export default Button;
