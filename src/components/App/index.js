import { h, Component } from 'preact';
import { Router, getCurrentUrl } from 'preact-router';
import { inject, observer } from 'mobx-react';
import Home from '../../routes/home';
import Header from '../Header';
import Wrapper from '../Wrapper';
import Example from '../../routes/example';
import ProtectedRoute from '../ProtectedRoute';
import routeMap from '../../utils/routeMap';

import style from '../Wrapper/style.scss';

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
@observer
export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  constructor(props) {
    super(props);

    const { authStore: { changeRoute } } = this.props;
    changeRoute(getCurrentUrl(this));
  }


  handleRoute = (event) => {
    const { authStore: { changeRoute } } = this.props;
    changeRoute(event.url);
  };

  render() {
    const { authStore: { currentRoute } } = this.props;

    return (
      <Wrapper className={currentRoute === routeMap.home ? style.isHome : ''} id='app'>
        {currentRoute !== routeMap.home && <Header theme='Dark' />}
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
