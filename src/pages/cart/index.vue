<script setup>
//* HELPER
import { useSelector } from '../../helpers';

//* COMPONENTS
import EmptyCartVue from '../../components/Empty/EmptyCart.vue';
import CartItem from '../../components/CartItem/CartItem.vue';

//* CONFIGS
import InfoPaying from '../../components/CartItem/InfoPaying.vue';

const storeCart = useSelector((state) => state.carts);
</script>

<template>
  <!-- Content Cart -->
  <section class="wrap-cart">
    <div class="w-full">
      <div class="container mx-auto">
        <!-- No data cart -->
        <EmptyCartVue v-if="storeCart.cart.length === 0" />

        <div v-else>
          <!-- Cart exits -->
          <CartItem />

          <!-- Info Paying -->
          <InfoPaying />
        </div>
      </div>
    </div>
  </section>
</template>
