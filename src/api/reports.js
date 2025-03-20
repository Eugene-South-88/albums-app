import axios from "axios";

export const getReports = (payload) => {
  const baseUrl = "https://dveri-bambit.bitrix24.ru/rest/80/hzb15sdx7tu5jsph/crm.deal.list.json";


  const params = {
    ...(payload.firstId && { "filter[>ID]": payload.firstId }),
    ...(payload.lastId && { "filter[<ID]": payload.lastId })
  };


  const selectFields = [
    "ID", "TITLE", "STAGE_SEMANTIC_ID", "STAGE_ID", "ASSIGNED_BY_ID",
    "DATE_CREATE", "CREATED_BY_ID", "CATEGORY_ID", "CURRENCY_ID",
    "OPPORTUNITY", "CLOSEDATE", "SOURCE_ID", "UTM_SOURCE", "LEAD_ID"
  ];


  const selectParams = selectFields.map((field, index) => `select[${index}]=${field}`).join("&");

  const finalUrl = `${baseUrl}?${selectParams}`;

  return axios.get(finalUrl, { params });
};


export const fetchDealFields =()=> {
  return axios.get('https://dveri-bambit.bitrix24.ru/rest/80/3e7e3qrnoi3fo818/crm.deal.fields.json')
    .then(({data}) => {
      if (!data.result) {
        throw new Error("Неверный формат ответа");
      }

      return Object.entries(data.result).map(([key, value]) => ({
        key,
        title: value.title
      }));
    })
    .catch(error => {
      console.error("Ошибка при получении данных:", error);
      return [];
    });
}

export const fetchStatusList =()=>{
  return axios.get('https://dveri-bambit.bitrix24.ru/rest/80/94xsxq9qxbd1vh7f/crm.status.list.json ')
}
