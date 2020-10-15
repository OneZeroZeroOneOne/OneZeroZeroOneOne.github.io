import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Aboutme from '../views/Aboutme.vue';
import Test from '../views/Test.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: Aboutme,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
