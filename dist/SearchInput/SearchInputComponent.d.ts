/// <reference types="react" />
import { InputProps } from '../Input';
import { SearchOption } from '../types';
interface SearchInputProps extends InputProps {
    isOptionsAvailable?: boolean;
    options?: SearchOption[];
    renderOption?: (option: SearchOption, index: number) => React.ReactNode;
}
declare const SearchInputComponent: React.FC<SearchInputProps>;
export default SearchInputComponent;
