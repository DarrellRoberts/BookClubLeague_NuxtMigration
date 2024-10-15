<!-- eslint-disable vue/v-on-event-hyphenation -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="loginCon">
    <button @click="handleModal" type="button">Login</button>
  </div>
  <div v-if="loginOpen">
    <LoginModal :loginOpen="loginOpen" @handleModal="handleModal" />
  </div>
</template>

<script setup lang="ts">
import {type Ref, ref} from 'vue';
import LoginModal from './modal/LoginModal.vue';

const loginOpen: Ref<boolean> = ref(false);

const handleModal = (): boolean => loginOpen.value = !loginOpen.value;

</script>

<style scoped>
.loginCon {
  right: 0;
  margin: 1rem;
  position: absolute;
}
.loginCon button {
  background-color: var(--secondTextColor);
  color: var(--mainTextColor);
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
</style>
