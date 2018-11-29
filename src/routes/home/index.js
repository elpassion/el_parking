/* eslint no-undef: 0 no-console: 0 */
import { Component } from 'preact';
import { inject, observer } from 'mobx-react';
import Button from '../../components/Button';
import BackCar from '../../components/Svg/BackCar';
import FrontCar from '../../components/Svg/FrontCar';
import Logotype from '../../components/Svg/Logotype';
import routeMap from '../../utils/routeMap';

import style from './style.scss';

@inject('authStore')
@observer
class Home extends Component {
  componentDidMount = () => {
    const { authStore } = this.props;
    if (authStore.user) {
      authStore.initialUserRedirect();
    }
  };

  googleSignIn = () => {
    const { authStore } = this.props;
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: process.env.PREACT_APP_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
      })
      .then((auth2) => {
        auth2.signIn()
          .then((googleUser) => {
                authStore.login({ access_token: googleUser.Zi.access_token });
              }, (error) => {
                console.log(error, undefined, 2);
              });
      });
    });
  };

  render () {
    return (
      <div className={style.splashWrapper}>
        <div className={style.splashImage}>
          <BackCar className={style.backCar} />
          <FrontCar className={style.frontCar} />
          <Logotype />
        </div>
        <Button
          primary
          className={style.highOrder}
          onClick={this.googleSignIn}
        >
          Zaloguj przez Google
        </Button>
      </div>
    );
  }
}

export default Home;
