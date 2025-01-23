<script lang="ts" setup>
import { shallowRef } from "vue";
defineProps<{
  background: string | undefined;
  backgroundColor: string | undefined;
  figure?: string | undefined;
  figureColor?: string | undefined;
}>();

const strokewidth: Ref<string> = shallowRef("15");
</script>

<template>
  <svg
    width="450"
    height="450"
    viewBox="-50 -50 1000 2000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      v-if="background === 'square'"
      x="10"
      y="25"
      width="1200"
      height="1800"
      :fill="backgroundColor"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <circle
      v-if="background === 'circle'"
      cx="500"
      cy="1000"
      r="900"
      :fill="backgroundColor"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <path
      v-if="background === 'teardrop'"
      :fill="backgroundColor"
      d="M1195 1260C1195 1588.61 928.609 1855 600 1855C271.391 1855 5 1588.61 5 1260C5 1178.29 39.5978 1071.7 92.6824 954.072C145.695 836.601 216.836 708.766 289.317 584.759C320.758 530.966 352.483 477.843 383.075 426.616C422.92 359.896 460.843 296.393 493.717 238.818C522.802 187.879 548.027 141.424 567.244 101.278C583.54 67.2372 595.633 37.4972 602.045 13.285C627.853 56.7944 658.815 107.301 692.874 162.858C773.68 294.67 871.917 454.917 960.104 617.619C1024.3 736.064 1083.07 855.625 1125.77 966.192C1168.51 1076.85 1195 1178.08 1195 1260Z"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <path
      v-if="background === 'half-circle'"
      :fill="backgroundColor"
      d="M900 0C781.81 0 664.778 23.2792 555.585 68.5084C446.392 113.738 347.177 180.031 263.604 263.604C180.031 347.177 113.738 446.392 68.5084 555.585C23.2792 664.778 -5.16623e-06 781.81 0 900C5.16624e-06 1018.19 23.2792 1135.22 68.5084 1244.42C113.738 1353.61 180.031 1452.82 263.604 1536.4C347.177 1619.97 446.392 1686.26 555.585 1731.49C664.778 1776.72 781.81 1800 900 1800L900 900L900 0Z"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <path
      v-if="background === 'triangle'"
      :fill="backgroundColor"
      d="M48.1356 1619.88L553.003 152.205C580.907 71.0903 594.859 30.5327 613.062 16.9112C628.937 5.02961 647.062 5.02961 662.938 16.9112C681.14 30.5327 695.092 71.0903 722.996 152.205L1227.86 1619.88C1255.87 1701.29 1269.87 1741.99 1267.8 1775.4C1265.99 1804.54 1256.92 1831.01 1242.84 1848.24C1226.7 1868 1198.76 1868 1142.87 1868H133.132C77.2411 1868 49.2955 1868 33.1545 1848.24C19.0756 1831.01 10.0051 1804.54 8.20041 1775.4C6.13101 1741.99 20.1324 1701.29 48.1356 1619.88Z"
      stroke="black"
      :stroke-width="strokewidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      v-if="background === 'pentagon'"
      :fill="backgroundColor"
      d="M1194.74 879.212L1045.25 1795H159.812L5.26676 879.211L602.525 8.86229L1194.74 879.212Z"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <path
      v-if="background === 'hexagon'"
      :fill="backgroundColor"
      d="M568 1795H347.456L5.35283 889.082L347.427 5H868.515L1194.68 889.081L868.486 1795H568Z"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <path
      v-if="background === 'heptagon'"
      :fill="backgroundColor"
      d="M886.046 1795H298.637L5.29872 1133.38L219.826 365.023L600.381 6.7028L1023.18 365.066L1194.75 1133.2L886.046 1795Z"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <path
      v-if="background === 'octagon'"
      :fill="backgroundColor"
      d="M852.465 1795H354.806L5.17418 1230.44L86.2196 559.325L355.152 5H852.247L1140.86 559.305L1194.89 1230.37L852.465 1795Z"
      stroke="black"
      :stroke-width="strokewidth"
    />
    <!-- <path
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
    /> -->
  </svg>
</template>

<style>
@import "../../assets/stylesheets/components/club/submit-club-container.css";
</style>
