import Axios, { InternalAxiosRequestConfig } from 'axios';
import { API_URL } from '@/config/app.config';
import { paths } from '@/config/paths';
import { toast } from 'sonner';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }
  // config.withCredentials = true;
  return config;
}

export const api = Axios.create({
  baseURL: API_URL,
});

export const setHeaderToken = (token: string) => {
  console.dir(token);
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHeaderToken = () => {
  //client.defaults.headers.common.Authorization = null;
  delete api.defaults.headers.common.Authorization;
};

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    toast.error(message);

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get('redirectTo') || window.location.pathname;
      window.location.href = paths.auth.login.getHref(redirectTo);
    }

    return Promise.reject(error);
  },
);
