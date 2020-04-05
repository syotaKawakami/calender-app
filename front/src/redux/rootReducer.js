import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";

// reducerを一箇所で管理・まとめる
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer
});


export default rootReducer;