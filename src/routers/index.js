//* LIBRARY
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: import('../pages/products/index.vue'),
      meta: {
        layout: 'default',
        title: 'List Product',
      },
    },
    {
      path: '/product/:id',
      component: import('../pages/detail/index.vue'),
      meta: {
        title: 'Product Detail',
      },
    },
    {
      path: '/cart',
      component: import('../pages/cart/index.vue'),
      meta: {
        title: 'Cart Product',
      },
    },
    {
      path: '/order',
      component: import('../pages/order/index.vue'),
      meta: {
        title: 'order',
      },
    },
  ],
});
