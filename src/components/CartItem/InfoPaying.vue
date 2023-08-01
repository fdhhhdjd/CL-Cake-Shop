<script setup>
//* LIBRARY
import { ref } from 'vue';

//* HELPER
import { useSelector } from '../../helpers';

//* UTILS
import { rouserNumber } from '../../utils/index';

//* COMPONENTS
import OrderConfirmation from '../../components/Confirm/Confirmation.vue';

//* CONFIGS
import { CHARACTER, VALIDATE } from '../../configs';

const note = ref('');

const message = ref(null);

const showConfirmation = ref(false);

const storeCart = useSelector((state) => state.carts);

// Show order confirmation
const showOrderConfirmation = () => {
  if (!message.value) {
    showConfirmation.value = true;
  }
};

// Hide order confirmation
const hideOrderConfirmation = () => {
  showConfirmation.value = false;
};

// Handle input Note
const handleInput = () => {
  if (note.value.length > CHARACTER._25) {
    message.value = VALIDATE.NOTE;
  } else {
    message.value = null;
  }
};
</script>

<template>
  <div class="w-full mt-[23px]">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-1/2 sm:flex justify-between mb-10">
          <div class="lg:w-[570px] w-full mb-5 sm:mb-0 h-full flex">
            <div class="flex-1 h-full">
              <label
                for="message"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Note</label
              >
              <textarea
                id="message"
                v-model="note"
                rows="5"
                class="border p-2.5 placeholder:text-lg text-lg px-6 text-dark-gray w-full h-40 rounded-lg font-normal bg-white focus:outline-none"
                :class="
                  message ? 'border-2 border-red-500 animate-snake' : 'focus:border-yellow-500'
                "
                placeholder="Write your thoughts here..."
                @input="handleInput"
              ></textarea>
              <span v-if="message" class="mt-30 text-red-500">{{ message }}</span>
            </div>
          </div>
        </div>
        <div class="mt-8 w-full lg:w-1/2 flex sm:justify-end">
          <div class="lg:w-[370px] w-full border border-[#ededed] px-[30px] py-[26px]">
            <div class="mb-6">
              <div class="flex justify-between mb-6">
                <p class="text-[15px] font-medium text-black">Cost Total</p>
                <p class="text-[15px] font-medium text-red-500">
                  ${{ rouserNumber(storeCart.cost) }}
                </p>
              </div>
              <div class="w-full h-[1px] bg-[#ededed]"></div>
            </div>

            <div class="w-full mb-3">
              <div class="mb-[17px]">
                <h1 class="text-[15px] font-medium">Calculate Shipping</h1>
              </div>
              <div
                class="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-10"
              >
                <input
                  type="text"
                  placeholder="Enter Address..."
                  class="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-full"
                />
              </div>
              <div class="mb-6">
                <div class="flex justify-between">
                  <p class="text-[18px] font-medium text-black">Total</p>
                  <p class="text-[18px] font-medium text-red-500">
                    ${{ rouserNumber(storeCart.total) }}
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full h-[50px] bg-black text-white flex justify-center items-center">
              <button class="text-sm font-semibold" @click="showOrderConfirmation">
                Proceed to Checkout
              </button>
              <Teleport to="body">
                <OrderConfirmation
                  :show-confirmation="showConfirmation"
                  :hide-order-confirmation="hideOrderConfirmation"
                  :value-note="note"
                  :value-message="message"
                />
              </Teleport>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
