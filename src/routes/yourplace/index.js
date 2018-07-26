import { Component } from 'preact';
import Heading from '../../components/Heading';
import Button from '../../components/Button/index';
import Hint from '../../components/Hint';
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
    <div className={style.currentPlaceWrapper}>
      <Heading>
        Twoje miejsce:
      </Heading>
      <PlaceNumber reserved number={placeNumber} />
      <Hint
        text={['Nie przyjedziesz dziś', 'do pracy samochodzem?']}
        color='blue'
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
        <Heading>
          Zwolniłeś miejsce na jeden dzień
        </Heading>
        <PlaceNumber disabled number={placeNumber} />
      </div>
      <div className={style.placeSection}>
        <Hint
          text={['Jednak musisz dziś przyjechać', 'do pracy samochodem?']}
          color='blue'
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

  render (props, state) {
    return (
      !state.placeIsAvailable
        ? this.renderPlaceAvailable(state.placeNumber)
        : this.renderPlaceReleased(state.placeNumber)
    );
  }
}
