//* LIBRARY
import { createRouter, createWebHistory } from 'vue-router';

//* CONFIGS
import { CARTS, PRODUCTS, ORDERS } from '../configs';

// Todo: Create router
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: import('../pages/products/index.vue'),
      meta: {
        layout: 'default',
        title: PRODUCTS.LIST,
      },
    },
    {
      path: '/product/:id',
      component: import('../pages/detail/index.vue'),
      meta: {
        title: PRODUCTS.DETAIL,
      },
    },
    {
      path: '/cart',
      component: import('../pages/cart/index.vue'),
      meta: {
        title: CARTS.LIST,
      },
    },
    {
      path: '/order',
      component: import('../pages/order/index.vue'),
      meta: {
        title: ORDERS.LIST,
      },
    },
    {
      path: '/thankyou',
      component: import('../pages/thankyou/index.vue'),
    },
    // will match everything and put it under `$route.params.pathMatch`
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: import('../pages/notfound/index.vue'),
    },
  ],
});
