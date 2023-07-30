<script setup>
//* LIBRARY
import { defineProps } from 'vue';

//* UTILS
import { getImage } from '../../utils';

// Take props for page
const props = defineProps(['orderItem']);
</script>

<template>
  <div
    class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
  >
    <div class="pb-4 md:pb-8 w-full md:w-40">
      <img class="w-full hidden md:block" :src="getImage(props.orderItem.image_url)" alt="dress" />
    </div>
    <div
      class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0"
    >
      <div class="w-full flex flex-col justify-start items-start space-y-8">
        <RouterLink :to="`/product/${props.orderItem.id}`">
          <span class="text-xl text-gray-800">Name</span>
          <h3 class="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
            {{ props.orderItem.name }}
          </h3>
        </RouterLink>
      </div>
      <div class="flex justify-between space-x-8 items-start w-full">
        <div class="w-full flex flex-col justify-start items-start space-y-8">
          <span class="text-xl text-gray-800">Original</span>
          <p class="text-base dark:text-gray xl:text-lg leading-6">
            <span :class="props.orderItem.is_on_discount ? 'line-through' : ''">
              $ {{ props.orderItem.original_price }}
            </span>
            <span v-if="props.orderItem.is_on_discount"> - </span>
            <span v-if="props.orderItem.is_on_discount" class="text-red-500">
              ${{ props.orderItem.discounted_price }}</span
            >
          </p>
        </div>
        <div class="w-full flex flex-col justify-start items-start space-y-8">
          <span class="text-xl text-gray-800">Quantity</span>
          <p class="text-xl:text-lg leading-6 text-gray-800">
            {{ props.orderItem.quantity }}
          </p>
        </div>
        <div class="w-full flex flex-col justify-start items-start space-y-8">
          <span class="text-xl text-gray-800">Price</span>
          <p class="text-base xl:text-lg font-semibold leading-6 text-gray-800">
            ${{ props.orderItem.discounted_price || props.orderItem.original_price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
