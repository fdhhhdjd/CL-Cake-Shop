<script setup>
//* PRODUCT DETAIl
import { useSelector } from '../../helpers';

//* PRODUCT
import ImageProduct from './ImageProduct/index.vue';

//* LAYOUT
import LoadingVue from '../../layouts/Loading/index.vue';

const product = useSelector((state) => state.products);
</script>

<template>
  <LoadingVue v-if="product.loading" />

  <div v-else class="w-full lg:flex justify-between">
    <div class="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
      <ImageProduct />
    </div>

    <div class="flex-1">
      <div class="w-full mt-10 lg:mt-0">
        <span class="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block">
          {{ product.productsDetail.name }}
        </span>
        <p class="text-xl font-medium text-qblack mb-4">
          {{ product.productsDetail.description }}
        </p>

        <div class="flex space-x-[10px] items-center mb-6">
          <div class="flex">
            <span>
              <i class="fa-solid fa-star" style="color: #ffa800"></i>
            </span>
            <span>
              <i class="fa-solid fa-star" style="color: #ffa800"></i>
            </span>
            <span>
              <i class="fa-solid fa-star" style="color: #ffa800"></i>
            </span>
          </div>
          <span class="text-[13px] font-normal text-black-500">6 Reviews</span>
        </div>

        <div class="flex space-x-2 items-center mb-7">
          <span class="text-sm font-500 text-gray-500 line-through mt-2">$9.99</span>
          <span class="text-2xl font-500 text-red-500"
            >${{ product.productsDetail.discounted_price }}</span
          >
        </div>
        <div class="flex space-x-2 items-center mb-7">
          <span class="text-sm font-500 text-gray-500 mt-2">Stock:</span>
          <span class="text-2xl font-500">{{ product.productsDetail.stock_count }}</span>
        </div>

        <p class="text-gray-500 text-sm text-normal mb-[30px] leading-7">
          It is a long established fact that a reader will be distracted by the readable there
          content of a page when looking at its layout
        </p>

        <div class="w-full flex items-center h-[50px] space-x-[10px] mb-[30px]">
          <div class="w-[120px] h-full px-[26px] flex items-center border border-gray">
            <div class="flex justify-between items-center w-full">
              <button class="text-base text-gray-500">-</button>
              <span>1</span>
              <button class="text-base text-gray-500">+</button>
            </div>
          </div>

          <div class="h-full">
            <button
              class="bg-gray-900 px-16 text-white hover:opacity-75 text-sm font-semibold w-full h-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
