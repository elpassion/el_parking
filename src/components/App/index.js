import { Router } from 'preact-router';
import Header from '../Header';
import Home from '../../routes/home';
import Interested from '../../routes/interested';
import Match from 'preact-router/match';
import NoPlaceLeft from '../../routes/noplace';
import ProtectedRoute from '../ProtectedRoute';
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

const App = () => (
  <Match path={routeMap.home}>
    {({ matches: isHome, url }) => (
      <Wrapper
        id='app'
        isHome={isHome}
        isWhite={[routeMap.noPlaceLeft, routeMap.tooLate].includes(url)}
      >
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
