<script setup>
import { useHeadingStore } from "@/store/heading";

const store = useHeadingStore();

store.changeHeading("Leaderboard");
</script>

<template>
  <Hero :heading="store.heading" />
  <Dashboard />
</template>
