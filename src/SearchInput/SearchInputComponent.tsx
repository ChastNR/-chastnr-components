import { IInputProps, Input } from '../Input';
import { OptionsContainer } from '../Option';
import { ISearchOption } from '../types';

interface ISearchInputProps extends IInputProps {
  isOptionsAvailable?: boolean;
  options?: ISearchOption[];
  renderOption?: (option: ISearchOption, index: number) => React.ReactNode;
}

export const SearchInputComponent: React.FC<ISearchInputProps> = ({
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
