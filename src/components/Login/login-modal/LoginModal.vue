<script setup lang="ts">
import LoginForm from "./LoginForm.vue";
import { useTokenStore } from "@/store/token";
import { useAuth } from "@/composables/useAuth";

const { logout } = useAuth();
const store = useTokenStore();
</script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <div v-if="store.token">
        <v-btn
          @click="logout"
          color="black"
          text="Logout"
          variant="flat"
        ></v-btn>
      </div>
      <div v-else>
        <v-btn
          v-bind="activatorProps"
          color="black"
          text="Login"
          variant="flat"
        ></v-btn>
      </div>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Dialog" color="black">
        <v-card-text>
          <LoginForm :isActive="isActive" />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
