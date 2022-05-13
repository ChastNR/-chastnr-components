/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useCallback, useId, useRef, useState } from 'react';
import { IInputProps } from '../Input';
import { ISearchOption, OptionRenderComponent } from '../types';
import { debounce } from '../utils';
import { SearchInputComponent } from './SearchInputComponent';

interface ISearchInputProps extends IInputProps {
  isOptionsAvailable?: boolean;
  loadOptions: (value: string) => Promise<ISearchOption[]>;
  renderOption?: OptionRenderComponent;
  searchThreshold?: number;
  timeout?: number;
}

export const SearchInput: React.FC<ISearchInputProps> = ({
  loadOptions,
  onChange,
  renderOption: RenderComponent,
  searchThreshold = 3,
  timeout = 500,
  ...restProps
}) => {
  const searchInputId = useId();

  const inputEl = useRef<HTMLElement>(null);

  const [options, setOptions] = useState<ISearchOption[]>([]);

  const [inputValue, setInputValue] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadOptionsInternal = useCallback(
    debounce((value: string) => loadOptions(value).then(setOptions), timeout),
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
    (option: ISearchOption): void => {
      if (!inputEl.current) {
        inputEl.current = document.getElementById(searchInputId);
      }

      inputEl.current?.blur();

      setInputValue(option.label);

      onChange(`${option.value}`);

      setOptions([]);
    },
    [onChange, searchInputId]
  );

  const renderOption = useCallback(
    (option: ISearchOption): JSX.Element => {
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
      id={searchInputId}
      onChange={handleChange}
      options={options}
      renderOption={renderOption}
      value={inputValue}
    />
  );
};
