import axios from 'axios';
// import themeConfig from '../configs/themeConfig';

const Api = { ...axios };

Api.defaults.baseURL = `${themeConfig.baseUrl}/api/v1/`;
Api.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('token')}`;
Api.defaults.headers.common.Accept = 'application/json';
Api.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

export default Api;
