<template>
  <div class="modal">
    <div  class="modalX" @click="emit('handleModal')">X</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loginOpen: boolean;
}>();

const emit = defineEmits(['handleModal']);

</script>

<style scope>
.modal {
  display: flex;
  justify-content: end;
  position: fixed;
  background-color: #000000;
  height: 50vh;
  width: 50vw;
  right: 25%;
  top: 25%;
  border-radius: 30px;
  z-index: 1000;
  border-color: red;
  border-width: 5px;
  border-style: solid;
}

.modalX {
  color: white;
  font-size: 2rem;
  margin-right: 1rem;
  cursor: pointer;
}
</style>
