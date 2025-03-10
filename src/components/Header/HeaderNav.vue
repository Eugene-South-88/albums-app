<script setup>
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useStore from "@/store/index.js";
import { Switch } from '@/components/ui/switch'
import { useTheme } from "@/composables/useTheme";
import { Icon } from "@iconify/vue";
import {ref} from "vue";

const { theme, setTheme } = useTheme();
const store = useStore();

const isValid = ref(true);

function validateNumber() {
  const regex = /^[0-9]*$/; // Регулярное выражение для цифр
  if (!regex.test(store.albumIds)) {
    isValid.value = false; // Если введены не цифры, показываем ошибку
  } else {
    isValid.value = true; // Если введены только цифры, ошибка скрыта
  }
}

const toggleTheme = () => {
  setTheme(theme.value === "light" ? "dark" : "light");
};
</script>

<template>
  <header class="fixed top-0 w-full p-4 bg-background shadow-md border-b z-10">
    <form @submit.prevent="store.fetchPhotos"
         class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
    >
      <Switch @update:model-value="toggleTheme" class="sm:mr-4">
        <template #thumb>
          <Icon v-if="theme === 'dark'" icon="noto:full-moon" class="size-4"/>
          <Icon v-else icon="openmoji:sun" class="size-4"/>
        </template>
      </Switch>

      <div class="h-10" >
        <div class="relative w-full max-w-sm items-center">
          <Input
              @input.prevent="validateNumber"
              v-model="store.albumIds"
              placeholder="Введите ID альбомов..."
              class="pl-10 w-full sm:w-96  rounded-lg focus:bg-input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
          />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Icon icon="hugeicons:search-01" />
    </span>
        </div>
        <p v-if="!isValid" class="text-xs text-red-500">Попробуйте цифры.</p>
      </div>

      <Button
          class="w-full sm:w-auto py-2 bg-primary px-4 rounded-lg border-primary text-primary-foreground font-semibold shadow-md  hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95"
          :disabled="store.loading"
      >
        Поиск
      </Button>
    </form>
  </header>
</template>
