/// <reference types="react" />
import "./DatePicker.scss";
interface DatePickerProps {
    date?: Date;
    disabled?: boolean;
    endDate?: Date;
    errorMessage?: React.ReactNode;
    format?: string;
    label: React.ReactNode;
    onSelect(date: Date): void;
    placeholder?: string;
    requiredMessage?: React.ReactNode;
    startDate?: Date;
}
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
