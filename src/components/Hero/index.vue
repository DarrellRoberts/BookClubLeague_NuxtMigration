<script setup lang="ts">
defineProps({
  heading: String,
});
</script>

<template>
  <div class="heroCon">
    <h1>{{ heading }}</h1>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/hero.css";
</style>
