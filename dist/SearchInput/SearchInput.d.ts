import { Component } from "react";
import { InputProps } from "../Input";
import { OptionRenderComponent, SearchOption } from "../types";
interface SearchInputProps extends InputProps {
    searchThreshold?: number;
    isOptionsAvailable?: boolean;
    timeout?: number;
    loadOptions: (value: string) => Promise<SearchOption[]>;
    renderOption?: OptionRenderComponent;
}
interface SearchInputState {
    options: SearchOption[];
}
declare class SearchInput extends Component<SearchInputProps, SearchInputState> {
    private readonly searchInputId;
    private inputEl;
    loadOptions: (value: string) => void;
    constructor(props: Readonly<SearchInputProps>);
    handleChange(value: string): void;
    optionHandleClick(value: string): void;
    renderOption({ label, value }: SearchOption): JSX.Element;
    render(): JSX.Element;
}
export default SearchInput;
