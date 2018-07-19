import { h } from 'preact';
import classNames from 'classnames';

import style from './style.scss';

export default ({
  className,
  children,
  id,
}) => {
  const wrapperClasses = classNames(style.wrapper, className);
  return (
    <div className={wrapperClasses} id={id}>
      {children}
    </div>
  );
};
