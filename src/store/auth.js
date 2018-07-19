import { observable, action } from 'mobx';

class AuthStore {
  @observable isAuthenticated = true;

  @observable currentRoute;

  @action changeRoute = (route) => {
    this.currentRoute = route;
  }
}

export default AuthStore;
