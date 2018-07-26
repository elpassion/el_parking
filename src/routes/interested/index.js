import { Component } from 'preact';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import Heading from '../../components/Heading';
import BlueHint from '../../components/BlueHint';
import Button from '../../components/Button/index';
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
          <BlueHint
            firstLine='Jednak nie przyjedziesz?'
            secondLine='Daj skorzystać komuś innemu.'
          />
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

  render () {
    const { placeNumber } = this.state;
    const { appStore } = this.props;
    return (
      appStore.placeIsAvailable
        ? this.renderAvailablePlaceView(placeNumber)
        : this.renderPlaceRegistration(placeNumber)
    );
  }
}
