<script setup lang="ts">
import { useHeadingStore } from "@/store/heading";

const store = useHeadingStore();

store.changeHeading("Submit your Club");
</script>

<template>
  <div>
    <Hero :heading="store.heading" />
    <CreateClub />
  </div>
</template>
