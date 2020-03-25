import React from "react";
import { GridList } from "@material-ui/core";
import * as styles from "./style.css";


const createCalendar = () => {
  return Array(35)
  .fill(0)
  .map((_, i) => i);
};

const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li>
            <div className={styles.element}>{c}</div>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
