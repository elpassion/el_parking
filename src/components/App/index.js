import { Component } from 'preact';
import { Router } from 'preact-router';
import Home from '../../routes/home';
import Header from '../Header';
import Wrapper from '../Wrapper';
import Interested from '../../routes/interested/index';
import ProtectedRoute from '../ProtectedRoute';
import routeMap from '../../utils/routeMap';

const isBrowser = typeof window !== 'undefined';
const WebFont = isBrowser ? require('webfontloader') : undefined;

if (isBrowser) {
  WebFont.load({
    custom: {
      families: ['Gilroy:n1,n3,n5'],
      urls: ['assets/fonts/fonts.css'],
    },
  });
}

export default class App extends Component {
  state = {
    isHome: true,
  };

  handleRoute = (event) => {
    this.setState({
      isHome: event.url === routeMap.home,
    });
  };

  render() {
    const { isHome } = this.state;
    return (
      <Wrapper isHome={isHome} id='app'>
        {!isHome && (<Header Dark />)}
        <Router onChange={this.handleRoute}>
          <Home path={routeMap.home} default />
          <ProtectedRoute path={routeMap.interested} component={Interested} />
        </Router>
      </Wrapper>
    );
  }
}
