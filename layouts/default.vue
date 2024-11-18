<script setup lang="ts">
import "../style.css";
import { useAuth } from "~/composables/useAuth";

const { token } = useAuth();
</script>

<template>
  <!-- <AuthContext> -->
  <Login :token="token" />
  <Navbar />
  <main>
    <slot />
  </main>
  <!-- </AuthContext> -->
</template>
