import { ref, type Ref, computed } from "vue";
import { defineStore } from "pinia";

export const useHeadingStore = defineStore("heading", () => {
  const heading: Ref<string> = ref("Book Club League");

  const changeHeading = (newHeading: string) => {
    heading.value = newHeading;
  };

  return { heading, changeHeading };
});
