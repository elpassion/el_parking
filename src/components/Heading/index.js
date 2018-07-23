import classNames from 'classnames';

import style from './style.scss';

const Heading = ({ className, children }) => {
  const headingClass = classNames(className, style.heading);

  return (
    <h1 className={headingClass}>
      {children}
    </h1>
  );
};

export default Heading;
