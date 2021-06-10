const DAYS = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const CALENDAR_WEEKS = 6;

const zeroPad = (value: number | string, length: number): string =>
  `${value}`.padStart(length, "0");

const THIS_YEAR = +new Date().getFullYear();

const THIS_MONTH = +new Date().getMonth() + 1;

const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR): number => {
  const months30 = [4, 6, 9, 11];

  const leapYear = year % 4 === 0;

  if (month === 2) {
    return leapYear ? 29 : 28;
  }

  return months30.includes(month) ? 30 : 31;
};

const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR): number =>
  +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;

const isSameMonth = (date: Date, basedate = new Date()): boolean => {
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();

  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();

  return +basedateMonth === +dateMonth && +basedateYear === +dateYear;
};

const isSameDay = (date: Date, basedate = new Date()): boolean => {
  const basedateDate = basedate.getDate();
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();

  const dateDate = date.getDate();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();

  return (
    +basedateDate === +dateDate && +basedateMonth === +dateMonth && +basedateYear === +dateYear
  );
};

const isWeekend = (date: Date): boolean => date.getDay() === 6 || date.getDay() === 0;

const getDateISO = (date = new Date()): string =>
  [date.getFullYear(), zeroPad(+date.getMonth() + 1, 2), zeroPad(+date.getDate(), 2)].join("-");

const getPreviousMonth = (
  month: number,
  year: number
): {
  month: number;
  year: number;
} => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;

  return { month: prevMonth, year: prevMonthYear };
};

const getNextMonth = (
  month: number,
  year: number
): {
  month: number;
  year: number;
} => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;

  return { month: nextMonth, year: nextMonthYear };
};

const createCalendar = (month = THIS_MONTH, year = THIS_YEAR): (string | number)[][] => {
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);

  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth = CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(month, year);
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);

  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((_, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)];
  });

  const thisMonthDates = [...new Array(monthDays)].map((_, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((_, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });

  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};

const getCalendarTitle = (month: number, year: number): string => {
  const monthName = MONTHS[Math.max(0, Math.min(month - 1, 11))];
  return `${monthName} ${year}`;
};

export {
  DAYS,
  MONTHS,
  CALENDAR_WEEKS,
  zeroPad,
  getMonthDays,
  getMonthFirstDay,
  getCalendarTitle,
  isSameMonth,
  isSameDay,
  isWeekend,
  getDateISO,
  getPreviousMonth,
  getNextMonth,
  createCalendar,
};
