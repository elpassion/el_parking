import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from '../routes/home';
import Example from '../routes/example';

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
  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = (event) => {
    this.currentUrl = event.url;
  };

  render() {
    return (
      <div id='app'>
        <Router onChange={this.handleRoute}>
          <Home path='/' />
          <Example path='/example' />
        </Router>
      </div>
    );
  }
}
