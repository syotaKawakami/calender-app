// action typeを定数宣言
export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

// actions
export const calendarSetMonth = payload => ({
  type: CALENDAR_SET_MONTH,
  payload
});