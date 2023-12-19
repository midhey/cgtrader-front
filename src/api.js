import axios from 'axios';

const api = axios.create({
    baseURL: 'http://95.214.62.15:8080/'
});

export default api;