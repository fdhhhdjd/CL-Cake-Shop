<script setup>
//* HELPER
import { useDispatch } from '../../helpers';

//* HEADER
import HeaderVue from '../../layouts/header/Header.vue';

// COMPONENTS
import CardProductsVue from '../../components/CardProduct/CardProducts.vue';

//* PROVIDER
import { getAllProductInitial } from '../../providers/redux/product/product_thunk';

const dispatch = useDispatch();

dispatch(getAllProductInitial());
</script>

<template>
  <HeaderVue />
  <CardProductsVue />
</template>
