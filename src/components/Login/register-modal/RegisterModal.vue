<script setup lang="ts">
import RegisterForm from "./RegisterForm.vue";
</script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <div>
        <v-btn
          v-bind="activatorProps"
          color="black"
          text="Register"
          variant="flat"
        ></v-btn>
      </div>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Dialog" color="black">
        <v-card-text>
          <RegisterForm :isActive="isActive" />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
