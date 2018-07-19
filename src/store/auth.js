import { observable, action } from 'mobx';

class AuthStore {
  @observable isAuthenticated = false;
}

export default AuthStore;
