/// <reference types="react" />
import "./Picker.scss";
interface PickerProps {
    date?: Date;
    startDate?: Date;
    endDate?: Date;
    onSelect: (date: Date) => void;
}
declare const Picker: React.FC<PickerProps>;
export default Picker;
