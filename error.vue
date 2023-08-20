<template>
    <div>
     <div class="mt-7 max-w-sm mx-auto text-center card">
         <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
         <p class="mt-7 text-6xl ">Ooops ⚠️ <span class="text-green-700">Development in progress.</span> </p>
         <p class="mt-8">  {{ error.message }}</p>
 
         <button @click="handleClearError"
             class="inline-flex items-center mt-7 uppercase font-bold bg-green-700 hover:bg-white hover:text-green-700 justify-center h-12 px-6 mr-6  tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid ">
 
             Go back Home
           </button>
 
     </div>
    </div>
 </template>
 
 <script setup>
    defineProps(['error'])
    const handleClearError = () => clearError({redirect: '/'})
    
 </script>
 
 <style  scoped>
 
 </style>