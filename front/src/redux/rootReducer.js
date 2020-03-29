import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

// reducerを一箇所で管理・まとめる
const rootReducer = combineReducers({ calendar: calendarReducer });


export default rootReducer;