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

//* UTILS
import runFireworks from '../../utils/fireWorks';

// Take props for page
const props = defineProps(['showConfirmation', 'hideOrderConfirmation', 'valueNote']);

const storeCart = useSelector((state) => state.carts);

const dispatch = useDispatch();

// Confirm order
const confirmOrder = async () => {
  // WriteLogic
  // Create order for cart
  const newObjectCart = Object.assign({}, storeCart.value, { note: props.valueNote });

  await dispatch(createOrders(newObjectCart));

  // Clear cart if crate order success
  dispatch(clearCart());

  // Redirect if checkout success
  router.push('/thankyou');

  // Run fireworks
  runFireworks();

  // Hide Popup confirm
  props.hideOrderConfirmation();
};

// Hide Confirm order
const hideOrderConfirmation = () => {
  props.hideOrderConfirmation();
};

// Hide then click outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.confirmation-box')) {
    hideOrderConfirmation();
  }
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
      @click="handleClickOutside"
    >
      <div
        :style="{
          transform: showConfirmation ? 'scale(1)' : 'scale(0.8)',
          opacity: showConfirmation ? 1 : 0,
        }"
        class="bg-white p-16 rounded shadow-md"
        @click.stop
      >
        <h2 class="text-2xl font-bold mb-4">
Confirm Your Orders
</h2>
        <span>Please review your order 😊</span>
        <div class="flex space-x-4 mt-4">
          <button class="px-4 py-2 bg-green-500 text-white rounded" @click="confirmOrder">
            Place Order
          </button>
          <button class="px-4 py-2 bg-red-500 text-white rounded" @click="hideOrderConfirmation">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Custom styles for the confirmation box */
.bg-opacity-50:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
