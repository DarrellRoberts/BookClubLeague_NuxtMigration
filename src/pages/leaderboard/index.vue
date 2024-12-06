<script setup>
import { useHeadingStore } from "@/store/heading";

const store = useHeadingStore();

store.changeHeading("Leaderboard");
</script>

<template>
  <Hero :heading="store.heading" />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <Dashboard />
</template>
