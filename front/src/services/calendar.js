import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");


export const createCalendar = month => {
  // 今月の最初の日を取得
  const firstDay = getMonth(month);
  // 最初の日は何曜日かIndexを取得
  const firstDayIndex = firstDay.day();

  return Array(35) // 35個の要素を持った配列作成（コンストラクタ呼び出し）
    .fill(0) // 配列の中身を引数で埋める（今回は全部0で埋めてる）
    .map((_, i) => {
      // mapは新しい配列を作って返す
      // ↑ _ にはArray(35)の中身が1つずつ入る。直前に0で埋めてるから今回は0しか入らない。第2引数のiにはindex番号が入る
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day"); // 引数は時間を指定する。これは曜日。

      return day; // 元要素を加工してできた値をmapに返してる
    });
};

// 引数が同じ日か判断 true or false
export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};
// 引数が同じ月か判断 true of false
export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};
// 1日かどうか true or false
export const isFirstDay = day => day.date() === 1;

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};


export const getNextMonth = month => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = month => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};

export const formatMonth = day => ({
  month: day.month() + 1,
  year: day.year()
});