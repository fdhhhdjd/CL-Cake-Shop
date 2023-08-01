<script setup>
//* LIBRARY
import { defineProps } from 'vue';

//* UTILS
import { getImage } from '../../utils';

//* PROVIDER
import { addToCart } from '../../providers/redux/cart/cart_thunk';

//* HELPERS
import { useDispatch } from '../../helpers';

const props = defineProps(['product']);

// eslint-disable-next-line vue/no-setup-props-destructure
const { product } = props;

const dispatch = useDispatch();

const addToCartHandler = async (id) => {
  try {
    // Add products
    await dispatch(addToCart({ productId: id }));
  } catch (err) {
    // logs Error
    console.log(err);
  }
};
</script>

<template>
  <div
    class="w-full h-full bg-white relative group overflow-hidden"
    style="box-shadow: 0px 15px 64px 0px rgba(0, 0, 0, 0.05)"
  >
    <!-- Card Image -->
    <div class="w-full h-[250px]">
      <img
        :src="getImage(product.image_url)"
        alt=""
        class="bg-image h-full object-contain bg-center bg-no-repeat w-9/12 mx-auto transition-all duration-200 group-hover:scale-110"
      />
    </div>

    <!-- Card content -->
    <div class="px-10 pb-14 relative mt-8">
      <div
        class="hidden lg:block top-60 group-hover:top-[155px] absolute w-full h-10 px-[30px] left-0 transition-all duration-300 ease-in-out"
      >
        <button
          type="button"
          class="bg-yellow-500 w-full py-2 px-4 rounded-lg"
          @click="addToCartHandler(product.id)"
        >
          <div class="flex items-center space-x-3">
            <span> <i class="fa-solid fa-bag-shopping" /> </span><span>Add To Cart</span>
          </div>
        </button>
      </div>

      <!-- Reviews -->
      <div class="reviews flex space-x-[1px] mb-3">
        <span>
          <i class="fa-solid fa-star" style="color: #ffa800" />
        </span>
        <span>
          <i class="fa-solid fa-star" style="color: #ffa800" />
        </span>
        <span>
          <i class="fa-solid fa-star" style="color: #ffa800" />
        </span>
      </div>

      <!-- Title name Product -->
      <RouterLink :to="`/product/${product.id}`">
        <p
          class="title mb-2 text-[15px] font-600 text-black leading-[24px] line-clamp-2 hover:text-yellow cursor-pointer"
        >
          <b>Name</b>: {{ product.name }}
        </p>
        <p
          class="title mb-2 text-[15px] font-600 text-black leading-[24px] line-clamp-2 hover:text-yellow cursor-pointer"
        >
          <b>Des</b>: {{ product.description }}
        </p>
      </RouterLink>

      <div class="price">
        <b class="mr-1">Price:</b>
        <span
          :class="product.discounted_price ? 'line-through ' : ''"
          class="font-600 text-[18px] mr-2"
        >
          ${{ product.original_price }}
        </span>

        <span v-if="product.discounted_price">-</span>

        <span
          :class="product.discounted_price ? 'text-red-500' : ''"
          class="text-black font-600 text-[18px] ml-2"
          >{{ product.discounted_price ? product.discounted_price : '' }}</span
        >
      </div>

      <div class="flex lg:hidden justify-end">
        <button
          type="button"
          class="bg-yellow-500 py-2 px-4 rounded-lg cursor-pointer"
          @click="addToCartHandler(product.id)"
        >
          <div class="flex items-center space-x-3">
            <span> <i class="fa-solid fa-cart-shopping"></i> </span>
          </div>
        </button>
      </div>
    </div>
    <div
      class="flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out"
    >
      <span class="w-10 h-10 flex justify-center items-center bg-gray-100 rounded">
        <i class="fa-solid fa-expand" />
      </span>

      <span class="w-10 h-10 flex justify-center items-center bg-gray-100 rounded">
        <i class="fa-regular fa-heart" />
      </span>
      <span class="w-10 h-10 flex justify-center items-center bg-gray-100 rounded">
        <i class="fa-solid fa-arrows-rotate" />
      </span>
    </div>
  </div>
</template>
