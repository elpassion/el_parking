import classnames from 'classnames/bind';
import style from './style.scss';

const cx = classnames.bind(style);

export default ({
  number, empty, disabled, className,
}) => {
  const numberClasses = cx({
    wrapper: true,
    empty,
    disabled,
  });

  return (
    <div className={classnames(className, numberClasses)}>
      <span>{number}</span>
    </div>);
};
