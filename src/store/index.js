import { defineStore } from "pinia";
import { getAlbums } from "@/api/albums.js"; // Импортируем API-запрос

const useStore = defineStore("store", {
  state: () => ({
    albumIds: localStorage.getItem("albumIds") || "",
    previousAlbumIds: "",
    albumsList: [],
    displayedAlbumsList: [],
    page: 1,
    perPage: 20,
    limit: 30,
    loading: false,
  }),
  actions: {
    fetchPhotos() {
      if (this.albumIds.trim() === "") {
        this.albumIds = "";
      }

      // Если ID изменились, сбрасываем данные перед загрузкой новых
      if (this.albumIds !== this.previousAlbumIds) {
        this.previousAlbumIds = this.albumIds;
        this.page = 1;
        this.albumsList = [];
        this.displayedAlbumsList = [];
        localStorage.setItem("albumIds", this.albumIds);
      }

      this.loading = true;

      getAlbums(this.albumIds, this.page, this.limit)
        .then((response) => {
          const data = response.data;
          if (this.page === 1) {
            this.albumsList = data;
            this.displayedAlbumsList = this.albumsList.slice(0, this.perPage);
          } else {
            this.albumsList.push(...data);
            this.displayedAlbumsList = this.albumsList.slice(0, this.page * this.perPage);
          }
        })
        .catch((error) => {
          console.error("Ошибка при загрузке данных:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    loadMorePhotos() {
      this.page++;
      this.fetchPhotos();
    },

    setAlbumIds(newAlbumIds) {
      this.albumIds = newAlbumIds;
      localStorage.setItem("albumIds", newAlbumIds); // Сохраняем в localStorage
      this.fetchPhotos(); // Загружаем новые данные
    },
  },
});

export default useStore;
