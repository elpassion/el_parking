import { observable, action } from 'mobx';

class AppStore {
  @observable isAuthenticated = true;

  @observable placeIsAvailable = true;

  @action reservePlace = () => {
    this.placeIsAvailable = false;
  };

  @action releasePlace = () => {
    this.placeIsAvailable = true;
  };
}

export default AppStore;
