import { Router } from 'preact-router';
import Match from 'preact-router/match';
import WebFont from 'webfontloader';
import Home from '../../routes/home';
import Interested from '../../routes/interested';
import noPlaceLeft from '../../routes/noplace';
import Header from '../Header';
import Wrapper from '../Wrapper';
import ProtectedRoute from '../ProtectedRoute';
import routeMap from '../../utils/routeMap';

if (typeof window !== 'undefined') {
  WebFont.load({
    custom: {
      families: ['Gilroy:n1,n3,n5'],
      urls: ['assets/fonts/fonts.css'],
    },
  });
}

const App = () => (
  <Match path={routeMap.home}>
    {({ matches: isHome, url }) => (
      <Wrapper isHome={isHome} location={url} id='app'>
        {!isHome && (<Header location={url} />)}
        <Router>
          <Home path={routeMap.home} default />
          <ProtectedRoute path={routeMap.interested} component={Interested} />
          <ProtectedRoute path={routeMap.no_place_left} component={noPlaceLeft} />
        </Router>
      </Wrapper>
    )}
  </Match>
);

export default App;
