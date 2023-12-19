import { createStore } from 'vuex';
import axios from "axios";
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state: {
        isAuthenticated: false,
        token: null,
    },
    mutations: {
        setAuthentication(state, { isAuthenticated, token }) {
            state.isAuthenticated = isAuthenticated;
            state.token = token;
        },
        clearAuthentication(state) {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
    actions: {
        async login({ commit }, { login, password }) {
            try {
                // Выполните запрос к серверу для аутентификации
                const response = await axios.post('http://localhost:8080/auth/sign_in', {
                    login,
                    password,
                });
                axios.defaults.headers.common['Authorization'] = response.data.token;

                // Диспетчеризовать мутацию для установки аутентификации
                commit('setAuthentication', {
                    isAuthenticated: true,
                    token: response.data.token,
                });

                // Возвращаем ответ для дополнительной обработки в компоненте
                return response;
            } catch (error) {
                console.error('Error during login:', error);
                // Обработка ошибки
                throw error;
            }
        },
        logout({ commit }) {
            // Диспетчеризовать мутацию для сброса аутентификации
            localStorage.removeItem('vuex')
            commit('clearAuthentication');
        },
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        getToken: state => state.token,
    },

    plugins: [createPersistedState()],
});

const storedToken = localStorage.getItem('token');

if (storedToken) {

    axios.defaults.headers.common['Authorization'] = storedToken;
    store.commit('setAuthentication', {
        isAuthenticated: true,
        token: storedToken,
    });
}

export default store;