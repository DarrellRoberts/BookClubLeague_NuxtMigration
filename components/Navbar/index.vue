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
  <div v-else ref="myDiv" class="navbarCon"  @click="turnFull" >
    <h2>>>></h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showFull = ref(false);
const turnFull = () => {
    showFull.value = !showFull.value;
};
</script>

<style>
.navbarFull ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: var(--mainFont);
    letter-spacing: 0.25rem;
}
.navbarFull a {
    text-decoration: none;
}
.navbarFull li {
    color: var(--mainTextColor);
    list-style: none;
    font-size: clamp(1rem, 2.5vw, 2.5rem);
    margin-left: 2rem;
    animation: fadeIn 0.5s cubic-bezier(0.9, 0.82, 0.165, 1) 0s 1;
}
.navbarCon {
    display: flex;
    position: absolute;
    background-color: black;
    height: 100%;
    width: 3%;
    animation: swipeIn 0.5s cubic-bezier(0.9, 0.82, 0.165, 1) 0s 1;
    cursor: pointer;
}
.navbarFull {
    display: flex;
    position: absolute;
    background-color: black;
    height: 100%;
    width: 50%;
    animation: swipeOut 0.5s cubic-bezier(0.9, 0.82, 0.165, 1) 0s 1;
    cursor: pointer;
}
@keyframes swipeOut {
    0%  {width: 3%};
    100%  {width: 50%};
}
@keyframes swipeIn {
    0%  {width: 50%};
    100%  {width: 3%};
}
@keyframes fadeIn {
    0% {opacity: 0};
    100% {opacity: 1};
}
</style>
