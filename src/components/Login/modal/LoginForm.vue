<script setup lang="ts">
import { type Ref } from "vue";
import { useLogin } from "@/composables/useLogin";

defineProps<{
  isActive: Ref<boolean>;
}>();

const { username, password, handleLogin } = useLogin();
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="username" type="text" placeholder="Enter username" />
    <input v-model="password" type="password" placeholder="Enter password" />
    <button @click="isActive.value = false" type="submit">Submit</button>
  </form>
</template>
