<template>
  <div>
    <Hero :heading="heading"/>
    <Dashboard />
  </div>
</template>

<script setup lang="ts">

const heading = ref('Book Club League');

</script>
