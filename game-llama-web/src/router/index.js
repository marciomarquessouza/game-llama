import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/PageHome';
import Posts from '@/components/pages/PagePosts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
  ],
});
