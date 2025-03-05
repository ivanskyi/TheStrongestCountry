import { createRouter, createWebHistory } from 'vue-router';
import TheHome from '../views/HomePage.vue';
import TheContact from '../views/MapPage.vue';

const routes = [
  { path: '/', component: TheHome },
  { path: '/map', component: TheContact }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

