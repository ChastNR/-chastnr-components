/* eslint-disable jsx-a11y/control-has-associated-label */
import { useCallback, useRef, useState } from 'react';

import { Arrow } from '../base';
import Control from '../Control';
import { Options } from '../Option';
import { Option } from '../types';
import {
  createError,
  createSelectedItems,
  createSelectedOptions,
  createSelectedValue,
} from '../utils';

import './Select.scss';

interface SelectProps {
  disabled?: boolean;
  errorMessage?: React.ReactNode;
  isMulti?: boolean;
  label: React.ReactNode;
  onSelect: ((value: Option) => void) | ((value: Option[]) => void);
  options: Option[];
  optionsSeparator?: string;
  requiredMessage?: React.ReactNode;
  selected?: Option | Option[];
}

const Select: React.FC<SelectProps> = ({
  disabled,
  errorMessage,
  isMulti = false,
  label,
  onSelect,
  options,
  requiredMessage,
  optionsSeparator = ', ',
  selected,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [validate, setValidate] = useState(false);

  const internalSelected = createSelectedValue(selected, isMulti);

  console.log('Select - internalSelected: ', internalSelected);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }

    setValidate(true);
  }, []);

  const handleSelect = (option: Option) => () => {
    if (isMulti) {
      const selectedOptions = createSelectedOptions(internalSelected, option);
      (onSelect as (value: Option[]) => void)(selectedOptions);
    } else {
      wrapperRef.current?.blur();
      (onSelect as (value: Option) => void)(option);
    }

    setValidate(false);
  };

  const selectedItems = createSelectedItems(options, internalSelected, optionsSeparator);

  const hasValue = internalSelected.length > 0;

  const error = createError({
    validate,
    requiredMessage,
    value: hasValue,
    errorMessage,
  });

  return (
    <Control
      className="slt"
      content={<Arrow />}
      disabled={disabled}
      error={error}
      hasValue={hasValue}
      label={label}
      onBlur={handleBlur}
      ref={wrapperRef}
      required={!!requiredMessage}
    >
      <div className="slt__value">{selectedItems}</div>
      <Options isMulti={isMulti} onClick={handleSelect} options={options} />
    </Control>
  );
};

export default Select;
