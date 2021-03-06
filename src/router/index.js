import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    component: () => import('@/views/CreateResume.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/PersonalDetails.vue'),
      },
      {
        path: '/create/experiences',
        component: () => import('@/views/Experiences.vue'),
      },
      {
        path: '/create/templates',
        component: () => import('@/views/Templates.vue'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('@/components/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
