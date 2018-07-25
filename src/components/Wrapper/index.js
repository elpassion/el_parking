import classNames from 'classnames';
import routeMap from '../../utils/routeMap';


import wrapperStyle from './style.scss';

const Wrapper = ({
  className, children, id, isHome, location,
}) => {
  const wrapperClasses = classNames(wrapperStyle.wrapper, className, {
    [wrapperStyle.isHome]: isHome,
    [wrapperStyle.isWhite]: location === routeMap.no_place_left,
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
