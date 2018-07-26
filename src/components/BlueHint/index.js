import classNames from 'classnames';

import style from './style.scss';

const BlueHint = ({
  firstLine, secondLine, className,
}) => {
  const hintClasses = classNames(style.blueHint, className);

  return (
    <p className={hintClasses}>
      <span className={style.blueHintLine}>
        {firstLine}
      </span>
      <span className={style.blueHintLine}>
        {secondLine}
      </span>
    </p>
  );
};

export default BlueHint;
