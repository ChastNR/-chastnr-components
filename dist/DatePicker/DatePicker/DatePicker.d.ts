/// <reference types="react" />
import "./DatePicker.scss";
declare type DateFormat = "DD.MM.YYYY";
interface DatePickerProps {
    date?: Date;
    disabled?: boolean;
    endDate?: Date;
    errorMessage?: React.ReactNode;
    format?: DateFormat;
    label: React.ReactNode;
    name?: string;
    onSelect(date: Date): void;
    placeholder?: string;
    requiredMessage?: React.ReactNode;
    startDate?: Date;
}
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
