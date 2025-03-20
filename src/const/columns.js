import { h } from 'vue';
import { Icon } from "@iconify/vue";


export function generateTableColumns(filteredFields, sortingState) {
  return filteredFields.map((field) => ({
    accessorKey: field.key,
    header: ({ column }) => {

      const isSorted = sortingState.column === field.key;
      const sortIcon = isSorted
        ? sortingState.order === 'desc'
          ? 'tabler:arrow-down'
          : 'tabler:arrow-up'
        : null;

      return h(
        'button',
        {
          class:
            'h-7 px-2 cursor-pointer text-center inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground',
          onClick: () => {
            if (isSorted) {
              sortingState.order = sortingState.order === 'desc' ? 'asc' : 'desc';
            } else {
              sortingState.column = field.key;
              sortingState.order = 'desc';
            }
            column.toggleSorting(sortingState.order === 'asc');
          },
        },
        [
          field.title,
          isSorted &&
          h(Icon, {
            icon: sortIcon,
            width: '18',
            height: '18',
            class: 'ml-1',
          }),
        ]
      );
    },
    cell: ({ row }) => {
      const value = row.getValue(field.key);

      if (value === null || value === undefined || value === '') {
        return h('span');
      }

      return h(
        'p',
        {
          class:
            'text-center cursor-default font-medium truncate overflow-hidden whitespace-nowrap text-ellipsis',
          style: { maxWidth: '170px' },
        },
        value
      );
    },
  }));
}
