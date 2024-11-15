<script setup lang="ts">
import "../style.css";
import AuthContext from "~/context/AuthContext.vue";
</script>

<template>
  <AuthContext>
    <Navbar />
    <main>
      <slot />
    </main>
  </AuthContext>
</template>
