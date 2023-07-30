<script setup>
//* LIBRARY
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

//* PRODUCT DETAIl
import { useDispatch, useSelector } from '../../helpers';

//* PRODUCT
import ImageProduct from './ImageProduct/index.vue';

//* COMPONENTS
import LoadingVue from '../../components/Loading/index.vue';

//* LAYOUT
import { addToCartMutingQuantity } from '../../providers/redux/cart/cart_thunk';
import { getDetailProductInitial } from '../../providers/redux/product/product_thunk';

// CONFIGS
import { MINIMUM_QUANTITY, STATUS } from '../../configs';

const dispatch = useDispatch();

const route = useRoute();

const product = useSelector((state) => state.products);

const quantity = ref(1);

// Watch change id for url
watch(
  () => route.params.id,
  (newId) => {
    const checkProductIdCacheOrUndefine =
      !product?.value?.productsDetail || product?.value?.productsDetail?.id !== +route.params.id;

    if (checkProductIdCacheOrUndefine) {
      dispatch(getDetailProductInitial({ id: +newId }));
    }
  },
  { immediate: STATUS.ENABLE }
);

// Add to cart
const addToCartHandler = async (id) => {
  dispatch(addToCartMutingQuantity({ productId: id, quantity: quantity.value }));
};

// Increase Quantity
const increaseQuantity = () => {
  // Check if the current quantity is equal to the product's stock count
  const checkQuantityAndStock = quantity.value === product.value.productsDetail.stock_count;

  if (checkQuantityAndStock) {
    return; // If the current quantity matches the stock count, do nothing (no increase allowed).
  }

  // Increment the quantity by 1 if it doesn't exceed the stock count.
  quantity.value++;
};

// Decrease Quantity
const decreaseQuantity = () => {
  // Decrement the quantity by 1 if it is greater than 1 (minimum quantity).
  if (quantity.value > MINIMUM_QUANTITY) {
    quantity.value--;
  }
};
</script>

<template>
  <!-- Loading -->
  <LoadingVue v-if="product.loading" />

  <!-- Detail -->
  <div v-else class="w-full lg:flex justify-between">
    <div class="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
      <ImageProduct />
    </div>

    <div class="flex-1">
      <div class="w-full mt-10 lg:mt-0">
        <span class="text-gray text-xs font-normal uppercase tracking-wider mb-2 inline-block">
          {{ product.productsDetail.name }}
        </span>
        <p class="text-xl font-medium text-black mb-4">
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
          <span
            :class="
              product.productsDetail.discounted_price
                ? 'text-sm font-500 text-gray-500 line-through mt-2'
                : 'text-2xl font-500'
            "
          >
            ${{ product.productsDetail.original_price }}
          </span>

          <span v-if="product.productsDetail.discounted_price">-</span>

          <span
            v-if="product.productsDetail.discounted_price"
            class="text-2xl font-500 text-red-500"
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
              <button class="text-base text-gray-500" @click="decreaseQuantity">
-
</button>
              <span> {{ quantity }} </span>
              <button class="text-base text-gray-500" @click="increaseQuantity">
+
</button>
            </div>
          </div>

          <div class="h-full">
            <button
              class="bg-gray-900 px-16 text-white hover:opacity-75 text-sm font-semibold w-full h-full"
              @click="addToCartHandler(product.productsDetail.id)"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
