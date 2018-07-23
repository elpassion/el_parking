import { Component } from 'preact';
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

  renderPlaceRegistration = placeNumber => (
    <div className={style.content}>
      <Heading>Zarezerwowano miejsce:</Heading>
      <PlaceNumber reserved number={placeNumber} />
      <Button
        Primary
        href='/'
        onClick={this.releasePlace}
      >
        Zwolnij
      </Button>
    </div>
  );

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
