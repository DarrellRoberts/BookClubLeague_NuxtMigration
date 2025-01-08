<script setup lang="ts">
import ClubData from "./leaguedata/ClubData.vue";
import { formatDate } from "@/utils/date-functions/formatDate";
import { useTokenStore } from "~/store/token";
import { computed } from "vue";
import { useForm } from "@/composables/useForm";

type Data = {
  _id: string;
  name: string;
  dateFormed: string;
  members: string[];
  booksScored: string[];
  owner: string;
};

defineProps<{
  leagueData: Data[];
}>();

const tokenStore = useTokenStore();
const { handleSubmit, loading, error } = useForm(
  "https://bookclubleague-backend.onrender.com/clubs",
  null,
  "DELETE"
);
const isAdmin = computed<boolean>(
  () => tokenStore?.decodedToken?.role === "Admin"
);

const isOwner = (ownerId: string) => tokenStore?.decodedToken?._id === ownerId;

const deleteClub = (clubId: string) => {
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
  handleSubmit(clubId);
};
</script>

<template>
  <div class="lTableGridItem">
    <h3 class="underline" id="tableTitles">Position</h3>
    <span class="l-table-index-box" v-for="(club, index) in leagueData">
      <v-btn
        v-if="isAdmin || isOwner(club.owner)"
        :loading="loading"
        @click="deleteClub(club._id)"
        size="x-small"
        color="error"
        >X</v-btn
      >
      <ClubData :clubData="index + 1" :key="index" />
    </span>
  </div>
  <div class="lTableGridItem">
    <h3 class="underline" id="tableTitles">Book Club</h3>
    <ClubData
      v-for="(item, index) in leagueData"
      :clubData="item.name"
      :key="index"
    />
  </div>
  <div class="lTableGridItem">
    <h3 class="underline" id="tableTitles">Created in</h3>
    <ClubData
      v-for="(item, index) in leagueData"
      :clubData="formatDate(item.dateFormed)"
      :key="index"
    />
  </div>
  <div class="lTableGridItem">
    <h3 class="underline" id="tableTitles">Members</h3>
    <ClubData
      v-for="(item, index) in leagueData"
      :clubData="item.members.length"
      :key="index"
    />
  </div>
  <div class="lTableGridItem">
    <h3 class="underline" id="tableTitles">Books read</h3>
    <ClubData
      v-for="(item, index) in leagueData"
      :clubData="item.booksScored.length"
      :key="index"
    />
  </div>
</template>

<style scoped>
@import "../../assets/stylesheets/components/dashboard/club-grid-item.css";
</style>
