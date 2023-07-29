<script setup>
//* HELPER

import { useDispatch, useSelector } from '../../helpers';

// COMPONENTS
import CardProductsVue from '../../components/CardProduct/CardProducts.vue';

// LAYOUT
import LoadingVue from '../../layouts/Loading/index.vue';

//* PROVIDER
import { getAllProductInitial } from '../../providers/redux/product/product_thunk';

const dispatch = useDispatch();

// Get all products
dispatch(getAllProductInitial());

const product = useSelector((state) => state.products);
</script>

<template>
  <LoadingVue v-if="product.loading" />

  <CardProductsVue v-else />
</template>
