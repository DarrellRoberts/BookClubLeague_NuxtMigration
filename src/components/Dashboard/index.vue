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
  <h2 class="text-center">
    Want to enter your club into the leaderboard?
    <NuxtLink to="/submit-club"> Click here to submit </NuxtLink>
  </h2>
</template>

<style scoped>
@import "../../assets/stylesheets/components/dashboard/dashboard-container.css";
</style>
