<script setup>
import {computed, onMounted, ref} from "vue";
import DataTable from "@/components/Table/DataTable.vue";
import useStore from "@/store/index.js";
import {filterDataByKeys} from "@/api/mappers/columns.js";
import {fetchDealFields} from "@/api/reports.js";
import { generateTableColumns } from "@/const/columns.js";

const store = useStore();


const fields = ref([]);
const filteredFields = ref([]);

const filterKeys = [
  'ID',
  'TITLE',
  'STAGE_SEMANTIC_ID',
  'STAGE_ID',
  'ASSIGNED_BY_ID',
  'DATE_CREATE',
  'CREATED_BY_ID',
  'CATEGORY_ID',
  'CURRENCY_ID',
  'OPPORTUNITY',
  'CLOSEDATE',
  'SOURCE_ID',
  'UTM_SOURCE',
  'LEAD_ID',
];
//вынести в константу


const tableColumns = computed(() => generateTableColumns(filteredFields.value));

onMounted(async() => {
  await store.getDealsList()
  fields.value = await fetchDealFields();
  filteredFields.value = await filterDataByKeys(fields.value, filterKeys)

  store.getDealsStatus()
  store.getUsers()
})
</script>

<template>

  <div class=" mx-auto">
    <div class="flex px-5 justify-center items-center pt-10 h-[100vh] md:h-[100vh]">
      <div
          class=" custom-scrollbar w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-y-auto  shadow-md border rounded-md mx-auto"
      >
        <DataTable :columns="tableColumns" :data="store.dealsList"/>
      </div>
    </div>
  </div>
</template>
