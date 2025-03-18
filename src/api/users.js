import axios from "axios";

export const fetchUsers = () => {
  return axios.get('https://dveri-bambit.bitrix24.ru/rest/80/yr0vrgpfvlyc2l66/user.get.json')
}