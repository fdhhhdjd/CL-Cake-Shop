<script setup>
//* LIBRARY
import { defineProps } from 'vue';

// Take props for page
const props = defineProps(['noteItem']);
</script>

<template>
  <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
    <h3 class="text-xl font-semibold leading-5 text-gray-800">
Note
</h3>
    <div class="flex w-full space-y-4 flex-col border-gray-200 border-b pb-4">
      <p>
        {{ props.noteItem.note }}
      </p>
    </div>
  </div>
</template>
