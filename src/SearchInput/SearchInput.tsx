/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useCallback, useRef, useState } from "react";

import { v4 as uuid } from "uuid";

import { InputProps } from "../Input";
import { OptionRenderComponent, SearchOption } from "../types";
import { debounce } from "../utils";
import SearchInputComponent from "./SearchInputComponent";

interface SearchInputProps extends InputProps {
  isOptionsAvailable?: boolean;
  loadOptions: (value: string) => Promise<SearchOption[]>;
  renderOption?: OptionRenderComponent;
  searchThreshold?: number;
  timeout?: number;
}

const SearchInput: React.FC<SearchInputProps> = ({
  loadOptions,
  onChange,
  renderOption: RenderComponent,
  searchThreshold = 3,
  timeout = 500,
  ...restProps
}) => {
  const searchInputId = useRef<string>(uuid());
  const inputEl = useRef<HTMLElement>(null);

  const [options, setOptions] = useState<SearchOption[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadOptionsInternal = useCallback(
    debounce((value: string) => {
      loadOptions(value).then(setOptions);
    }, timeout),
    [loadOptions, timeout]
  );

  const handleChange = useCallback(
    (value: string): void => {
      onChange(value);

      setOptions([]);

      if (value.length < searchThreshold) {
        return;
      }

      loadOptionsInternal(value);
    },
    [loadOptionsInternal, onChange, searchThreshold]
  );

  const optionHandleClick = useCallback(
    (value: string): void => {
      if (!inputEl.current) {
        inputEl.current = document.getElementById(searchInputId.current);
      }

      inputEl.current?.blur();

      onChange(value);

      setOptions([]);
    },
    [onChange]
  );

  const renderOption = useCallback(
    ({ label, value }: SearchOption): JSX.Element => {
      const handleClick = () => optionHandleClick(`${value}`);

      if (RenderComponent) {
        return (
          <RenderComponent
            className="search_option"
            key={value}
            label={label}
            onClick={handleClick}
          />
        );
      }

      return (
        <div className="search_option" key={value} onClick={handleClick}>
          <div>{label}</div>
        </div>
      );
    },
    [RenderComponent, optionHandleClick]
  );

  return (
    <SearchInputComponent
      {...restProps}
      id={searchInputId.current}
      onChange={handleChange}
      options={options}
      renderOption={renderOption}
    />
  );
};

export default SearchInput;
