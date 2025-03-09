<script setup>
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useStore from "@/store/index.js";
import { Switch } from '@/components/ui/switch'
import {ref} from "vue";
import { useTheme } from "@/composables/useTheme";
import { Icon } from "@iconify/vue";

const { theme, setTheme } = useTheme();

const store = useStore()
const albumsIds = ref()

const inputFocus = ref(null)


const toggleTheme = () => {
  setTheme(theme.value === "light" ? "dark" : "light");
};

</script>


<template>
  <header class="fixed top-0  w-full p-4 bg-background shadow-md z-10">
    <div @submit.prevent="store.handleSubmit" class=" flex justify-center items-center space-x-6">
      <Switch @update:model-value="toggleTheme">
        <template #thumb>
          <Icon v-if="theme === 'dark'" icon="noto:full-moon" class="size-4" />
          <Icon v-else icon="openmoji:sun" class="size-4" />
        </template>
      </Switch>
      <Input
          v-model="albumsIds"
          ref="inputFocus"
          placeholder="Введите текст"
          class="w-96 p-3 rounded-lg focus:bg-input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
      />

      <Button
          class="py-2 bg-primary px-4 rounded-lg border-primary text-primary-foreground font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95"
      >
        Отправить
      </Button>
    </div>
  </header>
  <div class="mb-10"></div>
</template>
