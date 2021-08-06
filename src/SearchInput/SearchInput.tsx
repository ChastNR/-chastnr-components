import Input, { InputProps } from "../Input";
import { OptionsContainer } from "../Option";

interface SearchInputProps extends InputProps {
  isOptionsAvailable?: boolean;
  options?: any[];
  renderOption?: (option: any, index: number) => React.ReactNode;
}

const SearchInput: React.FC<SearchInputProps> = ({
  content,
  isOptionsAvailable,
  options = [],
  renderOption,
  ...restProps
}) => {
  const showOptions = (isOptionsAvailable || options.length > 0) && !!renderOption;

  return (
    <Input
      {...restProps}
      content={
        <>
          {content}
          {showOptions && <OptionsContainer>{options.map(renderOption)}</OptionsContainer>}
        </>
      }
    />
  );
};

export default SearchInput;
