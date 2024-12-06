<script setup>
import ClubGridItem from "./ClubGridItem.vue";
import { useClubFetch } from "@/composables/useClubFetch";

const { fetchedData, loading } = useClubFetch(
  "https://bookclubleague-backend.onrender.com/clubs"
);
</script>

<template>
  <div class="lTableCon">
    <div class="lTableGrid">
      <ClubGridItem v-if="!loading" :leagueData="fetchedData" />
      <div class="loadingText" v-else>
        <h2>Loading...</h2>
      </div>
    </div>
  </div>
</template>

<style scope>
.lTableCon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lTableGrid {
  display: grid;
  background-color: var(--mainTextColor);
  grid-template-rows: auto;
  grid-template-columns: repeat(5, 1fr);
  color: black;
  height: 500px;
  width: 1200px;
  border-radius: 20px;
  overflow-y: scroll;
  text-align: center;
}

.loadingText {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}
</style>
