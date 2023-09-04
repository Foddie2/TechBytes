<template>
    <div>
        <Navbar />
        <Hero/>
        <About/> 
        <Services/>
        <Contact/>   
        <Footer/>

    </div>
</template>

<script>

useSeoMeta({
  title: 'Home',
  ogTitle: 'Home',
  description: 'This is my amazing site about all IT service and technology support.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: '../src/img/sweetspot-logo.png',
//   twitterCard: 'summary_large_image',
})

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'



// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped></style>