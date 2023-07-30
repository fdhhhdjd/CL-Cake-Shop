<script setup>
//* COMPONENTS
import OrderCardProduct from './OrderCardProduct.vue';

// Take props for page
const props = defineProps(['orderItem']);
</script>

<template>
  <div
    v-for="order in props.orderItem"
    :key="order.id"
    class="flex flex-col justify-start items-star bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
  >
    <OrderCardProduct :order-item="order" />
  </div>
</template>
