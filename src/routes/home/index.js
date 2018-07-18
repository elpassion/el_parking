import { h } from 'preact';
import Button from '../../components/Button';
// import style from './style.scss';

const Home = () => (
  <div>
    <Button
      type="primary"
      href='/example'
    >
      Zaloguj przez Google
    </Button>

    <Button
      type="secondary"
      href='/example'
    >
      Ignoruj
    </Button>
  </div>
);

export default Home;
