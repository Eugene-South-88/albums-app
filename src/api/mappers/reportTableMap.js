import {formatDateYMD} from "@/utils/helpers/dateHelper.js";

export const reportTableMap = (table) => {
  return table.map((element) => {
    return {
      ...element,
      DATE_CREATE: formatDateYMD(element.DATE_CREATE),
      CLOSEDATE: formatDateYMD(element.CLOSEDATE),
      STAGE_SEMANTIC_ID: stageSemanticMap[element.STAGE_SEMANTIC_ID],
      ASSIGNED_BY_ID: 'Иван Иванов',
      CREATED_BY_ID: 'Борис Моисеев'
    }
  })
}

const stageSemanticMap = {
  P: 'в работе',
  S: 'успешная',
  F: 'неуспешная',
}

