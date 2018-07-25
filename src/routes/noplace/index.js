import Heading from '../../components/Heading';
import style from './style.scss';

const noPlaceLeft = () => (
  <div className={style.splashWrapper}>
    <div>
      Image goes here
    </div>
    <div>
      <Heading color='Blue'>Dziś nie ma wolnych miejsc</Heading>
      <p className={style.graySubheader}>
        Poinformujemy Cię jeśli zwolni się którekolwiek miejsce parkingowe.
      </p>
    </div>
  </div>
);

export default noPlaceLeft;
