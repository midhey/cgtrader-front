// В вашем роутере
import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/HomeView.vue";
import Profile from "@/views/ProfileView.vue";
import store from '@/store/store'; // Импорт вашего хранилища

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } }, // Добавляем мета-поле requiresAuth
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // Проверяем мета-поле requiresAuth перед переходом на маршрут
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Проверяем, аутентифицирован ли пользователь
        if (!store.getters.isAuthenticated) {
            // Если не аутентифицирован, перенаправляем на страницу входа
            next('/');
        } else {
            // Если аутентифицирован, разрешаем переход
            next();
        }
    } else {
        // Если мета-поле не указано, разрешаем переход
        next();
    }
});

export default router;
