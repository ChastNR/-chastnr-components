import { IOption } from '../types';
import { OptionsContainer } from './Container';
import { SelectOption } from './Option';

import './Options.scss';

interface IOptionsProps {
  options: IOption[];
  isMulti?: boolean;
  onClick: (value: IOption) => () => void;
}

export const Options: React.FC<IOptionsProps> = ({ options, onClick, isMulti = false }) => (
  <OptionsContainer>
    {options.map((o) => (
      <SelectOption
        className={o.className}
        disabled={o.disabled}
        isMulti={isMulti}
        key={o.value}
        onClick={onClick(o)}
        option={o}
      />
    ))}
  </OptionsContainer>
);
