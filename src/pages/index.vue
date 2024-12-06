<script setup lang="ts">
import { useHeadingStore } from "../store/heading";

const store = useHeadingStore();

store.changeHeading("Book Club League");
</script>

<template>
  <div>
    <Hero :heading="store.heading" />
  </div>
</template>
