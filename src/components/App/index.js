import { Component } from 'preact';
import { Router, getCurrentUrl } from 'preact-router';
import { inject, observer } from 'mobx-react';
import Home from '../../routes/home';
import Header from '../Header';
import Wrapper from '../Wrapper';
import Interested from '../../routes/interested/index';
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

@inject('appStore')
@observer
export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  constructor(props) {
    super(props);

    const { appStore: { changeRoute } } = this.props;
    changeRoute(getCurrentUrl(this));
  }

  handleRoute = (event) => {
    const { appStore: { changeRoute } } = this.props;
    changeRoute(event.url);
  };

  render() {
    const { appStore: { currentRoute } } = this.props;

    return (
      <Wrapper className={currentRoute === routeMap.home ? style.isHome : null} id='app'>
        {currentRoute !== routeMap.home && <Header Dark />}
        <Router onChange={this.handleRoute}>
          <Home path={routeMap.home} />
          <ProtectedRoute
            path={routeMap.interested}
            component={Interested}
          />
          <Home default />
        </Router>
      </Wrapper>
    );
  }
}
