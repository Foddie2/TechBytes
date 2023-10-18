<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        
          <div class="max-w-xl mb-6">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Mouthwatering taste,<span class="inline-block text-pink-700"> exceptional </span> service.
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              Whether it is a birthday, a wedding, or any other special event, “A party without a cake is just a meeting!”
              Being such an important part of a special event, the cake must be nothing but the best.
            </p>
          </div>
          <div>
            <NuxtLink to="/products" aria-label=""
              class="button arrow inline-flex text-pink-700 items-center font-semibold text-base md:text-lg hover:text-gray-700">
              Our Products
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <img class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 transition duration-300 transform hover:scale-105 group hover:shadow-xl"
              src="https://images.pexels.com/photos/1432676/pexels-photo-1432676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" />
            <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 transition duration-300 transform hover:scale-105 group hover:shadow-xl"
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" />
          </div>
          <div class="px-3">
            <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 transition duration-300 transform hover:scale-105 group hover:shadow-xl"
              src="https://images.pexels.com/photos/3825580/pexels-photo-3825580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  
  
  .arrow {
   
  
    &::after {
        display: inline-block;
        padding-left: 8px;
        content: "\0279E"; // arrow right unicode
        -webkit-transition: transform 0.3s ease-out;
        -moz-transition: transform 0.3s ease-out;
        -ms-transition: transform 0.3s ease-out;
        -o-transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
    }
  
    &:hover {
        &::after {
            -webkit-transform: translateX(4px);
            -moz-transform: translateX(4px);
            -ms-transform: translateX(4px);
            -o-transform: translateX(4px);
            transform: translateX(4px);
        }
    }
  }
  
  
  </style>