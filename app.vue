<template>
  <div>
    <NuxtLayout>    
    <NuxtPage/>
    </NuxtLayout>   
  </div>
</template>   

<script setup lang="ts">
const config = useRuntimeConfig().public;
async function handleSubmit() {
  console.log(config.BASE_URL);
}


</script>