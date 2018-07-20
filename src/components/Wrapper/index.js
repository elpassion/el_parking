import classNames from 'classnames';

import wrapperStyle from './style.scss';

export default ({
  className,
  children,
  id,
}) => {
  const wrapperClasses = classNames(wrapperStyle.wrapper, className);
  const containerClasses = classNames(wrapperStyle.container, className);
  return (
    <div className={wrapperClasses} id={id}>
      <div className={containerClasses}>
        {children}
      </div>
    </div>
  );
};
