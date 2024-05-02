<template>
    <Hero :heading="heading"/>
    <!-- eslint-disable-next-line vue/no-multiple-template-root -->
    <Dashboard />
</template>

<script setup>
const heading = ref('Leaderboard');

</script>
