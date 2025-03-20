import {formatDateYMD} from "@/utils/helpers/dateHelper.js";

export const reportTableMap = (table, users) => {
  return table.map((element) => {
    const assigneeUser = users.find((user) => user.ID === element.ASSIGNED_BY_ID) || '';
    const authorUser = users.find((user) => user.ID === element.CREATED_BY_ID) || '';




    return {
      ...element,
      DATE_CREATE: formatDateYMD(element.DATE_CREATE),
      CLOSEDATE: formatDateYMD(element.CLOSEDATE),
      STAGE_SEMANTIC_ID: stageSemanticMap[element.STAGE_SEMANTIC_ID],
      ASSIGNED_BY_ID: `${assigneeUser?.LAST_NAME} ${assigneeUser?.NAME}`,
      CREATED_BY_ID: `${authorUser?.LAST_NAME} ${authorUser?.NAME}`,
      STAGE_ID: '123'
    }
  })
}

const stageSemanticMap = {
  P: 'в работе',
  S: 'успешная',
  F: 'неуспешная',
}

