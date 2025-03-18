import axios from "axios";
import {ref} from "vue";
import {h} from "vue";
import {Icon} from "@iconify/vue";

export function useColumns() {
  const columns = ref([]);

  const fetchColumns = async () => {

    try {
      const response = await axios.get(
        "https://dveri-bambit.bitrix24.ru/rest/80/3e7e3qrnoi3fo818/crm.deal.list.json",
        {
          params: {
            select: JSON.stringify(["ID", "COMPANY_ID", "STAGE_ID", "UF_CRM_***", "DATE_MODIFY"])
          },
        }
      );
      const data = response.data.result;

      columns.value = Object.keys(data).map((key) => ({
        accessorKey: key,
        header: ({column}) =>
          h(
            "button",
            {
              class: "h-7 px-2 cursor-pointer text-center inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground",
              onClick: () => column.toggleSorting(),
            },
            [
              data[key].title,
              h(Icon, {
                icon: "tabler:arrows-sort",
                width: "18",
                height: "18",
                class: "hidden md:block ml-1",
              }),
            ]
          ),
        cell: ({row}) => {
          const value = row.getValue(key);
          return h(
            "p",
            {
              class: "text-center font-medium truncate overflow-hidden whitespace-nowrap text-ellipsis",
              style: {maxWidth: "100px"},
            },
            value
          );
        },
      }));
    } catch (error) {
      console.error("Ошибка загрузки колонок:", error);
    }
  };

  return {columns, fetchColumns};
}
