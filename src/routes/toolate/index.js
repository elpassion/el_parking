import Heading from '../../components/Heading';
import Hint from '../../components/Hint';
import FrontCar from '../../components/Svg/FrontCar';

import style from './style.scss';

const TooLate = () => (
  <div>
    <FrontCar LightBackground />
    <Heading color='Blue'>
      Niestety ktoś Cię wyprzedził
    </Heading>
    <Hint
      text={['i miejsce udostępnione wcześniej, zostało już zajętę. Nie trać nadziei.']}
      color='gray'
    />
  </div>
);

export default TooLate;
