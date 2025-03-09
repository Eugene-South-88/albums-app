import {defineStore} from "pinia";
import axios from "axios";

const useStore = defineStore('store',{
  state: ()=>({
    albumIds: '',
    albumsList: [],
    limit: 30,
    page: 1,
    loading: false,
    hasMore: true // Есть ли еще фото для загрузки
  }),
  actions: {
    async fetchPhotos() {
      this.albumsList = [];
      this.displayedPhotos = [];
      this.limit = 30;
      let url = 'https://jsonplaceholder.typicode.com/photos';

      if (this.albumIds.trim()) {
        const ids = this.albumIds.trim().split(' ').map(id => `albumId=${id}`).join('&');
        url += `?${ids}`;
      }

      try {
        const response = await axios.get(url);
        this.albumsList = response.data;
        this.displayedPhotos = this.albumsList.slice(0, this.limit);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },
    loadMore() {
      if (this.displayedPhotos.length < this.albumsList.length) {
        this.limit += 20;
        this.displayedPhotos = this.albumsList.slice(0, this.limit);
      }
    }
  },
})

export default useStore