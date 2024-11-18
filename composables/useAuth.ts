import { ref, type Ref, watch, onMounted, computed } from "vue";
import { useJwt } from "@vueuse/integrations/useJwt";
import { type Jwt } from "@/types/Jwt";

export const useAuth = () => {
  const token: Ref<string | null> = ref(null);
  const tokenString = computed(() => token.value ?? "");

  const { payload } = useJwt<Jwt>(tokenString);

  const login = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem("token", newToken);
  };

  const logout = (): void => {
    token.value = null;
    localStorage.removeItem("token");
  };

  const handleExpired = (): void => {
    const exp: number | undefined = payload?.value?.exp;
    if (exp) {
      const currentTime: number = Date.now() / 1000;
      if (currentTime > exp) {
        logout();
      }
    }
  };

  onMounted(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      token.value = storedToken;
      handleExpired();
    }
  });

  return { token, login, logout, payload };
};
