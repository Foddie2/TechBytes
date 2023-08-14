<template>
    <!-- For translucent feel //bg-opacity-60  -->
    <section class="bg-white sticky top-0 z-20 backdrop-filter blur-backdrop-filter">  
      <div class="bg-opacity-60 px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a href="/" class="inline-flex items-center">
            <svg fill="#000000" height="40px" width="40px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#00dc82" stroke-width="3.2"> <g> <path d="M4,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C5,13.4,4.6,13,4,13z"></path> <path d="M8,11c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1s1-0.4,1-1v-8C9,11.4,8.6,11,8,11z"></path> <path d="M12,6c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V7C13,6.4,12.6,6,12,6z"></path> <path d="M16,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C17,13.4,16.6,13,16,13z"></path> <path d="M20,9c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1s1-0.4,1-1V10C21,9.4,20.6,9,20,9z"></path> <path d="M24,6c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V7C25,6.4,24.6,6,24,6z"></path> <path d="M28,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C29,13.4,28.6,13,28,13z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M4,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C5,13.4,4.6,13,4,13z"></path> <path d="M8,11c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1s1-0.4,1-1v-8C9,11.4,8.6,11,8,11z"></path> <path d="M12,6c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V7C13,6.4,12.6,6,12,6z"></path> <path d="M16,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C17,13.4,16.6,13,16,13z"></path> <path d="M20,9c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1s1-0.4,1-1V10C21,9.4,20.6,9,20,9z"></path> <path d="M24,6c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V7C25,6.4,24.6,6,24,6z"></path> <path d="M28,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C29,13.4,28.6,13,28,13z"></path> </g> </g></svg>            <span class="logo ml-2 text-2xl font-bold tracking-wide text-gray-500">TechBytes</span>
            <span class="text-gray-500 text-lg ml-2">
              today
            </span>
          </a>

          <ul class="items-center hidden space-x-8 lg:flex ">
            <li>
              <NuxtLink to="/about" class="font-medium tracking-wide text-gray-500 hover:text-purple-500 nav-link">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products" class="font-medium tracking-wide text-gray-500 hover:text-green-500 nav-link">
                Products
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="font-medium tracking-wide text-gray-500 hover:text-green-500 nav-link">
                Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="font-medium tracking-wide text-gray-500 hover:text-green-500 nav-link">
                Contact
              </NuxtLink>
            </li>
            <div class="flex items-center space-x-4">
              <a href="https://www.tiktok.com/@hellenlynahatitwa?_t=8dsAGjyA5wM&_r=1" class="text-green-500 hover:text-gray-500">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z">
                  </path>
                </svg>
              </a>
              <a href="https://instagram.com/sweetspot.cakes.and.treats?igshid=ZDdkNTZiNTM="
                class="text-green-500 hover:text-gray-500">
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z">
                  </path>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100041048240843&mibextid=ZbWKwL"
                class="text-green-500 hover:text-gray-500">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
                  </path>
                </svg>
              </a>
              <a href="tel:+254711974716"
              class="inline-flex items-center uppercase font-bold bg-green-500 hover:bg-white hover:text-green-500 justify-center h-10 px-6 mr-6  tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid ">
              Call Us
            </a>
            </div>
          </ul>
          <div class="lg:hidden">
            <button aria-label="Open Menu" title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-green-70 focus:bg-green-70"
              @click="isMenuOpen = true">
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full ">
              <div class="p-5 bg-white border rounded shadow-sm  ">
                <div class="flex items-center justify-between mb-4">
                  <div>
                 <!--    <a href="/" class="inline-flex items-center">
                      <svg height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 503.322 503.322" xml:space="preserve"
                        fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <path style="fill:#FAC176;"
                                d="M138.847,164.881c-4.79,0-8.678-3.879-8.678-8.678V95.458c0-4.799,3.888-8.678,8.678-8.678 c4.79,0,8.678,3.879,8.678,8.678v60.746C147.525,161.002,143.638,164.881,138.847,164.881">
                              </path>
                              <path style="fill:#FAC176;"
                                d="M251.661,164.881c-4.79,0-8.678-3.879-8.678-8.678V95.458c0-4.799,3.888-8.678,8.678-8.678 s8.678,3.879,8.678,8.678v60.746C260.339,161.002,256.451,164.881,251.661,164.881">
                              </path>
                              <path style="fill:#FAC176;"
                                d="M364.475,164.881c-4.79,0-8.678-3.879-8.678-8.678V95.458c0-4.799,3.888-8.678,8.678-8.678 c4.79,0,8.678,3.879,8.678,8.678v60.746C373.153,161.002,369.265,164.881,364.475,164.881">
                              </path>
                            </g>
                            <path style="fill:#C36866;"
                              d="M407.864,373.153c34.833,0,26.034-34.712,69.424-34.712c9.546,0,17.356-7.81,17.356-17.356v-17.391 c0-9.563-7.758-17.321-17.33-17.321h-0.026H26.008c-9.572,0-17.33,7.758-17.33,17.321v17.391c0,9.546,7.81,17.356,17.356,17.356 H43.39c21.33,0,52.068,15.933,52.068,34.712v8.678c0,8.652,8.704,17.356,17.356,17.356c8.678,0,17.356-8.678,17.356-17.356v-8.678 c0-25.201,17.356-34.712,43.39-34.712c43.39,0,43.268,34.712,78.102,34.712s34.712-34.712,78.102-34.712 S373.04,373.153,407.864,373.153">
                            </path>
                            <path style="fill:#EEBDA2;"
                              d="M407.869,373.153L407.869,373.153L407.869,373.153L407.869,373.153 c-34.833,0-34.712-34.712-78.102-34.712s-43.277,34.712-78.102,34.712c-34.833,0-34.712-34.712-78.102-34.712 c-26.034,0-43.39,9.511-43.39,34.712v8.678c0,8.678-8.678,17.356-17.356,17.356c-8.661,0-17.356-8.704-17.356-17.356v-8.678 c0-18.779-30.737-34.712-52.068-34.712v86.78h416.542v-84.254C435.708,348.889,437.027,373.153,407.869,373.153">
                            </path>
                            <path style="fill:#BDC3C7;"
                              d="M485.966,477.288H17.356C7.775,477.288,0,469.513,0,459.932V425.22h503.322v34.712 C503.322,469.513,495.547,477.288,485.966,477.288">
                            </path>
                            <path style="fill:#C36866;"
                              d="M416.542,208.271L416.542,208.271c9.58,0,17.356-7.775,17.356-17.356v-17.356 c0-9.58-7.775-17.356-17.356-17.356H86.78c-9.58,0-17.356,7.775-17.356,17.356v17.356c0,9.58,7.775,17.356,17.356,17.356 c30.989,0,27.188,34.712,52.068,34.712c24.88,0,21.079-34.712,52.068-34.712s35.866,34.712,60.746,34.712 s29.757-34.712,60.746-34.712c24.88,0,21.079,34.712,52.068,34.712S391.663,208.271,416.542,208.271">
                            </path>
                            <path style="fill:#EEBDA2;"
                              d="M364.475,242.983c-30.989,0-27.188-34.712-52.068-34.712c-30.989,0-35.866,34.712-60.746,34.712 s-29.757-34.712-60.746-34.712s-27.188,34.712-52.068,34.712c-18.814,0-21.252-19.829-34.712-29.505v72.895h295.051v-69.441 C390.465,227.224,385.38,242.983,364.475,242.983">
                            </path>
                            <g>
                              <path style="fill:#F29C1F;"
                                d="M138.847,26.034l-18.927,34.712c-7.532,14.206,1.076,32.942,16.505,34.582 c0.798,0.087,1.605,0.13,2.421,0.13c0.816,0,1.623-0.043,2.421-0.13c15.429-1.64,24.038-20.376,16.505-34.582L138.847,26.034z">
                              </path>
                              <path style="fill:#F29C1F;"
                                d="M251.661,26.034l-18.927,34.712c-7.532,14.206,1.076,32.942,16.505,34.582 c0.798,0.087,1.605,0.13,2.421,0.13c0.816,0,1.623-0.043,2.421-0.13c15.429-1.64,24.038-20.376,16.506-34.582L251.661,26.034z">
                              </path>
                              <path style="fill:#F29C1F;"
                                d="M364.475,26.034l-18.927,34.712c-7.532,14.206,1.076,32.942,16.506,34.582 c0.798,0.087,1.605,0.13,2.421,0.13s1.623-0.043,2.421-0.13c15.429-1.64,24.038-20.376,16.505-34.582L364.475,26.034z">
                              </path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span class="logo ml-2 text-4xl font-bold tracking-wide text-gray-500">Sweets'Pot</span>
                      <span class="text-gray-500 text-xl ml-2">
                        cakes
                      </span>
                    </a> -->
  
                    <a href="/" class="inline-flex items-center">
                        <svg fill="#000000" height="40px" width="40px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#00dc82" stroke-width="3.2"> <g> <path d="M4,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C5,13.4,4.6,13,4,13z"></path> <path d="M8,11c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1s1-0.4,1-1v-8C9,11.4,8.6,11,8,11z"></path> <path d="M12,6c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V7C13,6.4,12.6,6,12,6z"></path> <path d="M16,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C17,13.4,16.6,13,16,13z"></path> <path d="M20,9c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1s1-0.4,1-1V10C21,9.4,20.6,9,20,9z"></path> <path d="M24,6c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V7C25,6.4,24.6,6,24,6z"></path> <path d="M28,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C29,13.4,28.6,13,28,13z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M4,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C5,13.4,4.6,13,4,13z"></path> <path d="M8,11c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1s1-0.4,1-1v-8C9,11.4,8.6,11,8,11z"></path> <path d="M12,6c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V7C13,6.4,12.6,6,12,6z"></path> <path d="M16,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C17,13.4,16.6,13,16,13z"></path> <path d="M20,9c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1s1-0.4,1-1V10C21,9.4,20.6,9,20,9z"></path> <path d="M24,6c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V7C25,6.4,24.6,6,24,6z"></path> <path d="M28,13c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C29,13.4,28.6,13,28,13z"></path> </g> </g></svg>            <span class="logo ml-2 text-2xl font-bold tracking-wide text-gray-500">TechBytes</span>
                        <span class="text-gray-500 text-lg ml-2">
                          today
                        </span>
                      </a>
                  </div>
                  <div>
                    <button aria-label="Close Menu" title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      @click="isMenuOpen = false">
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <NuxtLink to="/about" class="font-medium tracking-wide text-gray-500 hover:text-green-500 nav-link">
                        About
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products"
                        class="font-medium tracking-wide text-gray-500 hover:text-green-500 nav-link">Products
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/services"
                        class="font-medium tracking-wide text-gray-500 hover:text-green-500 nav-link">Services
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/contact"
                        class="font-medium tracking-wide text-gray-500 hover:text-green-500 nav-link">Contact
                      </NuxtLink>
                    </li>
                    <li>
                      <div class="flex items-center space-x-4">
                        <a href="tel:+254711974716"
                        class="inline-flex items-center mt-7 uppercase font-bold bg-green-500 hover:bg-white hover:text-green-500 justify-center h-12 px-6 mr-6  tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid ">
                        Call Us
                      </a>
                        <a href="/" class="text-green-500 hover:text-gray-500">
                          <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                            <path
                              d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z">
                            </path>
                          </svg>
                        </a>
                        <a href="https://instagram.com/sweetspot.cakes.and.treats?igshid=ZDdkNTZiNTM="
                          class="text-green-500 hover:text-gray-500">
                          <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                            <circle cx="15" cy="15" r="4"></circle>
                            <path
                              d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z">
                            </path>
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100041048240843&mibextid=ZbWKwL"
                          class="text-green-500 hover:text-gray-500">
                          <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                            <path
                              d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
                            </path>
                          </svg>
                        </a>
                      </div>
                      
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
    
  <script>
  
  
  
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
  
  
  };
  </script>
    
  
  <style  scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  .logo {
    font-family: 'Press Start 2P', cursive;
}
  
  .backdrop-filter {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  
  .blur-backdrop-filter {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  
  .nav-link {
    background-image: linear-gradient(to right, #00dc82, #00dc82 50%, #000 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }
  
  .nav-link:before {
    content: '';
    background: #00dc82;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
  
  .nav-link:hover {
    background-position: 0;
  }
  
  .nav-link:hover::before {
    width: 100%;
  }
  </style>  
  
  
  