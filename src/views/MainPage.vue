<script setup>
import {onMounted, ref} from "vue";
import DataTable from "@/components/Table/DataTable.vue";
import useStore from "@/store/index.js";
import { columns } from "@/const/columns.js";
import {ScrollArea} from "@/components/ui/scroll-area/index.js";

const store = useStore();


// Создаем ссылку на контейнер с прокруткой
const scrollContainer = ref(null);

// Функция для обработки события прокрутки
const handleScroll = () => {
  const container = scrollContainer.value;
  if (container) {
    if (container.scrollHeight - container.scrollTop - container.clientHeight <= 1) {
      console.log('Достигнут низ блока!');
      store.loadMorePhotos();
    }
  }
};

onMounted(()=>{
  store.fetchPhotos()
})
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center h-[94vh] md:h-[95vh]">

          <div v-if="store.displayedAlbumsList"
                      ref="scrollContainer"
                      @scroll="handleScroll"
                      class="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] overflow-y-auto overflow-x-hidden shadow-md border rounded-md mx-auto"
          >
            <DataTable :columns="columns" :data="store.displayedAlbumsList" />
          </div>

    </div>
  </div>
</template>
