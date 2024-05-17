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
    padding-top: 2rem;
    padding: 2rem 0px 0px 2rem;
}


</style>
