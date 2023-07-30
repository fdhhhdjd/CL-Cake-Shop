<script setup>
//* COMPONENTS
import EmptyOrders from '../../components/Empty/EmptyOrder.vue';
import OrderCarts from '../../components/OrderCarts/index.vue';

//* HELPERS
import { useSelector } from '../../helpers';

const storeOrders = useSelector((state) => state.orders);
</script>

<template>
  <!-- Empty Orders -->
  <EmptyOrders v-if="storeOrders?.order.length === 0" />

  <!-- Page Orders -->
  <OrderCarts v-else />
</template>
