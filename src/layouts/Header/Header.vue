<script setup>
//* HELPERS
import { useDispatch, useSelector } from '../../helpers';

//* PROVIDER
import { deleteToCart } from '../../providers/redux/cart/cart_thunk';

//* UTILS
import { getImage } from '../../utils';

//* LAYOUT
import MenuVue from '../Menu/index.vue';

const dispatch = useDispatch();

const storeCart = useSelector((state) => state.carts);

// Handle delete cart
const handleDeleteCart = (id) => {
  dispatch(deleteToCart({ productId: id }));
};
</script>

<template>
  <header class="header-section-wrapper relative">
    <div class="w-full h-[90px] bg-white comodo-shop-middle-bar lg:block hidden shadow-md">
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
                    class="w-[25px] h-[25px] rounded-full absolute -top-3 -right-3 flex justify-center items-center text-[15px] bg-yellow-400"
                    >{{ storeCart.cart.length || 0 }}
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
                                  class="title mb-2 text-[13px] font-600 text-black leading-4 line-clamp-2 hover:text-blue-600"
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
                          </div>
                          <span
                            class="mt-[20px] mr-[15px] inline-flex cursor-pointer"
                            @click="handleDeleteCart(car.id)"
                          >
                            <i class="fa-solid fa-mark" />
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div class="w-full px-4 mt-[20px]">
                      <div class="h-[1px] bg-[#F0F1F3]" />
                    </div>
                    <div class="flex justify-center py-[15px]">
                      <p class="text-[13px] font-500 text-qgray">
                        Get Return within
                        <span class="text-black">30 days</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a rel="noopener noreferrer">
                  <span>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.992 19.729C19.9004 18.043 19.438 16.4886 18.617 15.1176C17.6046 13.4237 16.2096 12.1244 14.4679 11.2475C14.0773 11.0522 13.878 10.9645 13.3878 10.7772L12.9334 10.6138L13.4954 10.1833C14.5476 9.38621 15.3408 8.08689 15.6118 6.70387C15.6955 6.28936 15.7035 5.22918 15.6317 4.78278C15.4643 3.77043 14.9582 2.70227 14.2766 1.92507C13.4356 0.976485 12.2439 0.30291 11.0084 0.079713C10.7971 0.0398565 10.1515 0 9.75289 0C9.60542 0 9.55361 0.00398565 9.53766 0.0079713H9.53368C9.49781 0.011957 9.42607 0.0239139 9.33838 0.0358709H9.32642C9.25468 0.0438422 9.17896 0.0557991 9.10323 0.0677561C8.1666 0.195297 7.01873 0.73336 6.25349 1.41092C5.27302 2.27581 4.59147 3.50339 4.38023 4.78278C4.3045 5.22918 4.31646 6.28936 4.40016 6.70387C4.67118 8.08689 5.46433 9.38621 6.51654 10.1833L7.07852 10.6138L6.62415 10.7772C6.13392 10.9645 5.93464 11.0522 5.54404 11.2475C3.80231 12.1244 2.40335 13.4237 1.39498 15.1176C0.569948 16.4926 0.107613 18.043 0.0159426 19.729L0 20H0.255082H1.1957H18.8123H19.4938H20.008L19.992 19.729ZM5.56397 4.98605C5.73934 3.92188 6.28537 2.95735 7.10642 2.25986C7.91949 1.57035 8.94779 1.19171 10 1.19171C10.2352 1.19171 10.4743 1.21164 10.7094 1.24751C13.1606 1.64607 14.8386 3.95775 14.444 6.39299C14.2686 7.45715 13.7226 8.42168 12.9016 9.11917C12.0885 9.80869 11.0602 10.1873 10.008 10.1873C9.77282 10.1873 9.53368 10.1674 9.29852 10.1315C6.84735 9.72898 5.16939 7.42128 5.56397 4.98605ZM2.54285 15.5281C3.73057 13.7146 5.31287 12.4751 7.25389 11.8414C8.17059 11.5424 9.09526 11.391 10.004 11.391C10.9127 11.391 11.8374 11.5424 12.7541 11.8414C14.6951 12.4751 16.2814 13.7146 17.4651 15.5281C18.047 16.4169 18.5134 17.6963 18.7086 18.8721H1.29932C1.49462 17.6963 1.96094 16.4169 2.54285 15.5281Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
      <div class="w-full h-full flex justify-between items-center px-5">
        <div>
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
        <div class="cursor-pointer">
          <img class="w-[80px]" src="../../assets/logo/logo.png" alt="logo" />
        </div>
        <div class="cart relative cursor-pointer">
          <RouterLink to="/cart">
            <span
              ><svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z"
                  fill="black"
                />
              </svg>
            </span>
          </RouterLink>
          <span
            class="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-yellow text-black"
            >{{ storeCart.cart.length || 0 }}</span
          >
        </div>
      </div>
    </div>

    <div
      class="nav-widget-wrapper w-full h-[60px] relative z-30 bg-yellow comodo-shop-nav-bar lg:block hidden"
    >
      <div class="container mx-auto h-full">
        <div class="w-full h-full relative" />
      </div>
    </div>
  </header>
</template>
