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
@import "../../assets/stylesheets/components/login/login-container.css";
</style>
