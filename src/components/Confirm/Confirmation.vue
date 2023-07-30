<script setup>
//* LIBRARY
import { defineProps } from 'vue';

//* HELPERS
import { useDispatch, useSelector } from '../../helpers';

//* ROUTERS
import router from '../../routers/index';

//* PROVIDERS
import { createOrders } from '../../providers/redux/order/order_thunk';
import { clearCart } from '../../providers/redux/cart/cart_slice';

// Take props for page
const props = defineProps(['showConfirmation', 'hideOrderConfirmation']);

const storeCart = useSelector((state) => state.carts);

const dispatch = useDispatch();

// Confirm order
const confirmOrder = async () => {
  // WriteLogic

  // Create order for cart
  await dispatch(createOrders(storeCart.value));

  // Clear cart if crate order success
  dispatch(clearCart());

  // Redirect if checkout success
  router.push('/thankyou');

  // Hide Popup confirm
  props.hideOrderConfirmation();
};

// Hide Confirm order
const hideOrderConfirmation = () => {
  props.hideOrderConfirmation();
};
</script>

<template>
  <Transition
    enter-active-class="transition-all transform ease-out duration-300"
    leave-active-class="transition-all transform ease-in duration-300"
  >
    <div
      v-if="showConfirmation"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-16 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">
Order Confirmation
</h2>
        <p>Please confirm the order:</p>
        <div class="flex space-x-4 mt-4">
          <button class="px-4 py-2 bg-green-500 text-white rounded" @click="confirmOrder">
            Placing an Order
          </button>
          <button class="px-4 py-2 bg-red-500 text-white rounded" @click="hideOrderConfirmation">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
