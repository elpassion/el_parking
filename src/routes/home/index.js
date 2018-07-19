import { h } from 'preact';
import Button from '../../components/Button';

const Home = () => (
  <div>
    <Button
      type='primary'
      href='/example'
    >
      Zaloguj przez Google!
    </Button>
  </div>
);

export default Home;
