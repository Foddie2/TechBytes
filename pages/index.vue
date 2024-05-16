<template>
    <div>
        <Navbar />
        <Hero/>
        <About/> 
        <HomeService/>
        <!-- <Services2/> -->
        <AboutHome/>
        <ProcessFlow/>
        <Services2/>
                <!-- <ServiceHero/> -->
        <HomeBackground/>
        <Testimonials/>
        <!-- <FAQ/> -->
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