import { reactive, ref, type Ref } from "vue";
import { useTokenStore } from "~/store/token";

type Form = {
  name: string;
  website: string;
  tagline: string;
};

export const useForm = (url: string, form: Form | null, reqType: string) => {
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | null | unknown> = ref(null);
  const formData = reactive({
    form,
  });
  const store = useTokenStore();

  const handleSubmit = async (param: null | string) => {
    const fetchUrl = param ? `${url}/${param}` : url;
    try {
      loading.value = true;
      error.value = null;
      const response = await fetch(fetchUrl, {
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
        console.log(data);
        console.log("something has happened");
      }

      if (response.ok) {
        loading.value = false;
        console.log("success");
        location.reload();
      }
    } catch (err) {
      loading.value = false;
      error.value = err;
      console.log(err);
    }
  };

  return { loading, error, handleSubmit, formData };
};
