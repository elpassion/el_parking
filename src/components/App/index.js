import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { inject } from 'mobx-react';
import Home from '../../routes/home';
import Header from '../Header';
import Wrapper from '../Wrapper';
import Example from '../../routes/example';
import ProtectedRoute from '../ProtectedRoute';

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

@inject('authStore')
export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */

  handleRoute = (event) => {
    this.currentUrl = event.url;
  };

  render() {
    const { authStore: { isAuthenticated } } = this.props;
    return (
      <Wrapper id='app'>
        <Header theme='dark' />
        <Router onChange={this.handleRoute}>
          <Home path='/' />
          <ProtectedRoute
            path='/example'
            component={Example}
          />
          <Home default />
        </Router>
      </Wrapper>
    );
  }
}
