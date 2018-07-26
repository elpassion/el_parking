import Heading from '../../components/Heading';
import Hint from '../../components/Hint';

import style from './style.scss';

const TooLate = () => (
  <div>
    <div>
      <Heading color='Blue'>
        Niestety ktoś Cię wyprzedził
      </Heading>
      <Hint
        text={['i miejsce udostępnione wcześniej, zostało już zajętę. Nie trać nadziei.']}
        color='gray'
      />
    </div>
  </div>
);

export default TooLate;
