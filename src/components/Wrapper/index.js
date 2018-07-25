import classNames from 'classnames';

import wrapperStyle from './style.scss';

const Wrapper = ({
  className, children, id, isHome, isWhite,
}) => {
  const wrapperClasses = classNames(wrapperStyle.wrapper, className, {
    [wrapperStyle.isHome]: isHome,
    [wrapperStyle.isWhite]: isWhite,
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
