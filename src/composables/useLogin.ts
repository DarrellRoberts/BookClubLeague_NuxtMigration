import { ref, type Ref } from "vue";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const username: Ref<string> = ref("");
  const password: Ref<string> = ref("");
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | unknown> = ref("");
  const { login } = useAuth();

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://bookclubleague-backend.onrender.com/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        loading.value = false;
        console.log("Login successful");
        login(data.token);
      }
      if (!response.ok) {
        loading.value = false;
        console.log("Login unsuccessful");
      }
    } catch (err: unknown) {
      error.value = err;
      console.error(err);
    }
  };

  return { handleLogin, username, password, loading, error };
};
