import {formatDateYMD} from "@/utils/helpers/dateHelper.js";

export const reportTableMap = (table, users, status) => {
  const dealStatuses = status.filter(item => item.ENTITY_ID.startsWith("DEAL_STAGE"));
  const sources = status.filter(item => item.ENTITY_ID === "SOURCE");

  return table.map((element) => {
    const assigneeUser = users.find((user) => user.ID === element.ASSIGNED_BY_ID) || '';
    const authorUser = users.find((user) => user.ID === element.CREATED_BY_ID) || '';

    const dealStatus = dealStatuses.find((status) => status.STATUS_ID === element.STAGE_ID) || '';
    const source = sources.find((status) => status.STATUS_ID === element.SOURCE_ID) || '';

    return {
      ...element,
      DATE_CREATE: formatDateYMD(element.DATE_CREATE),
      CLOSEDATE: formatDateYMD(element.CLOSEDATE),
      STAGE_SEMANTIC_ID: stageSemanticMap[element.STAGE_SEMANTIC_ID],
      ASSIGNED_BY_ID: `${assigneeUser?.LAST_NAME} ${assigneeUser?.NAME}`,
      CREATED_BY_ID: `${authorUser?.LAST_NAME} ${authorUser?.NAME}`,
      STAGE_ID: dealStatus?.NAME || '',
      OPPORTUNITY: Number(element.OPPORTUNITY) === 0
        ? ''
        : new Intl.NumberFormat('ru-RU').format(Number(element.OPPORTUNITY)), // Форматируем число
      SOURCE_ID: source?.NAME || ''
    };
  });
};





//полное отображение ответственный

const stageSemanticMap = {
  P: 'в работе',
  S: 'успешная',
  F: 'неуспешная',
}

