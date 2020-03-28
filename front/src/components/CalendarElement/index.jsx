import React from "react";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";

import { isSameMonth, isFirstDay, isSameDay } from "../../services/calendar";

import * as styles from "./style.css";

const CalendarElement = ({ day }) => {

  const today = dayjs(); // 今日の日付情報取得

  // 今月以外の日付けの色変更
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  // 月の最初の1日だけ月情報を表示する(MM月1日)
  const format = isFirstDay(day) ? "M月D日" : "D";

  // propsで渡された値が今日かどうか
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        {/* propsが今日ならcssのclassをつける */}
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
