import axios from "axios";

export const getReports = (payload) => {
  return axios.get(`https://dveri-bambit.bitrix24.ru/rest/80/hzb15sdx7tu5jsph/crm.deal.list.json?filter[>ID]=${payload.firstId}&filter[<ID]=${payload.lastId}&select[0]=ID&select[1]=TITLE&select[2]=STAGE_SEMANTIC_ID&select[3]=STAGE_ID&select[4]=ASSIGNED_BY_ID&select[5]=DATE_CREATE&select[6]=CREATED_BY_ID&select[7]=CATEGORY_ID&select[8]=CURRENCY_ID&select[9]=OPPORTUNITY&select[10]=CLOSEDATE&select[11]=SOURCE_ID&select[12]=UTM_SOURCE&select[13]=LEAD_ID`, {
    params: {}
  });
}

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
