<script setup lang="ts">
import { ref, type Ref, inject } from "vue";

defineProps<{
  isActive: Ref<boolean>;
}>();

const username: Ref<string> = ref("");
const password: Ref<string> = ref("");
const loading: Ref<boolean> = ref(false);
const error: Ref<string | unknown> = ref("");

const login = inject<(token: string) => void>("login", (token: string) =>
  localStorage.setItem("token", token)
);

const handleSignIn = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://bookclubleague-backend.onrender.com/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      loading.value = false;
      console.log("Login successful");
      // localStorage.setItem("token", data.token);
      login(data.token);
    }
    if (!response.ok) {
      loading.value = false;
      console.log("Login unsuccessful");
    }
    console.log("handlesignin");
  } catch (err: unknown) {
    error.value = err;
    console.error(err);
  }
};
</script>

<template>
  <form @submit.prevent="handleSignIn">
    <input v-model="username" type="text" placeholder="Enter username" />
    <input v-model="password" type="password" placeholder="Enter password" />
    <button @click="isActive.value = false" type="submit">Submit</button>
  </form>
</template>
