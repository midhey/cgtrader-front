import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import api from './api';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'



const app = createApp(App)
    app.use(router)
    app.config.globalProperties.$api = api
    app.use(store)
    app.mount('#app');