<template>
<div>
  <Navbar />
  <Login />
  <main>
    <slot />
  </main>
</div>
</template>

<script setup>
import '../style.css';
</script>
