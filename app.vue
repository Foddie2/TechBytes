<template>
  <div>   
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator /> <!-- here -->
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>   

<script setup lang="ts">
const config = useRuntimeConfig().public;
async function handleSubmit() {
  console.log(config.BASE_URL);
}

const routes = [
    {
        path: "/",
        name: "home", // or any name you want
        component: [Navbar, Hero, About, HomeService, AboutHome,ProcessFlow, ServiceHero, HomeBackground, Testimonials, FAQ, Contact, Footer] //You need to crate and import this component
    },
    {
        path: "/test",
        name: "test",
        component : [],
    },


</script>
