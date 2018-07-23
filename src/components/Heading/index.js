import classNames from 'classnames';

import style from './style.scss';

export default ({ className, children }) => {
  const headingClass = classNames(className, style.heading);

  return (
    <h1 className={headingClass}>
      {children}
    </h1>
  );
};
