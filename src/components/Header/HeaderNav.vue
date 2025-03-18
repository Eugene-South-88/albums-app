<script setup>
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import useStore from "@/store/index.js";
import {Switch} from '@/components/ui/switch'
import {useTheme} from "@/composables/useTheme";
import {Icon} from "@iconify/vue";
import {computed} from "vue";

const {theme, setTheme} = useTheme();
const store = useStore();

const isValid = computed(() =>
    /^[0-9\s]*$/.test(String(store.payload.firstId || ""))
    && /^[0-9\s]*$/.test(String(store.payload.lastId || ""))
);


const toggleTheme = () => {
  setTheme(theme.value === "light" ? "dark" : "light");
};


</script>

<template>
  <header class="fixed top-0 w-full p-4 bg-background shadow-md border-b z-10">
    <h1 class="flex justify-center text-2xl mb-5">Отчет по сделкам</h1>
    <form @submit.prevent="store.getDealsList"
          class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
    >
      <Switch @update:model-value="toggleTheme" class="sm:mr-4">
        <template #thumb>
          <Icon v-if="theme === 'dark'" icon="noto:full-moon" class="size-4"/>
          <Icon v-else icon="openmoji:sun" class="size-4"/>
        </template>
      </Switch>

      <div class="h-10 flex gap-5 items-center">
        <p>Фильтр:</p>
        <div class="">
          <div class="flex gap-5 justify-between relative w-full max-w-sm items-center">
            <p class="mr-[-15px]">От</p>
            <Input
                v-model="store.payload.firstId"
                placeholder="ID от."
                class="  sm:w-50  rounded-lg focus:bg-input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
            />

            <p class="mr-[-15px]">До</p>
            <Input
                v-model="store.payload.lastId"
                class="  sm:w-50   rounded-lg focus:bg-input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
            />
          </div>
          <p v-if="!isValid" class="flex justify-center mb-[-16px] text-xs text-red-500">Попробуйте цифры.</p>
        </div>
      </div>


      <Button
          class="w-full  sm:w-auto py-2 bg-primary px-4 rounded-lg border-primary text-primary-foreground font-semibold shadow-md hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95 flex items-center justify-center gap-2"
          :disabled="store.loading"
      >
        <Icon v-if="store.loading" icon="line-md:loading-twotone-loop"/>
        <span v-else>Поиск</span>
      </Button>
    </form>
  </header>
</template>
