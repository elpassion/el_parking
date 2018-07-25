import classNames from 'classnames';

import style from './style.scss';

const Heading = ({ className, children, color }) => {
  const headingClass = classNames(className, style.heading, style[`color${color}`]);

  return (
    <h1 className={headingClass}>
      {children}
    </h1>
  );
};

export default Heading;
