<script setup lang="ts">
import { ref, type Ref, provide, onMounted, computed } from "vue";
import { useJwt } from "@vueuse/integrations/useJwt";
import { type Jwt } from "@/types/Jwt";

const token: Ref<string | null> = ref(null);
const tokenString = computed(() => token.value ?? "");

const { payload } = useJwt<Jwt>(tokenString);

const login = (newToken: string): void => {
  token.value = newToken;
  localStorage.setItem("token", newToken);
};

const logout = (): void => {
  token.value = null;
  localStorage.removeItem("token");
};

const handleExpired = (): void => {
  const exp: number | undefined = payload?.value?.exp;
  if (exp) {
    const currentTime: number = Date.now() / 1000;
    if (currentTime > exp) {
      logout();
    }
  }
};

onMounted(() => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    token.value = storedToken;
    handleExpired();
  }
});

provide("token", token);
provide("login", login);
provide("logout", logout);
provide("payload", payload);
</script>

<template>
  <Login />
  <slot />
</template>
