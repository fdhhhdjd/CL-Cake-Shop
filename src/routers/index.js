//* LIBRARY
import { createRouter, createWebHistory } from 'vue-router';

//* PAGE
import Products from '../pages/products/index.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Products,
      meta: { layout: 'default' },
    },
    {
      path: '/product/:id',
      component: import('../pages/detail/index.vue'),
    },
    {
      path: '/cart',
      component: import('../pages/cart/index.vue'),
    },
  ],
});
