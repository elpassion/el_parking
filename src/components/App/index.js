import { Router } from 'preact-router';
import Match from 'preact-router/match';
import WebFont from 'webfontloader';
import Home from '../../routes/home';
import Header from '../Header';
import Wrapper from '../Wrapper';
import Interested from '../../routes/interested';
import TooLate from '../../routes/toolate';
import YourPlace from '../../routes/yourplace';
import NoPlaceLeft from '../../routes/noplace';
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
      <Wrapper isHome={isHome} isWhite={[routeMap.noPlaceLeft, routeMap.tooLate].includes(url)} id='app'>
        {!isHome && (
          <Header
            isDark={[routeMap.interested, routeMap.yourPlace].includes(url)}
            isLight={[routeMap.noPlaceLeft, routeMap.tooLate].includes(url)}
          />
        )}
        <Router>
          <Home path={routeMap.home} default />
          <ProtectedRoute path={routeMap.interested} component={Interested} />
          <ProtectedRoute path={routeMap.yourPlace} component={YourPlace} />
          <ProtectedRoute path={routeMap.noPlaceLeft} component={NoPlaceLeft} />
          <ProtectedRoute path={routeMap.tooLate} component={TooLate} />
        </Router>
      </Wrapper>
    )}
  </Match>
);

export default App;
