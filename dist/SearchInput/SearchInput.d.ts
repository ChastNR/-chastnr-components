/// <reference types="react" />
import { InputProps } from '../Input';
import { OptionRenderComponent, SearchOption } from '../types';
interface SearchInputProps extends InputProps {
    isOptionsAvailable?: boolean;
    loadOptions: (value: string) => Promise<SearchOption[]>;
    renderOption?: OptionRenderComponent;
    searchThreshold?: number;
    timeout?: number;
}
declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
