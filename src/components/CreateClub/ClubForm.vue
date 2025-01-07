<script setup lang="ts">
import { useForm } from "~/composables/useForm";

const { formData, handleSubmit, loading, error } = useForm(
  "https://bookclubleague-backend.onrender.com/clubs",
  {
    name: "",
    website: "",
    tagline: "",
  },
  "POST"
);
</script>

<template>
  <div v-if="!loading" class="club-form">
    <v-form ref="form">
      <v-text-field
        v-model="formData.name"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.website"
        label="Website"
        required
      ></v-text-field>

      <!-- <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select> -->

      <!-- <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Avatar"
        required
      ></v-select> -->

      <v-text-field
        v-model="formData.tagline"
        label="Tagline"
        required
      ></v-text-field>

      <div class="d-flex flex-column">
        <v-btn class="mt-4" color="success" block @click="validate">
          Validate
        </v-btn>

        <v-btn class="mt-4" color="error" block @click="reset">
          Reset Form
        </v-btn>

        <v-btn class="mt-4" color="success" block @click="handleSubmit">
          Submit
        </v-btn>
      </div>
    </v-form>
  </div>
  <div v-else>Loading</div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/club/submit-club-container.css";
</style>
