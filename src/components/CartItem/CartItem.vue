<script setup>
//* HELPERS
import { useDispatch, useSelector } from '../../helpers';

//* UTILS
import { getImage, rouserNumber } from '../../utils';
import { showSuccessToast } from '../../utils/toast';

//* CONFIGS
import { SUCCESS } from '../../configs';

//* PROVIDER
import {
  decrementQuantity,
  deleteToCart,
  incrementQuantity,
} from '../../providers/redux/cart/cart_thunk';
import { clearCart } from '../../providers/redux/cart/cart_slice';

const dispatch = useDispatch();

const storeCart = useSelector((state) => state.carts);

// Handle delete cart
const handleDeleteCart = (id) => {
  dispatch(deleteToCart({ productId: id }));
};

// Handle increment quantity
const handleIncrementQuantity = (id) => {
  dispatch(incrementQuantity({ productId: id }));
};

// Handle increment quantity
const handleDecrementQuantity = (id) => {
  dispatch(decrementQuantity({ productId: id }));
};

// Handle remove all cart
const handleRemoveAllCart = () => {
  dispatch(clearCart());
  showSuccessToast(SUCCESS.DELETE_ALL_CART);
};
</script>

<template>
  <div class="relative w-full overflow-x-auto border border-[#ededed]">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        <tr
          class="text-[13px] font-medium text-black bg-[#f6f6f6] whitespace-nowrap px-2 border-b default-border-bottom uppercase"
        >
          <td class="py-4 pl-10 whitespace-nowrap min-w-[300px]">Product</td>
          <td class="py-4 whitespace-nowrap min-w-[200px] text-center">Price</td>
          <td class="py-4 whitespace-nowrap min-w-[200px] text-center">Discounted price</td>
          <td class="py-4 whitespace-nowrap min-w-[300px] text-center">Quantity</td>
          <td class="py-4 whitespace-nowrap min-w-[300px] text-center">Total</td>
          <td class="py-4 pr-5 whitespace-nowrap text-center w-[200px]">
            <button
              class="flex items-center justify-center font-semibold text-red-500 w-full text-sm"
              @click="handleRemoveAllCart"
            >
              <span class="fill-current mr-2 text w-4 text-red-500">
                <i class="fa-solid fa-trash"></i>
              </span>
              Remove all
            </button>
          </td>
        </tr>

        <!-- Data -->
        <tr
          v-for="cart in storeCart.cart"
          :key="cart.id"
          class="bg-white border-b hover:bg-gray-50"
        >
          <td class="pl-10 py-4 w-[380px]">
            <div class="flex space-x-6 items-center">
              <div
                class="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#ededed] relative"
              >
                <img
                  :src="getImage(cart.image_url)"
                  alt="product"
                  class="w-full h-full object-contain"
                />
              </div>
              <div class="flex-1 flex flex-col">
                <RouterLink :to="`/product/${cart.id}`">
                  <p class="font-medium text-[15px] text-black-500">
                    {{ cart.name }}
                  </p>
                </RouterLink>
              </div>
            </div>
          </td>

          <td class="text-center py-4 px-2">
            <div class="flex space-x-1 items-center justify-center">
              <span
                :class="cart.discounted_price ? 'line-through ' : ''"
                class="text-[15px] font-normal"
                >$ {{ cart.original_price }}</span
              >
            </div>
          </td>

          <td class="text-center py-4 px-2">
            <div class="flex space-x-1 items-center justify-center">
              <span
                :class="cart.discounted_price ? 'text-red-500' : ''"
                class="text-[15px] font-normal"
                >$ {{ cart.discounted_price || cart.original_price }}</span
              >
            </div>
          </td>

          <td class="text-center py-4 px-2">
            <div class="flex justify-center items-center">
              <div class="w-[120px] h-[40px] px-[26px] flex items-center border border-gray-300">
                <div class="flex justify-between items-center w-full">
                  <button class="text-base text-gray-500" @click="handleDecrementQuantity(cart.id)">
                    -
                  </button>
                  <span>{{ cart.quantity }}</span>
                  <button class="text-base text-gray-500" @click="handleIncrementQuantity(cart.id)">
                    +
                  </button>
                </div>
              </div>
            </div>
          </td>

          <td class="text-right py-4 px-2">
            <div class="flex space-x-1 items-center justify-center">
              <span class="text-[15px] font-normal"
                >${{
                  rouserNumber((cart.discounted_price || cart.original_price) * cart.quantity)
                }}</span
              >
            </div>
          </td>

          <td class="text-right py-4">
            <div
              class="flex space-x-1 items-center justify-center"
              @click="handleDeleteCart(cart.id)"
            >
              <span
                class="cursor-pointer flex p-4 rounded-full tems-center justify-center hover:bg-gray-200"
              >
                <i class="fa-solid fa-xmark"></i>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
