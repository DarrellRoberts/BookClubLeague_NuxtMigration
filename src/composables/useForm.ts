import { reactive, ref, type Ref } from "vue";
import { useTokenStore } from "~/store/token";

export const useForm = (url: string, form: object, reqType: string) => {
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | null | unknown> = ref(null);
  const formData = reactive({
    form,
  });
  const store = useTokenStore();

  const handleSubmit = async () => {
    try {
      loading.value = true;
      error.value = null;
      const response = await fetch(url, {
        method: reqType,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.token}`,
        },
        body: reqType === "DELETE" ? null : JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        loading.value = false;
        error.value = data.error;
        console.log("something has happened");
      }

      if (response.ok) {
        loading.value = false;
        console.log("success");
      }
    } catch (err) {
      loading.value = false;
      error.value = err;
      console.log(err);
    }
  };

  return { loading, error, handleSubmit, formData };
};
