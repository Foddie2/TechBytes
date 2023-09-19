<template>
    <div>
        <Navbar />
        <Hero/>
        <About/> 
        <Services/>
        <Pricing/>
        <ServiceHero/>
        <Contact/>   
        <Footer/>

    </div>
</template>

<script>

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'



// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped></style>