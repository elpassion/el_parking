/* eslint no-console: 0 */
import axios from 'axios';
import { route } from 'preact-router';

const HOST = 'localhost:3001';
// const HOST = 'el-parking-api-staging.herokuapp.com';

const api = axios.create({
  // baseURL: `https://${HOST}/`,
  baseURL: `http://${HOST}/`,
  withCredentials: true,
});

if (process.env.NODE_ENV === 'development') {
  api.interceptors.response.use((resp) => {
    console.log(resp.config.url, resp.data);
    return resp;
  }, function (error) {
      console.log('ERROR', error.response.data.error.message);
      if (error.response.status === 401) {
        console.log('You are unauthorized and I will redirect you! :speak_no_evil:');
        route('/');
      }
      return Promise.reject(error);
  });
} else {
  api.interceptors.response.use(
    (resp) => resp,
    (err) => {
      err.response.status === 401 && route('/');
      return Promise.reject(err);
  });
}

const auth = {
  authenticate: data => api.post('/authenticate', data),
};

const user = {
  saveDetails: data => api.put('/userDetails', data),
  details: () => api.get('/userDetails'),
};

const owner = {
  share: () => api.get('/owner/share'),
  cancelSharing: () => api.get('/owner/cancelSharing'),
};

const tenant = {
  parkingStatus: () => api.get('tenant/parkingStatus'),
  reserve: () => api.get('/tenant/reserve'),
  cancelReservation: () => api.get('/tenant/cancelReservation'),
};

export default {
  instance: api,
  auth,
  user,
  owner,
  tenant,
};
