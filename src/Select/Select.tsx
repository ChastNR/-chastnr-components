/* eslint-disable jsx-a11y/control-has-associated-label */
import { useCallback, useRef, useState } from "react";

import { Arrow, createError } from "../base";
import Control from "../Control";
import { Option, Options } from "../Option";
import createSelectedItems from "./createSelectedItems";

import "./Select.scss";

interface SelectProps {
  disabled?: boolean;
  errorMessage?: React.ReactNode;
  isMulti?: boolean;
  label: React.ReactNode;
  onSelect: (value: Option | Option[]) => void;
  options: Option[];
  optionsSeparator?: string;
  requiredMessage?: React.ReactNode;
  selected?: Option[];
}

const Select: React.FC<SelectProps> = ({
  disabled,
  errorMessage,
  isMulti = false,
  label,
  onSelect,
  options,
  requiredMessage,
  optionsSeparator = ", ",
  selected = [],
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [validate, setValidate] = useState(false);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }

    setValidate(true);
  }, []);

  const handleSelect = (option: Option) => () => {
    if (isMulti) {
      const isOptionSelected = selected.some((o) => o.value === option.value);

      const selectedOptions = isOptionSelected
        ? selected.filter((o) => o.value !== option.value)
        : selected.concat(option);

      onSelect(selectedOptions);
    } else {
      wrapperRef.current?.blur();
      onSelect(option);
    }

    setValidate(false);
  };

  const selectedItems = createSelectedItems(options, selected, optionsSeparator);

  const hasValue = selected.length > 0;

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
