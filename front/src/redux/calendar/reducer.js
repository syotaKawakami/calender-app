import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions";

const day = dayjs();

const init = {
  year: day.year(),
  month: day.month() + 1 // 月は0~11のインデックスやから+1してる
}

const calendarReducer = (state = init, action) => { // state = init は引数が渡されなかったときに、代入されるデフォルト値
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
      default:
        return state;
  }
};

export default calendarReducer;