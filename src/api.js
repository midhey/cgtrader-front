import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/',
});

api.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default api;