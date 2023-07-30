<script setup>
import { defineProps } from 'vue';

//* UTILS
import { rouserNumber } from '../../../utils/index';

// Take props for page
const props = defineProps(['orderItem']);
</script>

<template>
  <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
    <h3 class="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
    <div
      class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4"
    >
      <div class="flex justify-between w-full">
        <p class="text-base leading-4 text-gray-800">Cost Total:</p>
        <p class="text-base leading-4 text-gray-600">${{ rouserNumber(props.orderItem.cost) }}</p>
      </div>
      <div class="flex justify-between items-center w-full">
        <p class="text-base leading-4 text-gray-800">
          Discount
          <span
            class="bg-gray-200 p-1 text-xs font-medium dark:text-gray-800 leading-3 text-gray-800"
            >STUDENT</span
          >
        </p>
        <p class="text-base leading-4 text-gray-600">0 (0%)</p>
      </div>
      <div class="flex justify-between items-center w-full">
        <p class="text-base leading-4 text-gray-800">Shipping</p>
        <p class="text-base leading-4 text-gray-600">$0</p>
      </div>
    </div>
    <div class="flex justify-between items-center w-full">
      <p class="text-base font-semibold leading-4 text-gray-800">Total</p>
      <p class="text-base font-semibold leading-4 text-gray-600">
        ${{ rouserNumber(props.orderItem.total) }}
      </p>
    </div>
  </div>
</template>
