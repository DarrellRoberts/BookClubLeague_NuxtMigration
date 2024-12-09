<script setup lang="ts">
import { type Ref } from "vue";
import { useRegister } from "@/composables/useRegister";

const props = defineProps<{
  isActive: Ref<boolean>;
}>();

const { username, password, handleLogin, error } = useRegister();

const handleButton = () => {
  if (!error) {
    props.isActive.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="username" type="text" placeholder="Enter username" />
    <input v-model="password" type="password" placeholder="Enter password" />
    <button @click="handleButton" type="submit">Submit</button>
    <span v-if="error">{{ error }}</span>
  </form>
</template>
