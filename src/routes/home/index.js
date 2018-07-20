import Button from '../../components/Button/index';
import routeMap from '../../utils/routeMap';
import BackCar from '../../components/CarSvg/BackCar';
import FrontCar from '../../components/CarSvg/FrontCar';
import ElPassionLogo from '../../components/ElPassionLogo';

import style from './style.scss';

const Home = () => (
  <div className={style.splashWrapper}>
    <div>
      <BackCar className={style.backCar} />
      <FrontCar className={style.frontCar} />
      <ElPassionLogo />
    </div>
    <Button
      Primary
      href={routeMap.example}
    >
      Zaloguj przez Google
    </Button>
  </div>
);

export default Home;
