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

  componentDidMount () {
    // Get Current User Place and push to state
  }

  releasePlace = () => {
    this.setState({
      placeIsAvailable: true,
    });
  };

  renderPlaceAvailable = placeNumber => (
    <div className='sth'>
      <Heading> Twoje miejsce: </Heading>
      <PlaceNumber reserved number={placeNumber} />
      <BlueHint
        firstLine='Nie przyjedziesz dziś'
        secondLine='do pracy samochodzem?'
      />
      <Button
        Primary
        href='/'
        onClick={this.releasePlace}
      >
        Zwolnij miejsce
      </Button>
      <ToggleBox />
    </div>
  );

  renderPlaceReleased = placeNumber => (
    <div className='sth'>
      <Heading> Zwolniłeś miejsce na jeden dzień </Heading>
      <PlaceNumber number={placeNumber} />
      <Button
        Primary
        href='/'
      >
        Odwołaj zwolnienie miejsca
      </Button>
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
