import { Link } from 'preact-router/match';
import classNames from 'classnames';

import style from './style.scss';

const Button = ({
  primary, secondary, className, href, children, onClick,
}) => {
  const buttonClass = classNames(style.button, className, {
    [style.primary]: primary,
    [style.secondary]: secondary,
  });

  return (
    onClick ? (
      <button className={buttonClass} onClick={onClick}>
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
