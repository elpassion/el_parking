import { Component } from 'preact';
import { inject, observer } from 'mobx-react';
import { route } from 'preact-router';
import Button from '../../components/Button/index';
import classNames from 'classnames';
import Heading from '../../components/Heading';
import Hint from '../../components/Hint';
import PlaceNumber from '../../components/PlaceNumber';
import api from '../../api';
import routeMap from '../../utils/routeMap';

import style from './style.scss';

@inject('appStore', 'authStore')
@observer
export default class Interested extends Component {
  state = {
    userPlace: null,
  };

  componentDidMount = () => {
    api.user.details()
      .then((res) => {
        this.setState({
          userPlace: res.data.user.ownedParkingSpace,
        });
      });
  }

  savePlace = () => {
    api.user.saveDetails({ ownedParkingSpace: this.state.userPlace.trim() })
      .then(res => {
        this.props.authStore.setUser(res.data.user);
        route(routeMap.home);
      });
  }

  handleInput = (e) => {
    this.setState({
      userPlace: e.target.innerText,
    });
  }

  renderAvailablePlaceView = () => (
    <div className={style.content}>
      <Heading> Twoje miejsce to:</Heading>
      <PlaceNumber
        contenteditable
        onInput={this.handleInput}
        number={this.state.userPlace}
        className={style.editable}
      />
      <Button primary onClick={this.savePlace}>
        Zapisz
      </Button>
      <Button secondary href='/'>
        Cofnij
      </Button>
    </div>
  );

  render () {
    return this.renderAvailablePlaceView();
  }
}
