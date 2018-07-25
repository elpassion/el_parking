import { Component } from 'preact';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import PlaceNumber from '../../components/PlaceNumber';

import style from './style.scss';

@inject('appStore')
@observer
export default class Interested extends Component {
  state = {
    placeNumber: 2026,
  };

  reservePlace = (evt) => {
    const { appStore } = this.props;
    evt.preventDefault();
    evt.stopPropagation();

    appStore.reservePlace();
  };

  releasePlace = (evt) => {
    const { appStore } = this.props;
    evt.preventDefault();
    evt.stopPropagation();

    appStore.releasePlace();
  };

  renderAvailablePlaceView = placeNumber => (
    <div className={style.content}>
      <Heading> Zwolniło się miejsce:</Heading>
      <PlaceNumber number={placeNumber} />
      <Button
        Primary
        href='/'
        onClick={this.reservePlace}
      >
        Rezerwuj
      </Button>
      <Button
        Secondary
        href='/'
      >
        Ignoruj
      </Button>
    </div>
  );

  renderPlaceRegistration = (placeNumber) => {
    const containerClasses = classNames(style.content, style.spaceBetween);

    return (
      <div className={containerClasses}>
        <div>
          <Heading>Zarezerwowano miejsce:</Heading>
          <PlaceNumber reserved number={placeNumber} />
        </div>
        <div>
          <p className={style.blueHint}>
            <span className={style.blueHintLine}>
              Jednak nie przyjedziesz?
            </span>
            <span className={style.blueHintLine}>
              Daj skorzystać komuś innemu.
            </span>
          </p>
          <Button
            Primary
            href='/'
            onClick={this.releasePlace}
          >
            Zwolnij miejsce
          </Button>
        </div>
      </div>
    );
  };

  render() {
    const { placeNumber } = this.state;
    const { appStore } = this.props;
    return (
      appStore.placeIsAvailable
        ? this.renderAvailablePlaceView(placeNumber)
        : this.renderPlaceRegistration(placeNumber)
    );
  }
}
