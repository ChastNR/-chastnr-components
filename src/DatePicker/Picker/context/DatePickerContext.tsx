import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import {
  createCalendar,
  getCalendarTitle,
  getNextMonth,
  getPreviousMonth,
} from '../pickerConstants';

interface IDatePickerInternalState {
  current: Date;
  month: number;
  year: number;
}

const setPrevMonth = ({
  current,
  month,
  year,
}: IDatePickerInternalState): IDatePickerInternalState => ({
  current,
  ...getPreviousMonth(month, year),
});

const setNextMonth = ({
  current,
  month,
  year,
}: IDatePickerInternalState): IDatePickerInternalState => ({
  current,
  ...getNextMonth(month, year),
});

interface IDatePickerState extends IDatePickerInternalState {
  readonly calendarTitle: string;
  readonly calendar: (string | number)[][];
  readonly prevDisabled: boolean;
  readonly nextDisabled: boolean;
  prevMonth(): void;
  nextMonth(): void;
  setCalendarDate(value: Date): void;
}

const DatePickerContext = createContext<IDatePickerState | undefined>(undefined);

interface IDatePickerContextProviderProps
  extends PropsWithChildren<{
    date?: Date;
    endDate?: Date;
    startDate?: Date;
  }> {}

export const useDatePickerContext = (): IDatePickerState => {
  const context = useContext(DatePickerContext);

  if (!context) {
    throw new Error('');
  }

  return context;
};

export const DatePickerContextProvider: React.FC<IDatePickerContextProviderProps> = ({
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

  const prevMonth = useCallback(() => setState(setPrevMonth), []);

  const nextMonth = useCallback(() => setState(setNextMonth), []);

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
        ...state,
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
