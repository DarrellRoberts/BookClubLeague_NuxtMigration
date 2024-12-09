<!-- eslint-disable vue/v-on-event-hyphenation -->
<!-- eslint-disable vue/attribute-hyphenation -->
<script setup lang="ts">
import LoginModal from "./login-modal/LoginModal.vue";
import RegisterModal from "./register-modal/RegisterModal.vue";
import { useTokenStore } from "~/store/token";

const store = useTokenStore();
</script>

<template>
  <div class="loginCon">
    <RegisterModal v-if="!store.token" />
    <LoginModal />
  </div>
</template>

<style scoped>
.loginCon {
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  right: 0;
  margin: 1rem;
  position: absolute;
}
.loginCon button {
  background-color: var(--secondTextColor);
  color: var(--mainTextColor);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0 1rem;
}
</style>
