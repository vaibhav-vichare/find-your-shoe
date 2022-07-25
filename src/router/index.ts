import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../components/Quiz.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('../components/Result.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
