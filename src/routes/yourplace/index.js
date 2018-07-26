import { Component } from 'preact';
import Heading from '../../components/Heading';
import Button from '../../components/Button/index';
import BlueHint from '../../components/BlueHint';
import ToggleBox from '../../components/ToggleBox';
import PlaceNumber from '../../components/PlaceNumber';

import style from './style.scss';

export default class YourPlace extends Component {
  state = {
    placeNumber: 1.337,
    placeIsAvailable: false,
  };

  togglePlaceAvailability = () => {
    this.setState(prevState => ({ placeIsAvailable: !prevState.placeIsAvailable }));
  };

  renderPlaceAvailable = placeNumber => (
    <div>
      <Heading> Twoje miejsce: </Heading>
      <PlaceNumber reserved number={placeNumber} />
      <BlueHint
        firstLine='Nie przyjedziesz dziś'
        secondLine='do pracy samochodzem?'
      />
      <Button
        Primary
        onClick={this.togglePlaceAvailability}
      >
        Zwolnij miejsce
      </Button>
      <ToggleBox />
    </div>
  );

  renderPlaceReleased = placeNumber => (
    <div className={style.placeSectionWrapper}>
      <div className={style.placeSection}>
        <Heading> Zwolniłeś miejsce na jeden dzień </Heading>
        <PlaceNumber disabled number={placeNumber} />
      </div>
      <div className={style.placeSection}>
        <BlueHint
          firstLine='Jednak musisz dziś przyjechać'
          secondLine=' do pracy samochodem?'
        />
        <Button
          Primary
          onClick={this.togglePlaceAvailability}
        >
          Odwołaj zwolnienie miejsca
        </Button>
      </div>
    </div>
  );

  render () {
    const { state } = this;
    return (
      !state.placeIsAvailable
        ? this.renderPlaceAvailable(state.placeNumber)
        : this.renderPlaceReleased(state.placeNumber)
    );
  }
}
