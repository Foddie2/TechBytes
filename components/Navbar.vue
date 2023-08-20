<template>
  <!-- For translucent feel //bg-opacity-60  -->
  <section
    class="bg-white sticky bg-opacity-60 top-0 z-20 backdrop-filter blur-backdrop-filter"
  >
    <div
      class="bg-opacity-60 px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <a href="/" class="inline-flex items-center">

            <svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#50d370" stroke-width="2.4"><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 0 1-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 0 1-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 0 1 .038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"></path></g><g id="SVGRepo_iconCarrier"><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 0 1-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 0 1-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 0 1 .038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"></path></g></svg>

          <span class="logo text-xl font-bold tracking-wide text-gray-900"
            >TechBytes</span
          >
          <!-- <span class="text-gray-500 text-lg ml-2"> today </span> -->
        </a>

        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <NuxtLink
              to="/about"
              class="font-medium tracking-wide hover:text-purple-500 uppercase nav-link"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/products"
              class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
            >
              Products
            </NuxtLink>
          </li>
        
        <!--   <li>
            <NuxtLink
              to="/Blog"
              class="font-medium tracking-wide text-gray-500 hover:text-green-500 uppercase nav-link"
              >Blog
            </NuxtLink>
          </li> -->
          <li class="relative parent font-medium tracking-wide hover:text-green-500 uppercase "> services
            <a href="#" class="flex justify-between md:inline-flex p-2 items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </a>
                  <ul class="child transition duration-300 md:absolute top-full right-0 md:w-72 bg-white md:shadow-lg md:rounded-b ">
                    <li> 
                      <NuxtLink to="/services/consultancy">
                        <a href="/services/consultancy" class="flex px-4 py-3 hover:bg-green-50">
                          Consultancy
                        </a>
                      </NuxtLink>
                    </li>
                    <li> 
                      <NuxtLink to="/services/system-development">
                        <a href="/services/system-development" class="flex px-4 py-3 hover:bg-green-50">
                          System Development
                        </a>
                      </NuxtLink>
                    </li>
                    <li> 
                      <NuxtLink to="/services/technical-IT-support">
                        <a href="/services/technical-IT-support" class="flex px-4 py-3 hover:bg-green-50">
                          Technical & IT Support
                        </a>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/services/warehouse-design">
                        <a href="/services/warehouse-design" class="flex px-4 py-3 hover:bg-green-50">
                          Warehouse Design
                        </a>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/services/web-design-development">
                        <a href="/services/web-design-development" class="flex px-4 py-3 hover:bg-green-50">
                          Web Design & Dev
                        </a>
                      </NuxtLink>
                    </li>
                </ul>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
            >
              How To
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/Blog"
              class="font-medium tracking-wide text-gray-500 hover:text-green-500 uppercase nav-link"
              >Portfolio
            </NuxtLink>
          </li>
          <div class="flex items-center space-x-4">
            <!-- <a href="https://www.tiktok.com/@hellenlynahatitwa?_t=8dsAGjyA5wM&_r=1" class="text-green-500 hover:text-gray-500">
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
              </a> -->
            <a
              href="tel:+254711974716"
              class="inline-flex items-center uppercase font-bold bg-green-500 hover:bg-white hover:text-green-500 justify-center h-10 px-6 mr-6 tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid"
            >
              Get started
            </a>
          </div>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-green-70 focus:bg-green-70"
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a href="/" class="inline-flex items-center">
                    <svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#50d370" stroke-width="2.4"><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 0 1-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 0 1-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 0 1 .038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"></path></g><g id="SVGRepo_iconCarrier"><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 0 1-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 0 1-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 0 1 .038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"></path></g></svg>

                    <span class="logo ml-2 text-xl font-bold tracking-wide text-gray-900"
                      >TechBytes</span
                    >
                    <!-- <span class="text-gray-500 text-lg ml-2"> today </span> -->
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-500" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <NuxtLink
                      to="/about"
                      class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
                    >
                      About
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/products"
                      class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
                      >Products
                    </NuxtLink>
                  </li>
                           
                 <!--  <li>
                    <NuxtLink
                      to="/blog"
                      class="font-medium tracking-wide text-gray-500 hover:text-green-500 uppercase nav-link"
                      >Blog
                    </NuxtLink>
                  </li> -->
                  <li class="relative parent font-medium tracking-wide hover:text-green-500 uppercase "> services
                    <a href="#" class="flex justify-between md:inline-flex p-2 items-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                        </a>
                          <ul class="child transition duration-300 md:absolute top-full right-0 md:w-52 bg-white md:shadow-lg md:rounded-b ">
                            <li> 
                              <NuxtLink to="/services/consultancy">
                                <a href="/services/consultancy" class="flex px-4 py-3 hover:bg-green-50">
                                  Consultancy
                                </a>
                              </NuxtLink>
                            </li>
                            <li> 
                              <NuxtLink to="/services/system-development">
                                <a href="/services/system-development" class="flex px-4 py-3 hover:bg-green-50">
                                  System Development
                                </a>
                              </NuxtLink>
                            </li>
                            <li> 
                              <NuxtLink to="/services/technical-IT-support">
                                <a href="/services/technical-IT-support" class="flex px-4 py-3 hover:bg-green-50">
                                  Technical & IT Support
                                </a>
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/services/warehouse-design">
                                <a href="/services/warehouse-design" class="flex px-4 py-3 hover:bg-green-50">
                                  Warehouse Design
                                </a>
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/services/web-design-development">
                                <a href="/services/web-design-development" class="flex px-4 py-3 hover:bg-green-50">
                                  Web Design & Dev
                                </a>
                              </NuxtLink>
                            </li>
                        </ul>
                  </li>
                  <li>
                    <NuxtLink
                      to="/contact"
                      class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
                      >How To
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/Blog"
                      class="font-medium tracking-wide text-gray-500 hover:text-green-500 uppercase nav-link"
                      >Portfolio
                    </NuxtLink>
                  </li>
                  <li>
                    <div class="flex items-center space-x-4">
                      <a
                        href="tel:+254711974716"
                        class="inline-flex items-center mt-7 uppercase font-bold bg-green-500 hover:bg-white hover:text-green-500 justify-center h-12 px-6 mr-6 tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid"
                      >
                        Call Us
                      </a>
                      <!--  <a href="/" class="text-green-500 hover:text-gray-500">
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
                        </a> -->
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
.logo {
  font-family: "Press Start 2P", cursive;
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
  content: "";
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
@media only screen and (min-width: 768px) {
  .parent:hover .child {
    opacity: 1;
    height: auto;
    overflow: none;
    transform: translateY(0);
  }

  .child {
    position: absolute;
    z-index: 2;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: translateY(-10%);
  }
}
</style>
