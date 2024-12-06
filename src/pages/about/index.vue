<script setup lang="ts">
import { useHeadingStore } from "@/store/heading";

const store = useHeadingStore();

store.changeHeading("About");
</script>

<template>
  <Hero :heading="store.heading" />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
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

<style>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}
article p {
  font-size: clamp(2rem, 3vw, 3rem);
  text-align: center;
  color: black;
  width: 75%;
  font-family: var(--mainFont);
  font-weight: 600;
}
</style>
