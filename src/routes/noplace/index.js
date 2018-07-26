import Heading from '../../components/Heading';
import BackCar from '../../components/Svg/BackCar';
import GrayCar from '../../components/Svg/GrayCar';
import style from './style.scss';

const NoPlaceLeft = () => (
  <div className={style.contentWrapper}>
    <div className={style.splashScreen}>
      <BackCar className={style.backCar} />
      <GrayCar className={style.grayCar} />
    </div>
    <div>
      <Heading color='Blue'>
        Dziś nie ma wolnych miejsc
      </Heading>
      <p className={style.graySubheader}>
        Poinformujemy Cię jeśli zwolni się którekolwiek miejsce parkingowe.
      </p>
    </div>
  </div>
);

export default NoPlaceLeft;
