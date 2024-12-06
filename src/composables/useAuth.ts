import { onMounted } from "vue";
import { useTokenStore } from "@/store/token";

export const useAuth = () => {
  const store = useTokenStore();

  const login = (newToken: string) => {
    store.token = newToken;
    localStorage.setItem("token", newToken);
  };

  const logout = (): void => {
    store.token = null;
    localStorage.removeItem("token");
  };

  const handleExpired = (): void => {
    const exp: number | undefined = store.decodedToken?.exp;
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
      store.token = storedToken;
      handleExpired();
    }
  });

  return { login, logout, handleExpired };
};
