<template>
  <div class="heroCon">
    <h1>{{ heading }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
    heading: String,
});
</script>

<style>
.heroCon {
    display: flex;
    justify-content: center;
}
</style>
