<script setup>
import {computed, onMounted, ref} from "vue";
import DataTable from "@/components/Table/DataTable.vue";
import useStore from "@/store/index.js";
import {filterDataByKeys} from "@/api/mappers/columns.js";
import {fetchDealFields} from "@/api/reports.js";
import {generateTableColumns} from "@/const/columns.js";
import {filterKeys} from "@/utils/const/dealFieldsFilter.js";
import {storeToRefs} from "pinia";

const store = useStore();

const {loading, dealStatusList} = storeToRefs(store)


const fields = ref([]);
const filteredFields = ref([]);

const sortingState = ref({
  column: 'ID',
  order: 'desc',
});

const tableColumns = computed(() => generateTableColumns(filteredFields.value,  sortingState.value));

onMounted(async () => {
  loading.value = true
  await fetchDealFields().then((res) => {
    fields.value = res
  })

  const promises = [
    filterDataByKeys(fields.value, filterKeys),
    await store.getUsers(),
    store.getDealsStatus(),
    store.getDealsList(),
  ]

  Promise.allSettled(promises).then(([filteredDataRes]) =>{
    filteredFields.value = filteredDataRes.value
  })
  console.log(dealStatusList.value)
  loading.value = false
})
</script>

<template>
  <div class=" mx-auto">
    <div class="flex px-5 justify-center items-center pt-10 h-[100vh] md:h-[100vh]">
      <div
          class=" custom-scrollbar  h-[400px] sm:h-[500px] md:h-[600px] overflow-y-auto  shadow-md border rounded-md mx-auto"
      >
        <DataTable :columns="tableColumns" :data="store.dealsList"/>
      </div>
    </div>
  </div>
</template>
