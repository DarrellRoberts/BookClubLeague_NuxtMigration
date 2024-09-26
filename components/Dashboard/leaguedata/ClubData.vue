<template>
          <div>
            <h2>{{ clubData }}</h2>
          </div>
</template>

<script setup lang="ts">
defineProps<{
    clubData: string | number
}>()

</script>
