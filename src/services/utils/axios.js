import axios from 'axios';
import API from '../../constants/RouteConstant/API';

const AxiosInstance = axios.create({
  baseURL: `${API.BASE_URL}/api/v1`,
});

AxiosInstance.interceptors.request.use(
  (request) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.data?.result?.access_token;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // store.dispatch(logoutUser());
    }

    return Promise.reject(error);
  },
);
export default AxiosInstance;
