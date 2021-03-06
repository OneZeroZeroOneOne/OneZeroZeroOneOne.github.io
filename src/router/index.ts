import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AboutMe from '../views/Aboutme.vue';
import Projects from '../views/Projects.vue';
import Test from '../views/Test.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMe,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
