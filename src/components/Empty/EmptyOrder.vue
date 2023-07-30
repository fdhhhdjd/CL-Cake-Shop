<template>
  <div class="flex justify-center items-center w-full">
    <div>
      <div class="sm:mb-10 mb-5 transform scale-20 sm:scale-40">
        <img src="../../assets/empty/order-emptyempty.png" alt="" class="w-9/12 mx-auto" />
      </div>
      <div class="w-ful text-center">
        <h1 class="sm:text-xl text-base font-semibold text-center mb-5">
          Order empty! You haven't added any products.
        </h1>
        <RouterLink to="/">
          <span
            class="inline-flex items-center px-6 py-2 text-white bg-[#ffa800] border rounded-full hover:bg-black focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 30 30"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span class="text-sm font-medium">Back To Products</span>
          </span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
