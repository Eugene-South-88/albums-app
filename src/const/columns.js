import { h } from 'vue';
import { Icon } from "@iconify/vue";

export function generateTableColumns(filteredFields) {
  return filteredFields.map((field) => ({
    accessorKey: field.key,
    header: ({ column }) =>
      h(
        'button',
        {
          class:
            'h-7 px-2 cursor-pointer text-center inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground',
          onClick: () => column.toggleSorting(),
        },
        [
          field.title,
          h(Icon, {
            icon: 'tabler:arrows-sort',
            width: '18',
            height: '18',
            class: 'hidden md:block ml-1',
          }),
        ]
      ),
    cell: ({ row }) => {
      const value = row.getValue(field.key);


      if (value === null || value === undefined || value === '') {
        return h('span');
      }


      return h(
        'p',
        {
          class:
            'text-center font-medium truncate overflow-hidden whitespace-nowrap text-ellipsis',
          style: { maxWidth: '100px' },
        },
        value
      );
    },
  }));
}
