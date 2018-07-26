import { Component } from 'preact';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';
import Heading from '../../components/Heading';
import Hint from '../../components/Hint';
import Button from '../../components/Button/index';
import PlaceNumber from '../../components/PlaceNumber';

import style from './style.scss';

@inject('appStore')
@observer
export default class Interested extends Component {
  state = {
    placeNumber: 1.337,
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
          <Hint
            text={['Jednak nie przyjedziesz?', 'Daj skorzystać komuś innemu.']}
            color='blue'
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
