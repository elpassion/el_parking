import { Component } from 'preact';
import classNames from 'classnames';

import style from './style.scss';

export default class ToggleBox extends Component {
  state = {
    isExpanded: false,
  };

  toggleDetails = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  render () {
    const { isExpanded } = this.state;
    const toggleBoxClasses = classNames(style.toggleBox, { [style.isExpanded]: isExpanded });

    return (
      <div className={toggleBoxClasses}>
        <p className={style.toggleBoxText}>
          Możesz również zwolnić miejsce dopisując
          <span className={style.bold}> +P w tytule e-maila </span>
          na zdalnie@elpassion.pl
        </p>

        {isExpanded && (
          <p className={style.toggleBoxText}>
            Pamiętaj obecnie obsługujemy tylko zwalnianie irezerwowanie miejsc parkingowych w
            &quot;<span className={style.bold}>+dniu dzisiejszym</span>&quot;.
          </p>
        )}

        <button className={style.toggleButton} type='button' onClick={this.toggleDetails}>
          <span className={style.toggleButtonText}>
            Czytaj {isExpanded ? 'mniej' : 'więcej'}
          </span>

          <svg className={style.toggleButtonIcon} width='6' height='3' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill='none'
              fillRule='nonzero'
              stroke='#00C5C5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 3L2.879.879.757 3'
            />
          </svg>
        </button>
      </div>
    );
  }
}
