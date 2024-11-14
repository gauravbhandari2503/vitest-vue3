<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
        <p v-if="emailError">{{ emailError }}</p>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <p v-if="passwordError">{{ passwordError }}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const emailError = ref('');
  const passwordError = ref('');
  
  function handleSubmit() {
    emailError.value = '';
    passwordError.value = '';
  
    if (!email.value.includes('@')) {
      emailError.value = 'Invalid email format';
    }
    if (password.value.length < 6) {
      passwordError.value = 'Password must be at least 6 characters';
    }
  
    if (!emailError.value && !passwordError.value) {
      alert('Form submitted successfully!');
    }
  }
  </script>
  
  <style scoped>
  p {
    color: red;
    font-size: 0.9em;
  }
  </style>
  