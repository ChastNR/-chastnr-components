/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from "react";

import { v4 as uuid } from "uuid";

import { InputProps } from "../Input";
import { OptionRenderComponent, SearchOption } from "../types";
import { debounce } from "../utils";
import SearchInputComponent from "./SearchInputComponent";

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

class SearchInput extends Component<SearchInputProps, SearchInputState> {
  private readonly searchInputId: string = uuid();

  private inputEl: HTMLElement | null = null;

  loadOptions = debounce((value: string) => {
    this.props.loadOptions(value).then((options) => {
      this.setState({
        options,
      });
    });
  }, this.props.timeout || 500);

  constructor(props: Readonly<SearchInputProps>) {
    super(props);

    this.state = {
      options: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.optionHandleClick = this.optionHandleClick.bind(this);
    this.renderOption = this.renderOption.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
  }

  handleChange(value: string): void {
    const { searchThreshold = 3, onChange } = this.props;

    onChange(value);

    this.setState({
      options: [],
    });

    if (value.length < searchThreshold) {
      return;
    }

    this.loadOptions(value);
  }

  optionHandleClick(value: string): void {
    const { onChange } = this.props;

    if (!this.inputEl) {
      this.inputEl = document.getElementById(this.searchInputId);
    }

    this.inputEl?.blur();

    onChange(value);

    this.setState({
      options: [],
    });
  }

  renderOption({ label, value }: SearchOption): JSX.Element {
    const { renderOption: RenderComponent } = this.props;

    const handleClick = () => this.optionHandleClick(`${value}`);

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
  }

  render(): JSX.Element {
    const { options } = this.state;

    return (
      <SearchInputComponent
        {...this.props}
        id={this.searchInputId}
        onChange={this.handleChange}
        options={options}
        renderOption={this.renderOption}
      />
    );
  }
}

export default SearchInput;
