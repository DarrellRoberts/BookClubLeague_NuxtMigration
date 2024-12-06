<script setup>
import { useHeadingStore } from "@/store/heading";

const store = useHeadingStore();

store.changeHeading("Profile");
</script>

<template>
  <Hero :heading="store.heading" />
</template>
