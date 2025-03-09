import {h} from 'vue';
import {Icon} from '@iconify/vue';


export const columns = [
  {
    accessorKey: 'id',
    header: () => h('button', {class: '  h-7  px-2  cursor-pointer text-center  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground '}, [
      'ID',
      h(Icon, {icon: 'tabler:arrows-sort', width: '18', height: '18', class: 'hidden md:block ml-1'}),
    ]),
    cell: ({row}) => {
      const id = Number.parseFloat(row.getValue('id'));
      return h('p', {
          class: 'text-left font-medium truncate overflow-hidden whitespace-nowrap text-ellipsis',
          style: {maxWidth: '50px'},
          title: id
        },
        id);
    },
  },
  {
    accessorKey: 'albumId',
    header: () => h('button', {class: 'h-7  px-2 cursor-pointer text-center  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground'}, [
      'Альбом',
      h(Icon, {icon: 'tabler:arrows-sort', width: '18', height: '18', class: 'hidden md:block ml-1'}),
    ]),

    cell: ({row}) => {
      const albumId = row.getValue('albumId');

      return h('p', {
        class: 'text-left ml-3 font-medium truncate overflow-hidden whitespace-nowrap text-ellipsis',
        style: {maxWidth: '50px'},
        title: albumId,
      }, albumId);
    },
  },
  {
    accessorKey: 'title',
    header: () => h('div', {class: 'text-left'}, 'Название'),

    cell: ({row}) => {
      const title = row.getValue('title');

      return h('p', {
        class: 'text-left font-medium truncate w-[50px] sm:w-[100px] md:w-[130px] overflow-hidden whitespace-nowrap text-ellipsis',
        style: {maxWidth: '110px'},
        title: title,
      }, title);
    },
  },
  {
    accessorKey: 'url',
    header: () => h('div', {class: 'text-left'}, 'Ссылка'),

    cell: ({row}) => {
      const url = row.getValue('url');

      return h('p', {
        class: 'text-left font-medium truncate w-[50px] sm:w-[100px] md:w-[130px]  overflow-hidden whitespace-nowrap text-ellipsis',
        style: {maxWidth: '130px'},
        title: url,
      }, url);
    },
  },
  {
    accessorKey: 'thumbnailUrl',
    header: () => h('p', {class: 'text-left'}, 'Миниатюра'),

    cell: ({row}) => {
      const thumbnailUrl = row.getValue('thumbnailUrl');

      return h('p', {
        class: 'text-left font-medium truncate w-[50px] sm:w-[100px] md:w-[130px] overflow-hidden whitespace-nowrap text-ellipsis',
        style: {maxWidth: '130px'},
        title: thumbnailUrl,
      }, thumbnailUrl);
    },
  },
];
