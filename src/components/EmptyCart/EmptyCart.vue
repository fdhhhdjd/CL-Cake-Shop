<template>
  <div class="flex justify-center items-center w-full">
    <div>
      <div class="sm:mb-10 mb-5 transform scale-20 sm:scale-40">
        <img
          src="../../assets/empty/emptyHeader-removebg-preview.png"
          alt=""
          class="w-9/12 mx-auto"
        />
      </div>
      <div class="w-ful text-center">
        <h1 class="sm:text-xl text-base font-semibold text-center mb-5">
          Empty! You don Cart any Products
        </h1>
        <RouterLink to="/">
          <div class="h-[50px] flex justify-center w-full">
            <button class="bg-[#ffa800] py-2 px-4 rounded-lg">
Back to Shop
</button>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
