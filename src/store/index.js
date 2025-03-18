import { defineStore } from "pinia";
import {fetchStatusList, getReports} from "@/api/reports.js";
import {reportTableMap} from "@/api/mappers/reportTableMap.js";
import {fetchUsers} from "@/api/users.js";

const useStore = defineStore("store", {
  state: () => ({
    payload: {
      firstId: 2,
      lastId: 23560,
    },
    dealsList: [],
    dealStatusList: [],
    usersList: [],
    loading: true,
  }),
  actions: {
    getDealsList() {
      this.loading = true;
      getReports(this.payload)
        .then((res) => {
          this.dealsList = reportTableMap(res.data.result);
        })
        .catch((err) => {
          console.error("Ошибка загрузки сделок:", err);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    getDealsStatus() {
      this.loading = true;
      fetchStatusList()
        .then((res) => {
          this.dealStatusList = res;
        })
        .catch((err) => {
          console.error("Ошибка загрузки статусов:", err);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    getUsers() {
      this.loading = true;
      fetchUsers()
        .then((res) => {
          this.usersList = Array.isArray(res) ? res : res.data.items || [];
          console.log("users", this.usersList);
        })
        .catch((err) => {
          console.error("Ошибка загрузки пользователей:", err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});

export default useStore;
