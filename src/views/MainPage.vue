<script setup>
import DataTable from "@/components/Table/DataTable.vue";
import {onMounted} from "vue";
import useStore from "@/store/index.js";
import { columns } from "@/const/columns.js";
import { ScrollArea } from "@/components/ui/scroll-area";

const store = useStore();


onMounted(() => {

});
</script>

<template>
  <div class="container mx-auto">
    <div class="  flex justify-center items-center min-h-screen">
      <ScrollArea
          class=" w-[400px] sm:w-[500px] md:w-[600px]  h-[400px] sm:h-[500px] md:h-[600px] shadow-md overflow-y-auto overflow-x-hidden border rounded-md mx-auto"
      >
        <DataTable :columns="columns" :data="store.albumsList" />
      </ScrollArea>
    </div>
  </div>
</template>
