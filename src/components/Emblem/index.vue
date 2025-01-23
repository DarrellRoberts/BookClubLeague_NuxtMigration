<script setup lang="ts">
import type { Club } from "~/types/Club";
import AvatarSvg from "./AvatarSvg.vue";
import FigureSvg from "./FigureSvg.vue";

defineProps<{
  formData: Partial<Club>;
}>();
</script>

<template>
  <div class="avatarSVG">
    <h2>{{ formData?.name }}</h2>
    <div class="avatar-wrap">
      <AvatarSvg
        :background="formData?.avatar?.background.image"
        :background-color="formData?.avatar?.background.color"
      />
    </div>
    <div class="figureSVG">
      <div class="figure-wrapper">
        <FigureSvg
          :figure="formData?.avatar?.figure.image"
          :figure-color="formData?.avatar?.figure.color"
        />
      </div>
    </div>
    <h2>{{ formData?.tagline }}</h2>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/emblem/emblem.css";
</style>
