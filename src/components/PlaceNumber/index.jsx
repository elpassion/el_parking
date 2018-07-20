import classnames from 'classnames/bind';
import style from './style.scss';

const cx = classnames.bind(style);

export default ({
  number, reserved, disabled, className,
}) => {
  const numberClasses = cx(style.wrapper, {
    reserved,
    disabled,
  });

  return (
    <div className={classnames(className, numberClasses)}>
      {number}
    </div>);
};
