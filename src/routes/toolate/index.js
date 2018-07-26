import { Component } from 'preact';
import { route } from 'preact-router';
import Heading from '../../components/Heading';
import Hint from '../../components/Hint';
import FrontCar from '../../components/Svg/FrontCar';
import classNames from 'classnames';
import routeMap from '../../utils/routeMap';

import style from './style.scss';

export default class TooLate extends Component {
  state = {
    startRedirecting: false,
  };

  componentDidMount () {
    const loaderWrapper = this.loaderWrapper;

    loaderWrapper.addEventListener('transitionend', function () {
      route(routeMap.home, true);
    }, false);

    this.timeout = setTimeout(() => {
      this.setState(prevState => ({ startRedirecting: !prevState.startRedirecting }));
    }, 1000);
  }

  componentWillUnmount () {
    clearTimeout(this.timeout);
  }

  render (props, state) {
    const loaderClasses = classNames(style.loaderWrapper, { [style.isLoading]: state.startRedirecting });

    return (
      <div className={style.tooLateContainer}>
        <FrontCar LightBackground className={style.tooLateImageContainer} />
        <div>
          <Heading color='Blue'>
            Niestety ktoś Cię wyprzedził
          </Heading>
          <Hint
            text={['i miejsce udostępnione wcześniej, zostało już zajętę. Nie trać nadziei.']}
            color='gray'
          />
        </div>
        <div ref={loaderWrapper => (this.loaderWrapper = loaderWrapper)} className={loaderClasses}>
          <div className={style.loaderIndicator} />
        </div>
      </div>
    );
  }
}
