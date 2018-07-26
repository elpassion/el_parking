import classNames from 'classnames';

import style from './style.scss';

const Hint = ({
  text, className, color,
}) => {
  const hintClasses = classNames(style.hint, style[`${color}`], className);

  return (
    text.length < 2 ? (
      <p className={hintClasses}>
        <span className={style.hintLine}>
          {text}
        </span>
      </p>
    ) : (
      <p className={hintClasses}>
        <span className={style.hintLine}>
          {text[0]}
        </span>
        <span className={style.hintLine}>
          {text[1]}
        </span>
      </p>
    )
  );
};

export default Hint;
