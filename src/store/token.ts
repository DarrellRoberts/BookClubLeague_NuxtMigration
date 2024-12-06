import { ref, type Ref, computed } from "vue";
import { defineStore } from "pinia";
import { useJwt } from "@vueuse/integrations/useJwt";
import { type Jwt } from "@/types/Jwt";

export const useTokenStore = defineStore("token", () => {
  const token: Ref<string | null> = ref("");
  const tokenString = computed(() => token.value ?? "");

  const decodedToken = useJwt<Jwt>(tokenString).payload;

  const changeToken = (newToken: string) => {
    token.value = newToken;
  };

  return { token, tokenString, decodedToken, changeToken };
});
