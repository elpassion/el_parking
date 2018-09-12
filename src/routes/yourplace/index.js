import { Component } from 'preact';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import Button from '../../components/Button/index';
import Heading from '../../components/Heading';
import Hint from '../../components/Hint';
import PlaceNumber from '../../components/PlaceNumber';
import ToggleBox from '../../components/ToggleBox';
import api from '../../api';

import style from './style.scss';

class YourPlace extends Component {
  renderPlaceAvailable = () => (
    <div className={style.currentPlaceWrapper}>
      <Heading>
        Twoje miejsce:
      </Heading>
      <PlaceNumber reserved number={this.props.authStore.user.ownedParkingSpace} />
      <Hint
        text={['Nie przyjedziesz dziś', 'do pracy samochodzem?']}
        color='blue'
      />
      <Button
        primary
        onClick={this.props.appStore.sharePlace}
      >
        Zwolnij miejsce
      </Button>
      <ToggleBox />
    </div>
  );

  renderPlaceReleased = () => (
    <div className={style.placeSectionWrapper}>
      <div className={style.placeSection}>
        <Heading>
          Zwolniłeś miejsce na jeden dzień
        </Heading>
        <PlaceNumber disabled number={this.props.authStore.user.ownedParkingSpace} />
      </div>
      <div className={style.placeSection}>
        <Hint
          text={['Jednak musisz dziś przyjechać', 'do pracy samochodem?']}
          color='blue'
        />
        <Button
          primary
          onClick={this.props.appStore.cancelSharing}
        >
          Odwołaj zwolnienie miejsca
        </Button>
      </div>
    </div>
  );

  render () {
    return (
      this.props.authStore.user.releaseParkingSpace
        ? this.renderPlaceReleased()
        : this.renderPlaceAvailable()
    );
  }
}

export default inject('appStore', 'authStore')(observer(YourPlace));
