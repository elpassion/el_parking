import { h } from 'preact';
import { PlaceNumber } from '../../components';

const Example = () => (
  <div>
    <p>This is the Example route.</p>
    <PlaceNumber number='2.064' />
    <PlaceNumber number='2.064' empty />
    <PlaceNumber number='2.064' disabled />
  </div>
);

export default Example;
