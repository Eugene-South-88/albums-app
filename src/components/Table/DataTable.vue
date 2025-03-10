<script setup>
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  FlexRender,
  getCoreRowModel, getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table';
import { Skeleton } from "@/components/ui/skeleton/index.js";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'; // Импортируем Tooltip

const props = defineProps({
  columns: Array,
  data: Array,
});

const table = useVueTable({
  get data() { return props.data; },
  get columns() { return props.columns; },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
});
</script>

<template>
  <TooltipProvider>
    <Table>
      <TableHeader class="sticky top-0 bg-white z-10 shadow">
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
                v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="">
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
              v-for="row in table.getRowModel().rows" :key="row.id"
              :data-state="row.getIsSelected() ? 'selected' : undefined"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <!-- Встраиваем Tooltip в каждую ячейку -->
              <Tooltip>
                <TooltipTrigger>
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </TooltipTrigger>
                <TooltipContent>
                  {{ cell.getValue() }} <!-- Это то, что будет показываться в тултипе -->
                </TooltipContent>
              </Tooltip>
            </TableCell>
          </TableRow>
        </template>

        <template v-else>
          <TableRow
              v-for="(item, index) in 15" :key="index"
          >
            <TableCell v-for="(e, index) in 5" :key="index">
              <Skeleton class="w-20 h-5"/>
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </TooltipProvider>
</template>
