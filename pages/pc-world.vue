<template>
    <div>
        <Navbar/>
        <AboutDescription/>
        <AboutHero/>
        <Services2/>
        <FAQ/>
        <FaqAbout/>
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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>