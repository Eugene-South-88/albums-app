import {h} from 'vue';
import {Icon} from '@iconify/vue';


export const columns = [
  {
    accessorKey: 'id',
    header: ({ column }) => h(
      'button',
      {
        class: 'h-7 px-2 cursor-pointer text-center inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground',
        onClick: () => column.toggleSorting(),
      },
      [
        'ID',
        h(Icon, { icon: 'tabler:arrows-sort', width: '18', height: '18', class: 'hidden md:block ml-1' })
      ]
    ),
    cell: ({ row }) => {
      const id = parseFloat(row.getValue('id'));

      return h('p', {
        class: 'text-center font-medium truncate overflow-hidden whitespace-nowrap text-ellipsis',
        style: { maxWidth: '50px' }
      }, id);
    },
    enableSorting: true,
    sortType: (a, b) => a - b,
  },
  {
    accessorKey: 'albumId',
    header: ({ column }) => h(
      'button',
      {
        class: 'h-7 px-2 cursor-pointer text-center inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground',
        onClick: () => column.toggleSorting(),
      },
      [
        'Альбом',
        h(Icon, { icon: 'tabler:arrows-sort', width: '18', height: '18', class: 'hidden md:block ml-1' })
      ]
    ),
    cell: ({ row }) => {
      const albumId = row.getValue('albumId');

      return h('p', {
        class: 'text-left ml-5 font-medium truncate overflow-hidden whitespace-nowrap text-ellipsis',
        style: { maxWidth: '30px' },
        title: albumId,
      }, albumId);
    },
    enableSorting: true,
    sortType: (a, b) => {
      return a - b;
    },
  },

  {
    accessorKey: 'title',
    header: ({ column }) => h(
      'button',
      {
        class: 'h-7 px-2 cursor-pointer text-center inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground',
        onClick: () => column.toggleSorting(),
      },
      [
        'Название',
        h(Icon, { icon: 'tabler:arrows-sort', width: '18', height: '18', class: 'hidden md:block ml-1' })
      ]
    ),
    cell: ({ row }) => {
      const title = row.getValue('title');

      return h('p', {
        class: 'text-left font-medium truncate w-[50px] sm:w-[100px] md:w-[130px] overflow-hidden whitespace-nowrap text-ellipsis',
        style: { maxWidth: '100px' },
      }, title);
    },
    enableSorting: true,
    sortType: (a, b) => {

      return a.localeCompare(b);
    },
  },
  {
    accessorKey: 'url',
    header: () => h('div', {class: 'text-center mr-5'}, 'Ссылка'),

    cell: ({row}) => {
      const url = row.getValue('url');

      return h('p', {
        class: 'text-left font-medium truncate w-[50px] sm:w-[100px] md:w-[130px]  overflow-hidden whitespace-nowrap text-ellipsis',
        style: {maxWidth: '120px'},
      }, url);
    },
  },
  {
    accessorKey: 'thumbnailUrl',
    header: () => h('p', {class: 'text-center mr-5'}, 'Миниатюра'),

    cell: ({row}) => {
      const thumbnailUrl = row.getValue('thumbnailUrl');

      return h('p', {
        class: 'text-left font-medium truncate w-[50px] sm:w-[100px] md:w-[130px] overflow-hidden whitespace-nowrap text-ellipsis',
        style: {maxWidth: '120px'},
      }, thumbnailUrl);
    },
  },
];
