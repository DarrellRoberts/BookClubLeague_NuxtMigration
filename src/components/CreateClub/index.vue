<script setup lang="ts">
import { useTokenStore } from "@/store/token";
import ClubForm from "./ClubForm.vue";

const store = useTokenStore();
</script>

<template>
  <div class="club-form-container">
    <ClubForm v-if="store.token" />
    <h2 v-else>Login or register in order to create a competing book club</h2>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/club/submit-club-container.css";
</style>
