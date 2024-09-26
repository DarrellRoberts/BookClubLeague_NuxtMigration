<template>
  <div class="lTableCon">
    <div class="lTableGrid">
      <ClubGridItem v-if="!pending" :leagueData="leagueData" />
      <div class="loadingText" v-else>
        <h2>Loading...</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClubGridItem from './ClubGridItem.vue';

const { data: leagueData, pending } = useLazyAsyncData(async () => {
    try {
        const res = await fetch(
            'https://bookclubleague-backend.onrender.com/clubs'
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
});
</script>

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
