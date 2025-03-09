<script setup>
import DataTable from "@/components/Table/DataTable.vue";
import {onMounted} from "vue";
import {getAlbums} from "@/api/albums.js";
import useStore from "@/store/index.js";
import {columns} from "@/const/columns.js";
import {ScrollArea} from '@/components/ui/scroll-area'

const store = useStore();


const loadAlbums = () => {
  getAlbums()
      .then(({data}) => {
        store.albumsList = data;
      });
};

onMounted(() => {
  loadAlbums();
});
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center min-h-screen">
      <ScrollArea
          ref="tableContainer"
          class="w-[600px] h-[600px] shadow-md overflow-y-auto overflow-x-hidden border rounded-md mx-auto"
      >
        <DataTable :columns="columns" :data="store.albumsList"/>

      </ScrollArea>
    </div>
  </div>
</template>

