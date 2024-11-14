<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  
  function increment() {
    count.value++;
  }
  </script>
  
  <style scoped>
  p {
    font-size: 1.2em;
  }
  button {
    font-size: 1em;
    padding: 0.5em 1em;
  }
  </style>
  