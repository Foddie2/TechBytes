<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        
          <div class="max-w-xl mb-6" data-aos="fade-up" data-aos-delay="300">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl sm:leading-none">
              Unleashing the Power of  <span class="inline-block text-blue-700"> Technology </span> for Your Business
            </h2>
            <p class="text-base text-stone-700 md:text-lg" data-aos="fade-up" data-aos-delay="300">
              Whether it is a birthday, a wedding, or any other special event, “A party without a cake is just a meeting!”
              Being such an important part of a special event, the cake must be nothing but the best.
            </p>
          </div>
          <div>
            <NuxtLink to="/services/consultancy" aria-label=""
              class="button arrow inline-flex text-blue-700 items-center font-semibold text-base md:text-lg hover:text-stone-700">
              Our Services
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <img class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 transition duration-300 transform hover:scale-105 group hover:shadow-xl"
              data-aos="zoom-in" data-aos-delay="500"
              src="https://images.pexels.com/photos/1432676/pexels-photo-1432676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" />
            <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 transition duration-300 transform hover:scale-105 group hover:shadow-xl"
              data-aos="zoom-in" data-aos-delay="500"
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" />
          </div>
          <div class="px-3">
            <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 transition duration-300 transform hover:scale-105 group hover:shadow-xl"
              data-aos="zoom-in" data-aos-delay="500"
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