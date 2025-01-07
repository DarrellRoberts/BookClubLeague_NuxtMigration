<script setup lang="ts">
defineProps<{
  clubData: string | number;
}>();
</script>

<template>
  <div>
    <h3>{{ clubData }}</h3>
  </div>
</template>
