<template>
  <div class="h-screen">
    <div class="flex justify-center items-center h-full">
      <span class="loader"></span>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: #263038 !important;
  opacity: 0.5;
  z-index: 999;
}
</style>
