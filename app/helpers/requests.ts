import axios from 'axios';
import {constants} from '@app/config/constants';
export const TIMEOUT_TIME = 100000;

const request = axios.create({
  baseURL: constants.APIURL,
  timeout: TIMEOUT_TIME,
});

if (constants.ENV === 'dev') {
  request.interceptors.request.use(async config => {
    const fullUrl = config.baseURL ? config.baseURL + config.url : config.url;

    console.log(`Making request to: ${fullUrl}`);

    if (config.data) {
      console.log('Request payload:', JSON.stringify(config.data, null, 2));
    }

    return config;
  });
}

request.interceptors.request.use(async config => {
  config.headers.Accept = 'application/json';
  return config;
});

export default request;
