<script setup lang="ts">
import { useForm } from "~/composables/useForm";
import { ref } from "vue";

const { formData, handleSubmit, loading, error } = useForm(
  "https://bookclubleague-backend.onrender.com/clubs",
  {
    name: "",
    website: "",
    tagline: "",
    avatar: {
      background: { image: "", color: "" },
      figure: { image: "", color: "" },
    },
  },
  "POST"
);

const nameRules = ref([
  (v: string) => !!v || "Name is required",
  (v: string) =>
    (v && v.length <= 22) || "Name must be less than 22 characters",
  (v: string) => (v && v.length > 3) || "Name must be more than 3 characters",
]);

const backgroundShapes = [
  "circle",
  "teardrop",
  "half-circle",
  "triangle",
  "square",
  "pentagon",
  "hexagon",
  "heptagon",
  "octagon",
];

const figureShapes = [
  "book",
  "eye",
  "dice",
  "thumb",
  "smiley",
  "cloud",
  "train",
  "shark",
  "sun",
  "moon",
];
</script>

<template>
  <div v-if="!loading" class="club-form">
    <v-form ref="form">
      <v-text-field
        v-model="formData.name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
        v-model.website="formData.website"
        label="Website"
      ></v-text-field>

      <v-select
        v-model="formData.avatar.background.image"
        :items="backgroundShapes"
        label="Background Shape"
      ></v-select>

      <v-color-picker
        v-model="formData.avatar.background.color"
        label="Background Color"
        hide-inputs
      >
      </v-color-picker>

      <v-select
        v-model="formData.avatar.figure.image"
        :items="figureShapes"
        label="Figure Shapes"
      ></v-select>

      <v-color-picker
        v-model="formData.avatar.figure.color"
        label="Figure Color"
        hide-inputs
      >
      </v-color-picker>

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
        <v-btn class="mt-4" color="success" block @click="handleSubmit(null)">
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
