<script setup>
//* COMPONENTS
import OrderCardListProduct from './OrderCardListProduct.vue';
import Summary from './Summary/index.vue';
import CustomerOrder from './CustomerOrder/index.vue';
import Note from './Note/index.vue';

//* HELPERS
import { useSelector } from '../../helpers';

const storeOrders = useSelector((state) => state.orders);
</script>

<template>
  <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
    <!-- Đoạn này dùng để v-for -->
    <div v-for="(order, index) in storeOrders?.order" :key="order.id" class="mb-10">
      <div class="flex justify-start item-start space-y-2 flex-col">
        <h1 class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Order - {{ +index + 1 }}
        </h1>
      </div>
      <div
        class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0"
      >
        <div
          class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8"
        >
          <OrderCardListProduct :order-item="order?.cart" />

          <!-- Note -->
          <Note :note-item="order" />
          <div
            class="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8"
          >
            <Summary :order-item="order" />
          </div>
        </div>

        <!-- Customer Info Order -->
        <div class="self-start">
          <!-- Customer Info Order -->
          <CustomerOrder />
        </div>
      </div>
    </div>
  </div>
</template>
