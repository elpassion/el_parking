import classNames from 'classnames';

import wrapperStyle from './style.scss';

const Wrapper = ({
  className, children, id, isHome,
}) => {
  const wrapperClasses = classNames(wrapperStyle.wrapper, className, {
    [wrapperStyle.isHome]: isHome,
  });
  const containerClasses = classNames(wrapperStyle.container, className);

  return (
    <div className={wrapperClasses} id={id}>
      <div className={containerClasses}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
