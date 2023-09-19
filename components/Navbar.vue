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
          <svg width="40px" height="40px" viewBox="0 0 32 32" id="OBJECT" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><component :is="'style'">.cls-1 {fill:#78f2b3;}</component></defs><title></title><path d="M28,10H10a3,3,0,0,0-3,3V23a3,3,0,0,0,3,3H20.32l1.38,3.44a2.48,2.48,0,0,0,4.6,0L27.68,26H28a3,3,0,0,0,3-3V13A3,3,0,0,0,28,10Z"></path><path class="cls-1" d="M22,1H4A3,3,0,0,0,1,4V14a3,3,0,0,0,3,3h.32L5.7,20.44a2.48,2.48,0,0,0,4.6,0L11.68,17H22a3,3,0,0,0,3-3V4A3,3,0,0,0,22,1Z"></path><path d="M17.07,7.49,12.44,5.18a1.66,1.66,0,0,0-1.64.07A1.68,1.68,0,0,0,10,6.68v4.64a1.68,1.68,0,0,0,.8,1.43,1.66,1.66,0,0,0,.88.25,1.7,1.7,0,0,0,.76-.18l4.63-2.31a1.69,1.69,0,0,0,0-3Z"></path><path class="cls-1" d="M16,21h-.5a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2Z"></path><path class="cls-1" d="M20,21h-.5a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z"></path><path class="cls-1" d="M24,21h-.5a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z"></path></g></svg>


          <span class="logo text-xl font-bold tracking-wide text-stone-800"
            >TechBytes</span
          >
          <br/>
          <!-- <span class="text-gray-500 text-lg ml-2"> today </span> -->
        </a>

        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <NuxtLink
              to="/our-story"
              class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
            >
              Our Story
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/pc-world"
              class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
            >
              PC world
            </NuxtLink>
          </li>
        
        <!--   <li>
            <NuxtLink
              to="/Blog"
              class="font-medium tracking-wide text-gray-500 hover:text-green-500 uppercase nav-link"
              >Blog
            </NuxtLink>
          </li> -->
          <li class="relative parent font-medium tracking-wide hover:text-green-500 uppercase ">services
            <a href="#" class="flex justify-between md:inline-flex p-2 items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </a>
                  <ul class="child bg-opacity-90 transition duration-300 md:absolute top-full right-0 md:w-72 bg-white md:shadow-lg md:rounded-b ">
                    <li> 
                      <NuxtLink to="/services/consultancy">
                        <a href="" class="flex px-4 py-3 hover:bg-green-50">
                          Consultancy
                        </a>
                      </NuxtLink>
                    </li>
                    <li> 
                      <NuxtLink to="/services/software-development">
                        <a href="" class="flex px-4 py-3 hover:bg-green-50">
                          Software Development
                        </a>
                      </NuxtLink>
                    </li>
                    <li> 
                      <NuxtLink to="/services/technical&IT_support">
                        <a href="" class="flex px-4 py-3 hover:bg-green-50">
                          Technical & IT Support
                        </a>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/services/graphic_design">
                        <a href="" class="flex px-4 py-3 hover:bg-green-50">
                          Graphic Design
                        </a>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/services/web_design&development">
                        <a href="" class="flex px-4 py-3 hover:bg-green-50">
                          Web Design & Development
                        </a>
                      </NuxtLink>
                    </li>
                </ul>
          </li>
          <li>
            <NuxtLink
              to="/how-to"
              class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
            >
              How To
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/portfolio"
              class="font-medium tracking-wide text-gray-500 hover:text-green-500 uppercase nav-link"
              >Portfolio
            </NuxtLink>
          </li>
          <div class="flex items-center space-x-4">
       
          <!--   <a
              href="tel:+254711974716"
              class="inline-flex items-center uppercase font-bold bg-green-500 hover:bg-white hover:text-green-500 justify-center h-10 px-6 mr-6 tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid"
            >
              Get support
            </a> -->
            <NuxtLink to="/contact">
            <a href="tel:+254711974716"
              class="px-5 py-2.5 relative rounded group font-medium text-white uppercase inline-block">
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-green-600 to-teal-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-green-400 to-teal-400"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-green-600 to-teal-500"></span>
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-600 from-teal-500"></span>
              <span class="relative">Get support</span>
              </a>
            </NuxtLink>
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
                    <svg width="40px" height="40px" viewBox="0 0 32 32" id="OBJECT" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><component :is="'style'">.cls-1 {fill:#78f2b3;}</component></defs><title></title><path d="M28,10H10a3,3,0,0,0-3,3V23a3,3,0,0,0,3,3H20.32l1.38,3.44a2.48,2.48,0,0,0,4.6,0L27.68,26H28a3,3,0,0,0,3-3V13A3,3,0,0,0,28,10Z"></path><path class="cls-1" d="M22,1H4A3,3,0,0,0,1,4V14a3,3,0,0,0,3,3h.32L5.7,20.44a2.48,2.48,0,0,0,4.6,0L11.68,17H22a3,3,0,0,0,3-3V4A3,3,0,0,0,22,1Z"></path><path d="M17.07,7.49,12.44,5.18a1.66,1.66,0,0,0-1.64.07A1.68,1.68,0,0,0,10,6.68v4.64a1.68,1.68,0,0,0,.8,1.43,1.66,1.66,0,0,0,.88.25,1.7,1.7,0,0,0,.76-.18l4.63-2.31a1.69,1.69,0,0,0,0-3Z"></path><path class="cls-1" d="M16,21h-.5a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2Z"></path><path class="cls-1" d="M20,21h-.5a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z"></path><path class="cls-1" d="M24,21h-.5a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z"></path></g></svg>

                    <span class="logo ml-2 text-xl font-bold tracking-wide text-stone-800"
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
                      to="/our-story"
                      class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
                    >
                      Our Story
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/pc-world"
                      class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
                      >PC World
                    </NuxtLink>
                  </li>
                           
                 <!--  <li>
                    <NuxtLink
                      to="/blog"
                      class="font-medium tracking-wide text-gray-500 hover:text-green-500 uppercase nav-link"
                      >Blog
                    </NuxtLink>
                  </li> -->
                  <li class="relative parent font-medium tracking-wide hover:text-green-500 uppercase ">services
                    <a href="#" class="flex justify-between md:inline-flex p-2 items-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                        </a>
                          <ul class="child transition duration-300 md:absolute top-full right-0 md:w-52 bg-white md:shadow-lg md:rounded-b ">
                            <li> 
                              <NuxtLink to="/services/consultancy">
                                <a href="" class="flex px-4 py-3 hover:bg-green-50">
                                  Consultancy
                                </a>
                              </NuxtLink>
                            </li>
                            <li> 
                              <NuxtLink to="/services/software-development">
                                <a href="" class="flex px-4 py-3 hover:bg-green-50">
                                  Software Development
                                </a>
                              </NuxtLink>
                            </li>
                            <li> 
                              <NuxtLink to="/services/technical&IT_support">
                                <a href="" class="flex px-4 py-3 hover:bg-green-50">
                                  Technical & IT Support
                                </a>
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/services/graphic_design">
                                <a href="" class="flex px-4 py-3 hover:bg-green-50">
                                  Graphic Design
                                </a>
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/services/web_design&development">
                                <a href="" class="flex px-4 py-3 hover:bg-green-50">
                                  Web Design & Development
                                </a>
                              </NuxtLink>
                            </li>
                        </ul>
                  </li>
                  <li>
                    <NuxtLink
                      to="/how-to"
                      class="font-medium tracking-wide hover:text-green-500 uppercase nav-link"
                      >How To
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/portfolio"
                      class="font-medium tracking-wide text-gray-500 hover:text-green-500 uppercase nav-link"
                      >Portfolio
                    </NuxtLink>
                  </li>
                  <li>
                    <div class="flex items-center space-x-4">
                  <!--     <a
                        href="tel:+254711974716"
                        class="inline-flex items-center mt-7 uppercase font-bold bg-green-500 hover:bg-white hover:text-green-500 justify-center h-12 px-6 mr-6 tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid"
                      >
                        Get support
                      </a> -->
                      <NuxtLink to="/contact">
                      <a href="tel:+254711974716"
                      class="px-5 py-2.5 relative rounded group font-medium text-white uppercase inline-block">
                      <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-green-600 to-teal-500"></span>
                      <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-green-400 to-teal-400"></span>
                      <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-green-600 to-teal-500"></span>
                      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-600 from-teal-500"></span>
                      <span class="relative">Get support</span>
                      </a>
                      </NuxtLink>
                  
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
  background-image: linear-gradient(to right, #78f2b3, #03bdae 50%, #000 50%);
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
  background: #78f2b3;
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
