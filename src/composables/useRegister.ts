import { ref, type Ref } from "vue";
import { useAuth } from "./useAuth";

export const useRegister = () => {
  const username: Ref<string> = ref("");
  const password: Ref<string> = ref("");
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | unknown> = ref("");
  const { login } = useAuth();

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://bookclubleague-backend.onrender.com/users/signup",
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
        console.log("Registration successful");
        login(data.token);
      }
      if (!response.ok) {
        loading.value = false;
        console.log("Registration unsuccessful");
        error.value = data.error;
      }
    } catch (err: unknown) {
      error.value = err;
      console.error(err);
    }
  };

  return { handleLogin, username, password, loading, error };
};
