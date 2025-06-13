
import axios from 'axios';
import { API_URL } from 'app/config/app.config'; 

const axiosIns = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export { axiosIns }