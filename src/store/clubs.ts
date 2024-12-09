import { ref, type Ref, computed } from "vue";
import { defineStore } from "pinia";
import { useClubFetch } from "../composables/useClubFetch";
import type { Club } from "~/types/Club";

export const useClubStore = defineStore("clubs", () => {
  const clubs: Ref<Club[] | null> = ref(null);

  const { fetchedData, loading } = useClubFetch(
    "https://bookclubleague-backend.onrender.com/clubs"
  );

  watch(fetchedData, () => {
    clubs.value = fetchedData.value;
  });

  return { clubs, loading };
});
