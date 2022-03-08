import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/done',
    name: 'Done',
    component: () => import('@/views/Done.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
