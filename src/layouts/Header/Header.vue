<script setup>
//* LIBRARY
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

//* HELPERS
import { useDispatch, useSelector } from '../../helpers';

//* PROVIDER
import { deleteToCart } from '../../providers/redux/cart/cart_thunk';

//* UTILS
import { getImage } from '../../utils';

//* LAYOUT
import MenuVue from '../Menu/index.vue';

const route = useRoute();

const dispatch = useDispatch();

const storeCart = useSelector((state) => state.carts);

const storeOrders = useSelector((state) => state.orders);

console.log(storeOrders);

const isActiveMenu = ref(false);

const handleActiveMenu = () => {
  isActiveMenu.value = true;
};

const handleCloseMenu = () => {
  isActiveMenu.value = false;
};

const handleDeleteCart = (id) => {
  dispatch(deleteToCart({ productId: id }));
};

watch(
  () => route.path,
  () => {
    handleCloseMenu();
  }
);
console.log(route);
</script>

<template>
  <header class="header-section-wrapper fixed top-0 right-0 left-0 z-10">
    <div class="w-full h-[90px] bg-white quomodo-shop-middle-bar lg:block hidden shadow-md">
      <div class="container mx-auto h-full">
        <div class="relative h-full">
          <div class="flex justify-between items-center h-full">
            <!-- Logo -->
            <RouterLink to="/">
              <div class="cursor-pointer">
                <img class="w-[110px]" :src="getImage('logo/logo.png')" alt="logo" />
              </div>
            </RouterLink>
            <!-- Menu -->
            <MenuVue />

            <!-- Cart -->
            <div class="flex space-x-6 items-center">
              <div class="cart-wrapper group relative py-4">
                <div class="cart relative cursor-pointer">
                  <RouterLink to="/cart">
                    <span class="text-[25px]">
                      <i class="fa-solid fa-cart-shopping" />
                    </span>
                  </RouterLink>
                  <span
                    v-if="storeCart.cart.length > 0"
                    class="w-[25px] h-[25px] rounded-full absolute -top-3 -right-3 flex justify-center items-center text-[15px] bg-yellow-400"
                    >{{ storeCart.cart.length }}
                  </span>
                </div>
                <div
                  style="box-shadow: 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                  class="w-[300px] bg-white border-t-[3px] cart-wrapper absolute -right-[45px] top-11 z-50 hidden group-hover:block"
                >
                  <div class="w-full h-full">
                    <div class="product-items h-[310px] overflow-y-scroll">
                      <div v-if="storeCart.cart.length === 0" class="mt-16">
                        <img src="../../assets/empty/emptyHeader-removebg-preview.png" alt="" />
                      </div>
                      <!-- List Cart -->
                      <ul v-for="car in storeCart.cart" :key="car.id">
                        <li class="w-full h-full flex">
                          <div
                            class="flex space-x-[6px] justify-center items-center px-4 my-[20px]"
                          >
                            <div class="w-[65px] h-full">
                              <img
                                :src="getImage(car.image_url)"
                                alt=""
                                class="w-full h-full object-contain"
                              />
                            </div>
                            <div class="flex-1 h-full flex flex-col justify-center">
                              <RouterLink :to="`/product/${car.id}`">
                                <p
                                  class="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600"
                                >
                                  {{ car.name }}
                                </p>
                              </RouterLink>
                              <p class="price">
                                <span class="offer-price text-red font-600 text-[15px] ml-2">
                                  <b>Price:</b>
                                  ${{ car.original_price }}</span
                                >
                              </p>
                              <p class="quantity">
                                <span class="offer-price text-red font-600 text-[15px] ml-2">
                                  <b>Quantity: </b>
                                  {{ car.quantity }}</span
                                >
                              </p>
                            </div>
                            <span
                              class="mt-[20px] mr-[15px] inline-flex cursor-pointer"
                              @click="handleDeleteCart(car.id)"
                            >
                              <i class="fa-solid fa-xmark" />
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="w-full px-4 mt-[20px]">
                    <div class="h-[1px] bg-[#F0F1F3]" />
                  </div>
                  <div class="flex justify-center py-[15px]">
                    <p class="text-[13px] font-500 text-qgray">
                      Get Return within
                      <span class="text-qblack">30 days</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="cart relative cursor-pointer">
                <RouterLink to="/order">
                  <span class="text-[25px]">
                    <i class="fa-solid fa-file-invoice"></i>
                  </span>
                </RouterLink>
                <span
                  v-if="storeOrders.order.length > 0"
                  class="w-[25px] h-[25px] rounded-full absolute -top-3 -right-3 flex justify-center items-center text-[15px] bg-yellow-400"
                  >{{ storeOrders.order.length }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:hidden block w-full h-[60px] bg-white">
      <div class="w-full h-full flex justify-between items-center px-5">
        <div @click="handleActiveMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <RouterLink to="/">
          <div class="cursor-pointer">
            <img class="w-[80px]" src="../../assets/logo/logo.png" alt="logo" />
          </div>
        </RouterLink>
        <div class="flex items-center gap-4">
          <!-- Cart -->
          <div class="cart relative cursor-pointer">
            <RouterLink to="/cart">
              <span class="text-lg lg:text-[25px]">
                <i class="fa-solid fa-cart-shopping" />
              </span>
            </RouterLink>
            <span
              v-if="storeCart.cart.length > 0"
              class="w-5 h-5 lg:w-[25px] lg:h-[25px] rounded-full absolute -top-3 -right-3 flex justify-center items-center text-[15px] bg-yellow-400"
              >{{ storeCart.cart.length }}
            </span>
          </div>

          <!-- Order -->
          <div class="cart relative cursor-pointer">
            <RouterLink to="/order">
              <span class="text-lg lg:text-[25px]">
                <i class="fa-solid fa-file-invoice"></i>
              </span>
            </RouterLink>
            <span
              v-if="storeOrders.order.length > 0"
              class="w-5 h-5 lg:w-[25px] lg:h-[25px] rounded-full absolute -top-3 -right-3 flex justify-center items-center text-[15px] bg-yellow-400"
              >{{ storeOrders.order.length }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div
      class="menu-mobile w-[280px] transition-all duration-300 ease-in-out h-screen shadow-lg overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed top-0 z-50"
      :class="isActiveMenu ? 'left-0' : '-left-[285px]'"
    >
      <div class="w-full px-5 mt-5 mb-4">
        <div class="flex justify-between items-start">
          <div class="flex space-x-5 items-center">
            <img src="../../assets//logo/logo.png" alt="" class="w-8/12" />
          </div>
          <button type="button leading-none h-20" @click="handleCloseMenu">
            <span class="text-[#FE4949] text-4xl"><i class="fa-solid fa-circle-xmark"></i></span>
          </button>
        </div>
      </div>

      <div class="category-item mt-5 w-full">
        <ul class="categories-list">
          <li class="category-item">
            <RouterLink
              to="/"
              class="flex justify-between items-center px-5 h-12 bg-white hover:bg-yellow-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div class="flex items-center space-x-6">
                <i class="fa-solid fa-cake-candles"></i>
                <span class="text-lg font-400">Products</span>
              </div>
            </RouterLink>
          </li>
          <li class="category-item">
            <RouterLink
              to="/cart"
              class="flex justify-between items-center px-5 h-12 bg-white hover:bg-yellow-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div class="flex items-center space-x-6">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="text-lg font-400"> Cart </span>
              </div>
            </RouterLink>
          </li>
          <li class="category-item">
            <RouterLink
              to="/order"
              class="flex justify-between items-center px-5 h-12 bg-white hover:bg-yellow-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div class="flex items-center space-x-6">
                <i class="fa-solid fa-money-bill"></i>
                <span to="/order" class="text-lg font-400"> Order </span>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.menu-mobile .router-link-active.router-link-exact-active {
  background-color: #eab308;
}
</style>
