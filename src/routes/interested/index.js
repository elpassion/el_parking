import { Component } from 'preact';
import { inject, observer } from 'mobx-react';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import PlaceNumber from '../../components/PlaceNumber';

import style from './style.scss';

@inject('appStore')
@observer
export default class Interested extends Component {
  constructor(props) {
    super(props);
    this.reservePlace = this.reservePlace.bind(this);
    this.releasePlace = this.releasePlace.bind(this);
    this.placeNumber = 2026;
  }

  reservePlace = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const { appStore: { reservePlace } } = this.props;
    reservePlace();
  };

  releasePlace = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const { appStore: { releasePlace } } = this.props;
    releasePlace();
  };

  renderAvailablePlaceView = () => (
    <div className={style.content}>
      <Heading>
        Zwolniło się miejsce:
      </Heading>
      <PlaceNumber number={this.placeNumber} />
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

  renderPlaceRegistration = () => (
    <div className={style.content}>
      <Heading>
        Zarezerwowano miejsce:
      </Heading>
      <PlaceNumber reserved number={this.placeNumber} />
      <Button
        Primary
        href='/'
        onClick={this.releasePlace}
      >
        Zwolnij miejsce
      </Button>
    </div>
  );

  render() {
    const { appStore: { placeIsAvailable } } = this.props;
    return (
      placeIsAvailable ? this.renderAvailablePlaceView() : this.renderPlaceRegistration()
    );
  }
}
