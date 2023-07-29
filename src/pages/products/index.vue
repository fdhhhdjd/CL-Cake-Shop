<script setup>
//* HELPER
import { useDispatch, useSelector } from '../../helpers';

// COMPONENTS
import CardProductsVue from '../../components/CardProduct/CardProducts.vue';

//* COMPONENTS
import LoadingVue from '../../components/Loading/index.vue';

//* PROVIDER
import { getAllProductInitial } from '../../providers/redux/product/product_thunk';

const dispatch = useDispatch();

// Get all products
dispatch(getAllProductInitial());

const product = useSelector((state) => state.products);
</script>

<template>
  <!-- Loading -->
  <LoadingVue v-if="product.loading" />

  <!-- List Product -->
  <CardProductsVue v-else />
</template>
