<script setup>
// COMPONENTS
import CardDetail from '../../components/ProductDetail/index.vue';
</script>

<template>
  <section id="products" class="container mx-auto">
    <div>
      <div class="section-style-one new-products mb-[60px]">
        <div class="section-wrapper w-full">
          <div class="container mx-auto">
            <!-- List Products -->
            <div class="section-content">
              <CardDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
