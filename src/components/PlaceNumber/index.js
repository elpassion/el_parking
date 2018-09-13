import classNames from 'classnames';

import style from './style.scss';

const PlaceNumber = ({
  number, reserved, disabled, className, ...props
}) => {
  const numberClasses = classNames(style.wrapper, className, {
    [style.reserved]: reserved,
    [style.disabled]: disabled,
  });

  return (
    <div className={numberClasses} {...props}>
      {number}
    </div>
  );
};

export default PlaceNumber;
