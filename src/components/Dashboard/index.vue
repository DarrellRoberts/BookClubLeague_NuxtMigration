<script setup>
import ClubGridItem from "./ClubGridItem.vue";
import { useClubStore } from "~/store/clubs";

const store = useClubStore();
</script>

<template>
  <div class="lTableCon">
    <div class="lTableGrid">
      <ClubGridItem v-if="!store.loading" :leagueData="store.clubs" />
      <div class="loadingText" v-else>
        <h2>Loading...</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/dashboard/dashboard-container.css";
</style>
