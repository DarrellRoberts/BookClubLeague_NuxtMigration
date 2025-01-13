<script lang="ts" setup>
import { shallowRef } from "vue";
defineProps<{
  figure?: string | undefined;
  figureColor?: string | undefined;
}>();

const strokewidth: Ref<string> = shallowRef("15");
</script>

<template>
  <svg
    width="200"
    height="200"
    viewBox="-50 250 1800 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-if="figure === 'shark'"
      :fill="figureColor"
      d="M800.952 197.049L780.06 12L696.489 101.54L615.903 211.973L302.513 229.881L13 292.559L160.741 388.068L178.649 438.807L496.516 504.47L595.01 573.118L684.55 611.918L636.796 504.47H851.692L1021.82 453.731L1102.4 480.593L1147.17 414.93H1293.42L1412.81 388.068L1630.69 588.041L1591.89 480.593V373.145L1645.61 271.666L1765 113.479L1591.89 197.049L1433.7 322.405H1275.51L1239.7 271.666L1182.99 292.559L800.952 197.049Z"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <path
      v-if="figure === 'sun'"
      :fill="figureColor"
      d="M669.5 270V0M669.5 1343V1073M0 635.5H270M1073 635.5H1343M959.728 363.389L1186.38 216.667M172.297 195.598L389.336 356.204M389.015 972.37L189.336 1154.11M1149.58 1120.25L959.645 928.352M1030 664C1030 862.823 868.823 1024 670 1024C471.177 1024 310 862.823 310 664C310 465.177 471.177 304 670 304C868.823 304 1030 465.177 1030 664Z"
      stroke="black"
      :stroke-width="strokewidth"
    />
  </svg>
</template>

<style>
@import "../../assets/stylesheets/components/club/submit-club-container.css";
</style>
