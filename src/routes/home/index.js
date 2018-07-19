import { h } from 'preact';
import Button from '../../components/Button';
import routeMap from '../../utils/routeMap';
import BackCar from '../../components/CarSvg/BackCar';
import FrontCar from '../../components/CarSvg/FrontCar';
import Logotype from '../../components/EpLogotype';

import style from './style.scss';

const Home = () => (
  <div className={style['splash-wrapper']}>
    <div className={style['splash-image-container']}>
      <BackCar className={style['back-car']} />
      <FrontCar className='sth2' />
      <Logotype />
    </div>
    <Button
      type='primary'
      href={routeMap.example}
    >
      Zaloguj przez Google
    </Button>
  </div>
);

export default Home;
