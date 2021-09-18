/// <reference types="react" />
import { InputProps } from "../Input";
interface SearchInputProps extends InputProps {
    isOptionsAvailable?: boolean;
    options?: any[];
    renderOption?: (option: any, index: number) => React.ReactNode;
}
declare const SearchInputComponent: React.FC<SearchInputProps>;
export default SearchInputComponent;
