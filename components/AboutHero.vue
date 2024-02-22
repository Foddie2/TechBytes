<template>
  <section>
    <div class=" max-w-screen-2xl sm:px-6 mx-auto px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <nuxt-img
              alt=""
              src="https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div class="relative flex items-center bg-green-50">
          <span
            class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-green-50"
          ></span>
  
          <div class="p-8 sm:p-16 lg:p-24">
            <h2 class="text-2xl font-bold sm:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
            </h2>
  
            <p class="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
              esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
              architecto eius quis quibusdam fugiat dicta.
            </p>
  
            <a
              href="#"
              class="mt-8 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>