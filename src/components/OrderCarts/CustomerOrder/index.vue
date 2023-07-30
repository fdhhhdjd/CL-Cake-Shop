<template lang="">
  <div
    class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col"
  >
    <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
Customer
</h3>
    <div
      class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0"
    >
      <div class="flex flex-col justify-start items-start flex-shrink-0">
        <div
          class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200"
        >
          <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
          <div class="flex justify-start items-start flex-col space-y-2">
            <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
              David Kent
            </p>
            <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">
10 Previous Orders
</p>
          </div>
        </div>

        <div
          class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full"
        >
          <img
            class="dark:hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
            alt="email"
          />
          <img
            class="hidden dark:block"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
            alt="email"
          />
          <p class="cursor-pointer text-sm leading-5">
david89@gmail.com
</p>
        </div>
      </div>
      <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
        <div
          class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start"
        >
          <div
            class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8"
          >
            <p
              class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800"
            >
              Shipping Address
            </p>
            <p
              class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
            >
              180 North King Street, Northhampton MA 1060
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
