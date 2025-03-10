<script setup>
import {onMounted, ref} from "vue";
import DataTable from "@/components/Table/DataTable.vue";
import useStore from "@/store/index.js";
import {columns} from "@/const/columns.js";

const store = useStore();


const scrollContainer = ref(null);

const handleScroll = () => {
  const container = scrollContainer.value;
  if (container) {
    if (container.scrollHeight - container.scrollTop - container.clientHeight <= 1) {
      store.loadMorePhotos();
    }
  }
};

onMounted(() => {
  store.fetchPhotos()
})
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center h-[100vh] md:h-[100vh]">
      <div
          ref="scrollContainer"
          @scroll="handleScroll"
          class="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] overflow-y-auto overflow-x-hidden shadow-md border rounded-md mx-auto"
      >
        <DataTable :columns="columns" :data="store.displayedAlbumsList"/>
      </div>
    </div>
  </div>
</template>
