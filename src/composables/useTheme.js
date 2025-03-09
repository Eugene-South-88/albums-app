import { ref, onMounted} from "vue";

export function useTheme() {
  const theme = ref(localStorage.getItem("theme") || "light");

  const setTheme = (newTheme) => {
    theme.value = newTheme;
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  onMounted(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  });

  return { theme, setTheme };
}
