<template>
  <div class="h-full flex justify-between items-center">
    <div class="category-and-nav flex xl:space-x-7 space-x-3 items-center">
      <div class="nav">
        <ul class="nav-wrapper flex xl:space-x-10 space-x-5">
          <li class="relative">
            <RouterLink to="/" class="flex items-center text-lg font-600 cursor-pointer text-black">
              <span>Products</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/cart"
              class="flex items-center text-lg font-600 cursor-pointer text-black"
            >
              <span>Cart</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/order"
              class="flex items-center text-lg font-600 cursor-pointer text-black"
            >
              <span>Order</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  border-bottom: 3px solid #eab308;
}
</style>
