declare const DAYS: string[];
declare const MONTHS: string[];
declare const CALENDAR_WEEKS = 6;
declare const zeroPad: (value: number | string, length: number) => string;
declare const getMonthDays: (month?: number, year?: number) => number;
declare const getMonthFirstDay: (month?: number, year?: number) => number;
declare const isSameMonth: (date: Date, basedate?: Date) => boolean;
declare const isSameDay: (date: Date, basedate?: Date) => boolean;
declare const isWeekend: (date: Date) => boolean;
declare const getDateISO: (date?: Date) => string;
declare const getPreviousMonth: (month: number, year: number) => {
    month: number;
    year: number;
};
declare const getNextMonth: (month: number, year: number) => {
    month: number;
    year: number;
};
declare const createCalendar: (month?: number, year?: number) => (string | number)[][];
declare const getCalendarTitle: (month: number, year: number) => string;
export { DAYS, MONTHS, CALENDAR_WEEKS, zeroPad, getMonthDays, getMonthFirstDay, getCalendarTitle, isSameMonth, isSameDay, isWeekend, getDateISO, getPreviousMonth, getNextMonth, createCalendar, };
