import { observable, action, computed } from 'mobx';
import { route } from 'preact-router';
import routeMap from '../utils/routeMap';
import authStore from './auth';
import api from '../api';

class AppStore {
  @observable isAuthenticated = true;
  @observable availableParkingPlace = null;

  @action reservePlace = () => {
    api.tenant.reserve()
      .then(res => {
        authStore.setUser(res.data.user);
      })
      .catch(err => {
        err.response.status === 422 && route(routeMap.tooLate);
      });
  };

  @action cancelReservation = () => {
    api.tenant.cancelReservation()
      .then(res => {
        authStore.setUser(res.data.user);
        this.checkFreePlaces();
      });
  };

  @action checkFreePlaces = () => {
    api.tenant.parkingStatus()
      .then((res) => {
        this.availableParkingPlace = res.data.freeParkingPlace;
        (!res.data.user && !authStore.user.borrowedParkingSpace) &&
          route(routeMap.noPlaceLeft);
      });
  };

  @action sharePlace = () => {
    api.owner.share()
      .then(res => {
        authStore.setUser(res.data.user);
      })
      .catch(() => {
        route(routeMap.tooLate);
      });
  };

  @action cancelSharing = () => {
    api.owner.cancelSharing()
      .then(res => {
        authStore.setUser(res.data.user);
      });
  };

  @action resetReservations = () => {
    api.user.details()
      .then(res => {
        authStore.setUser(res.data.user);
      });
  }
}

export default new AppStore();
