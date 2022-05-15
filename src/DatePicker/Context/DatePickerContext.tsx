import { createContext } from 'react';

export interface IDatePickerInternalState {
  current: Date;
  month: number;
  year: number;
}

export interface IDatePickerState extends IDatePickerInternalState {
  readonly calendarTitle: string;
  readonly calendar: (string | number)[][];
  readonly prevDisabled: boolean;
  readonly nextDisabled: boolean;
  prevMonth(): void;
  nextMonth(): void;
  setCalendarDate(value: Date): void;
}

export const DatePickerContext = createContext<IDatePickerState | undefined>(undefined);
