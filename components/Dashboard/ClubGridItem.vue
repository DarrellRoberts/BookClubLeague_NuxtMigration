<template>
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Position</h2>
        <ClubData v-for="(_, index) in leagueData" :clubData="index + 1" :key="index"/>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Book Club</h2>
        <ClubData v-for="(item, index) in leagueData" :clubData="item.name" :key="index"/>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Created in</h2>
        <ClubData v-for="(item, index) in leagueData" :clubData="formatDate(item.dateFormed)" :key="index"/>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Members</h2>
        <ClubData v-for="(item, index) in leagueData" :clubData="item.members.length" :key="index"/>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Books read</h2>
        <ClubData v-for="(item, index) in leagueData" :clubData="item.booksScored.length" :key="index"/>
      </div>
</template>

<script setup lang="ts">
import ClubData from './leaguedata/ClubData.vue';
import formatDate from '../../functions/formatDate';

type Data = {
  name: string,
  dateFormed: string,
  members: string[],
  booksScored: string[]
}

defineProps<{
leagueData: Data[]
}>()

</script>

<style scope>
#tableTitles {
  font-size: clamp(1rem, 2vw, 2.25rem);
  font-family: var(--mainFont);
}

.lTableGridItem {
display: flex;
flex-direction: column;
}
</style>
