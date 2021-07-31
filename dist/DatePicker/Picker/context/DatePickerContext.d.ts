/// <reference types="react" />
interface DatePickerInternalState {
    current: Date;
    month: number;
    year: number;
}
interface DatePickerState extends DatePickerInternalState {
    readonly calendarTitle: string;
    readonly calendar: (string | number)[][];
    readonly prevDisabled: boolean;
    readonly nextDisabled: boolean;
    prevMonth(): void;
    nextMonth(): void;
    setCalendarDate(value: Date): void;
}
interface DatePickerContextProviderProps {
    date?: Date;
    endDate?: Date;
    startDate?: Date;
}
export declare const useDatePickerContext: () => DatePickerState;
export declare const DatePickerContextProvider: React.FC<DatePickerContextProviderProps>;
export {};
