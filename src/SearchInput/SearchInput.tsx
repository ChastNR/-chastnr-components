/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useCallback, useRef, useState } from 'react';

import { InputProps } from '../Input';
import { OptionRenderComponent, SearchOption } from '../types';
import { debounce, uid } from '../utils';
import SearchInputComponent from './SearchInputComponent';

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
  const searchInputId = useRef<string>(uid());

  const inputEl = useRef<HTMLElement>(null);

  const [options, setOptions] = useState<SearchOption[]>([]);

  const [inputValue, setInputValue] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadOptionsInternal = useCallback(
    debounce((value: string) => {
      loadOptions(value).then(setOptions);
    }, timeout),
    [loadOptions, timeout]
  );

  const handleChange = useCallback(
    (value: string): void => {
      setInputValue(value);

      setOptions([]);

      if (value.length < searchThreshold) {
        return;
      }

      loadOptionsInternal(value);
    },
    [loadOptionsInternal, searchThreshold]
  );

  const optionHandleClick = useCallback(
    (option: SearchOption): void => {
      if (!inputEl.current) {
        inputEl.current = document.getElementById(searchInputId.current);
      }

      inputEl.current?.blur();

      setInputValue(option.label);

      onChange(`${option.value}`);

      setOptions([]);
    },
    [onChange]
  );

  const renderOption = useCallback(
    (option: SearchOption): JSX.Element => {
      const handleClick = () => optionHandleClick(option);

      if (RenderComponent) {
        return (
          <RenderComponent
            className="search_option"
            key={option.value}
            label={option.label}
            onClick={handleClick}
          />
        );
      }

      return (
        <div className="search_option" key={option.value} onClick={handleClick}>
          <div>{option.label}</div>
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
      value={inputValue}
    />
  );
};

export default SearchInput;
