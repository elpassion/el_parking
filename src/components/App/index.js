import { Component } from 'preact';
import { Router } from 'preact-router';
import Header from '../Header';
import Home from '../../routes/home';
import Interested from '../../routes/interested';
import Match from 'preact-router/match';
import NoPlaceLeft from '../../routes/noplace';
import ProtectedRoute from '../ProtectedRoute';
import Redirect from '../Redirect';
import routeMap from '../../utils/routeMap';
import TooLate from '../../routes/toolate';
import WebFont from 'webfontloader';
import Wrapper from '../Wrapper';
import YourPlace from '../../routes/yourplace';

if (typeof window !== 'undefined') {
  WebFont.load({
    custom: {
      families: ['Gilroy:n1,n3,n5'],
      urls: ['assets/fonts/fonts.css'],
    },
  });
}

export default class App extends Component {
  state = {
    currentUrl: undefined,
  };

  handleRouteChange = (e) => {
    this.setState({ currentUrl: e.url });
  };

  render () {
    const isHome = this.state.currentUrl === routeMap.home;
    return (
      <Wrapper
        id='app'
        isHome={isHome}
        isWhite={[routeMap.noPlaceLeft, routeMap.tooLate].includes(this.state.currentUrl)}
      >
        {!isHome && (
          <Header
            isDark={[routeMap.interested, routeMap.yourPlace].includes(this.state.currentUrl)}
            isLight={[routeMap.noPlaceLeft, routeMap.tooLate].includes(this.state.currentUrl)}
          />
        )}
        <Router onChange={this.handleRouteChange}>
          <Home path={routeMap.home} />
          <ProtectedRoute path={routeMap.interested} component={Interested} />
          <ProtectedRoute path={routeMap.yourPlace} component={YourPlace} />
          <ProtectedRoute path={routeMap.noPlaceLeft} component={NoPlaceLeft} />
          <ProtectedRoute path={routeMap.tooLate} component={TooLate} />
          <Redirect to={routeMap.home} default />
        </Router>
      </Wrapper>
    );
  }
};
