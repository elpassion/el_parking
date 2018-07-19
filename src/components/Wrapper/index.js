import { h } from 'preact';
import classNames from 'classnames';

import wrapperStyle from './style.scss';

export default ({
  className,
  children,
  id,
}) => {
  const wrapperClasses = classNames(wrapperStyle.wrapper, className);
  return (
    <div className={wrapperClasses} id={id}>
      {children}
    </div>
  );
};
