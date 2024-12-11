<script setup lang="ts">
import { useHeadingStore } from "@/store/heading";

const store = useHeadingStore();

store.changeHeading("About");
</script>

<template>
  <Hero :heading="store.heading" />
  <article>
    <p>
      The Book Club League is a place for book clubs all across the world to
      compare and compete against each other.
    </p>
    <br />
    <p>
      This project was inspired from lacking motivation in my own book club and
      realising that I needed some sort of impetus to meet my own reading
      deadlines.
    </p>
    <br />
    <p>I hope this too motivates others to get reading!</p>
  </article>
</template>

<style scoped>
@import "../../assets/stylesheets/about/about.css";
</style>
