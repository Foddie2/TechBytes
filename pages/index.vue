<template>
    <div>
        <Navbar />
        <Hero/>
        <About/> 
        <HomeService/>
        <AboutHome/>

        <ProcessFlow/>
        <ServiceHero/>
        <HomeBackground/>
        <Testimonials/>
        <Contact/>   
        <Footer/>

    </div>
</template>

<script>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Testimonials from '~/components/Testimonials.vue';



// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped></style>