<script setup lang="ts">
const showFull = ref(false);
const turnFull = () => {
  showFull.value = !showFull.value;
};
</script>

<template>
  <div v-if="showFull" class="navbarFull" @click="turnFull">
    <ul>
      <NuxtLink to="/"><li>Home</li></NuxtLink>
      <NuxtLink to="/leaderboard"><li>Leaderboard</li></NuxtLink>
      <NuxtLink to="/about"><li>About</li></NuxtLink>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div v-else ref="myDiv" class="navbarCon" @click="turnFull">
    <h2>>>></h2>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/navbar.css";
</style>
