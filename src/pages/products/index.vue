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

const storeProduct = useSelector((state) => state.products);

// If data store equal [] run action dispatch
const checkDataProductsInStore = !storeProduct.value.products.length;

if (checkDataProductsInStore) {
  dispatch(getAllProductInitial());
}
</script>

<template>
  <!-- Loading -->
  <LoadingVue v-if="storeProduct.loading" />

  <!-- List Product -->
  <CardProductsVue v-else />
</template>
