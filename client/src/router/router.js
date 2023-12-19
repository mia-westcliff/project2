import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import GameReview from './components/GameReview.vue';
import SignIn from './components/SignIn.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: GameReview
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
});
