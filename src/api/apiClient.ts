import axios from 'axios';
import { config } from '../config/config';

const apiClient = axios.create({
    baseURL: config.API_URL,
    timeout: 10000,
});

export default apiClient;
