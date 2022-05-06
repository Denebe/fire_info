import axios from 'axios';

const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
});

instance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  function (error) {
    //request 에러
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data.response.body.items.item;
  }
);

export default instance;
