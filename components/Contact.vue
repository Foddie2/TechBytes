<template>
  <section class="mb-32 text-gray-800">
    <div class=" py-12 md:px-12">
      <div
        class=" mx-auto px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div class="grid lg:grid-cols-2 items-center">
          <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
              style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)">
              <h2 class="text-3xl font-bold mb-4">Contact us</h2>
              <div class="space-y-4 py-4">
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6 text-base">
                    <path fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span>Riruta Area, Ndwaru Road</span>
                </p>
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6 text-base">
                    <path fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span>P.O BOX 21200-00100,</span>
                </p>
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6 text-base">
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                    </path>
                  </svg>
                  <span> +254729830432 / +254740261022</span>
                </p>
              </div>
              <form>
                <div class="form-group mb-4">
                  <input type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-700 focus:outline-none"
                    id="exampleInput7" placeholder="Name" />
                </div>
                <div class="form-group mb-4">
                  <input type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-700 focus:outline-none"
                    id="exampleInput8" placeholder="Email address" />
                </div>
                <div class="form-group mb-4">
                  <textarea
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-700 focus:outline-none"
                    id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                </div>
                <button type="submit"
                  class="inline-flex items-center mt-7 uppercase font-bold bg-green-500 hover:bg-white hover:text-green-500 justify-center h-12 px-6 mr-6  tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid ">
                  Contact us
                </button>
              <!--   <a href="tel:+254729830432"
                  class="inline-flex items-center mt-7 uppercase font-bold bg-pink-700 hover:bg-white hover:text-pink-700 justify-center h-12 px-6 mr-6  tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid ">
                  Call Us
                </a> -->
              </form>
            </div>
          </div>
          <div class="md:mb-12 lg:mb-0">
            <div class="map-container relative shadow-lg rounded-lg sm-absolute">
              <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=maggies%20nest+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                href="https://www.maps.ie/distance-area-calculator.html">area maps</a>
              </iframe>
            </div>
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

<style scoped>
.map-container {
height: 500px;
z-index: -1;
}

</style>