<!-- eslint-disable vue/v-on-event-hyphenation -->
<!-- eslint-disable vue/attribute-hyphenation -->
<script setup lang="ts">
import LoginModal from "./modal/LoginModal.vue";
</script>

<template>
  <div class="loginCon">
    <LoginModal />
  </div>
</template>

<style scoped>
.loginCon {
  right: 0;
  margin: 1rem;
  position: absolute;
}
.loginCon button {
  background-color: var(--secondTextColor);
  color: var(--mainTextColor);
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
</style>
