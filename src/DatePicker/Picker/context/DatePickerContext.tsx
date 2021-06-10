import { createContext, useCallback, useContext, useState } from "react";

import {
  createCalendar,
  getCalendarTitle,
  getNextMonth,
  getPreviousMonth,
} from "../pickerConstants";

interface DatePickerState {
  current: Date;
  month: number;
  year: number;
  readonly calendarTitle: string;
  readonly calendar: (string | number)[][];
  readonly prevDisabled: boolean;
  readonly nextDisabled: boolean;
  prevMonth(): void;
  nextMonth(): void;
  setCalendarDate(value: Date): void;
}

const DatePickerContext = createContext<DatePickerState | undefined>(undefined);

interface DatePickerContextProviderProps {
  date?: Date;
  endDate?: Date;
  startDate?: Date;
}

export const useDatePickerContext = (): DatePickerState => {
  const context = useContext(DatePickerContext);

  if (!context) {
    throw new Error("");
  }

  return context;
};

export const DatePickerContextProvider: React.FC<DatePickerContextProviderProps> = ({
  children,
  date = new Date(),
  startDate,
  endDate,
}) => {
  const [state, setState] = useState({
    current: date,
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  });

  const calendarTitle = getCalendarTitle(state.month, state.year);

  const calendar = createCalendar(
    state.month || state.current.getMonth() + 1,
    state.year || state.current.getFullYear()
  );

  const prevDisabled = !!startDate && state.month === startDate.getMonth() + 1;

  const nextDisabled = !!endDate && state.month === endDate.getMonth() + 1;

  const prevMonth = useCallback(() => {
    setState(({ month, year, current }) => {
      const { month: newMonth, year: newYear } = getPreviousMonth(month, year);

      return {
        current,
        month: newMonth,
        year: newYear,
      };
    });
  }, []);

  const nextMonth = useCallback(() => {
    setState(({ month, year, current }) => {
      const { month: newMonth, year: newYear } = getNextMonth(month, year);

      return {
        current,
        month: newMonth,
        year: newYear,
      };
    });
  }, []);

  const setCalendarDate = useCallback((value: Date) => {
    setState({
      current: value,
      month: value.getMonth() + 1,
      year: value.getFullYear(),
    });
  }, []);

  return (
    <DatePickerContext.Provider
      value={{
        current: state.current,
        month: state.month,
        year: state.year,
        calendarTitle,
        calendar,
        prevDisabled,
        nextDisabled,
        nextMonth,
        prevMonth,
        setCalendarDate,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};
