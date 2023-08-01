<script setup>
//* LIBRARY
import { useSelector } from '../../../helpers';

//* UTILS
import { getImage } from '../../../utils';

// Define the 'image' prop here
const ProductImage = useSelector((state) => state.products);
</script>

<template>
  <div class="w-full">
    <div
      class="w-full h-[600px] border border-gray-border flex justify-center items-center overflow-hidden relative mb-3"
    >
      <img
        :src="getImage(ProductImage.productsDetail.image_url)"
        alt=""
        class="transition-all duration-200 hover:scale-110"
      />
    </div>
  </div>
</template>
