import { Component } from 'preact';
import Heading from '../../components/Heading';
import Button from '../../components/Button/index';
import PlaceNumber from '../../components/PlaceNumber';

export default class YourPlace extends Component {
  state = {
    placeNumber: 1337,
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
      <PlaceNumber number={placeNumber} />
      <Button
        Primary
        href='/'
        onClick={this.releasePlace}
      >
        Zwolnij miejsce
      </Button>
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
