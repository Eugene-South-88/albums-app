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
      getReports(this.payload)
        .then((res) => {
          this.dealsList = reportTableMap(res.data.result, this.usersList);
        })
        .catch((err) => {
          console.error("Ошибка загрузки сделок:", err);
        })
    },

    getDealsStatus() {
      fetchStatusList()
        .then((res) => {
          this.dealStatusList = res;
        })
        .catch((err) => {
          console.error("Ошибка загрузки статусов:", err);
        })
    },

    getUsers() {
      fetchUsers()
        .then((res) => {
          this.usersList = res.data?.result || []
        })
        .catch((err) => {
          console.error("Ошибка загрузки пользователей:", err);
        })
    },
  },
});

export default useStore;
