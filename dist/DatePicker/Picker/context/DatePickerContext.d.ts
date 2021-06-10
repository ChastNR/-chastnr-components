/// <reference types="react" />
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
interface DatePickerContextProviderProps {
    date?: Date;
    endDate?: Date;
    startDate?: Date;
}
export declare const useDatePickerContext: () => DatePickerState;
export declare const DatePickerContextProvider: React.FC<DatePickerContextProviderProps>;
export {};
