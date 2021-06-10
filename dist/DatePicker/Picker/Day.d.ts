/// <reference types="react" />
interface DayProps {
    current: Date;
    month: number;
    year: number;
    onDayClick: (date: Date) => void;
}
declare const renderDay: ({ current, month, year, onDayClick }: DayProps) => (date: (string | number)[]) => JSX.Element;
export default renderDay;
