import { Component } from 'preact';

export default class YourPlace extends Component {
  state = { placeNumber: 666 };

  componentDidMount () {
    // Get Current User Place and push to state
  }

  render () {
    const { state } = this;
    return (
      <div>
        {state.placeNumber}
      </div>
    );
  }
}
