<script setup>
import { useSelector } from '../../helpers';

const resultProduct = useSelector((state) => state.products);
</script>

<template>
  <section id="products" class="container mx-auto">
    <div class="section-style-one new-products mb-[60px]">
      <div class="section-wrapper w-full">
        <div class="container-x mx-auto">
          <div class="section-title flex justify-between items-center mb-5">
            <div>
              <h1 class="sm:text-3xl text-xl font-600 text-qblacktext leading-none">
                List Products
              </h1>
            </div>
            <div>
              <a href="https://shopo-next.vercel.app/all-products">
                <div class="flex space-x-2 items-center">
                  <p class="text-base font-600 text-qblack">View More</p>
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
                  <div
                    class="product-card-one w-full h-full bg-white relative group overflow-hidden"
                    style="box-shadow: 0px 15px 64px 0px rgba(0, 0, 0, 0.05)"
                  >
                    <!-- Card Image -->
                    <div class="product-card-img w-full h-[300px]">
                      <img
                        :src="product.image_url"
                        alt=""
                        class="bg-image bg-center bg-no-repeat"
                      />
                    </div>

                    <!-- Card content -->
                    <div class="product-card-details px-[30px] pb-[30px] relative">
                      <div
                        class="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out"
                      >
                        <button type="button" class="bg-yellow-500 w-full py-2 px-4 rounded-lg">
                          <div class="flex items-center space-x-3">
                            <span> <i class="fa-solid fa-bag-shopping" /> </span
                            ><span>Add To Cart</span>
                          </div>
                        </button>
                      </div>

                      <!-- Reviews -->
                      <div class="reviews flex space-x-[1px] mb-3">
                        <span>
                          <i class="fa-solid fa-star" style="color: #ffa800" />
                        </span>
                        <span>
                          <i class="fa-solid fa-star" style="color: #ffa800" />
                        </span>
                        <span>
                          <i class="fa-solid fa-star" style="color: #ffa800" />
                        </span>
                      </div>

                      <!-- Title name Product -->
                      <a href="./page-detail.html">
                        <p
                          class="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-qyellow cursor-pointer"
                        >
                          {{ product.description }}
                        </p>
                      </a>
                      <p class="price">
                        <span
                          :class="product.discounted_price ? 'line-through' : ''"
                          class="main-price text-qgray font-600 text-[18px]"
                          >{{ product.original_price }}</span
                        ><span class="offer-price text-qred font-600 text-[18px] ml-2">{{
                          product.discounted_price ? product.discounted_price : ''
                        }}</span>
                      </p>
                    </div>
                    <div
                      class="flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out"
                    >
                      <a href="https://shopo-next.vercel.app/#">
                        <span
                          class="w-10 h-10 flex justify-center items-center bg-primarygray rounded"
                        >
                          <i class="fa-solid fa-expand" /> </span
                      ></a>

                      <a href="https://shopo-next.vercel.app/#"
                        ><span
                          class="w-10 h-10 flex justify-center items-center bg-primarygray rounded"
                        >
                          <i class="fa-regular fa-heart" /> </span
                      ></a>
                      <a href="https://shopo-next.vercel.app/#"
                        ><span
                          class="w-10 h-10 flex justify-center items-center bg-primarygray rounded"
                        >
                          <i class="fa-solid fa-arrows-rotate" /> </span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
