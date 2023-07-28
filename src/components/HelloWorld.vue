<script setup>
import { useDispatch } from '../helpers'
import { getAllProductInitial } from '../providers/redux/product/product_thunk'

defineProps({
  msg: String,
})

const dispatch = useDispatch()

dispatch(getAllProductInitial())


</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
