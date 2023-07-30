<script setup>
import OrderCardProduct from './OrderCardProduct.vue';
</script>

<template>
  <div
    class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
  >
    <p
      class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800"
    >
      Customer’s Cart
    </p>

    <OrderCardProduct />
  </div>
</template>
