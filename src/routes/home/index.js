import BackCar from '../../components/Svg/BackCar';
import Button from '../../components/Button';
import FrontCar from '../../components/Svg/FrontCar';
import Loggotype from '../../components/Svg/Logotype';
import routeMap from '../../utils/routeMap';

import style from './style.scss';

const Home = () => (
  <div className={style.splashWrapper}>
    <div className={style.splashImage}>
      <BackCar className={style.backCar} />
      <FrontCar className={style.frontCar} />
      <Loggotype />
    </div>
    <Button
      Primary
      href={routeMap.yourPlace}
      className={style.highOrder}
    >
      Zaloguj przez Google
    </Button>
  </div>
);

export default Home;
