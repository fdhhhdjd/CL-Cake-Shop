<script setup>
// HELPERS
import { useSelector } from '../../helpers';

//* COMPONENTS
import CartProductItem from './CartProductItem.vue';

// Take data for Redux
const resultProduct = useSelector((state) => state.products);
</script>

<template>
  <section id="products" class="container mx-auto">
    <div class="section-style-one new-products mb-[60px]">
      <div class="section-wrapper w-full">
        <div class="container-x mx-auto">
          <div class="section-title flex justify-between items-center mb-5">
            <div>
              <h1 class="sm:text-3xl text-xl font-600 text-black leading-none">List Products</h1>
            </div>
            <div>
              <a href="">
                <div class="flex space-x-2 items-center">
                  <p class="text-base font-600 text-black">View More</p>
                  <span class="animate-right-dir">
                    <i class="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <!-- List Products -->
          <div class="section-content">
            <div class="products-section w-full">
              <div
                class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5"
              >
                <!-- Card Product -->
                <div
                  v-for="product in resultProduct.products"
                  :key="product.id"
                  data-aos="fade-up"
                  class="item aos-init aos-animate"
                >
                  <!-- Cart Product Item -->
                  <CartProductItem :product="product" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
