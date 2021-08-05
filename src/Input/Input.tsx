import { useCallback, useRef, useState } from "react";

import { createError } from "../base";
import Control from "../Control";
import { OptionsContainer } from "../Option";
import { InputTypes } from "../types";

import "./Input.scss";

interface InputProps {
  autoComplete?: "on" | "off";
  className?: string;
  content?: React.ReactNode;
  disabled?: boolean;
  errorMessage?: React.ReactNode;
  id?: string;
  isOptionsAvailable?: boolean;
  label: React.ReactNode;
  maxLength?: number;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onChange: (value: string) => void;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  options?: any[];
  placeholder?: string;
  regExp?: RegExp;
  renderOption?: (option: any, index: number) => React.ReactNode;
  requiredMessage?: React.ReactNode;
  startValidate?: boolean;
  type?: InputTypes;
  value: string;
}

const Input: React.FC<InputProps> = ({
  autoComplete = "off",
  children,
  className,
  content,
  disabled,
  errorMessage,
  id,
  isOptionsAvailable,
  label,
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  options = [],
  placeholder,
  regExp,
  renderOption,
  requiredMessage,
  startValidate = false,
  type = "text",
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [validate, setValidate] = useState(false);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      inputRef.current?.focus();

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      if (e.currentTarget.contains(e.relatedTarget as Node) || !inputRef.current) {
        return;
      }

      setValidate(true);

      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValidate(false);
      onChange(e.currentTarget.value);
    },
    [onChange]
  );

  const error = createError({
    validate,
    startValidate,
    requiredMessage,
    regExp,
    value,
    errorMessage,
  });

  const showOptions = (isOptionsAvailable || options.length > 0) && !!renderOption;

  return (
    <Control
      className={className}
      content={children}
      disabled={disabled}
      error={error}
      hasValue={!!value}
      label={label}
      name={name}
      onBlur={handleBlur}
      onFocus={handleFocus}
      required={!!requiredMessage}
    >
      <input
        autoComplete={autoComplete}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        ref={inputRef}
        required={!!requiredMessage}
        type={type}
        value={value}
      />
      {content}
      {showOptions && <OptionsContainer>{options.map(renderOption)}</OptionsContainer>}
    </Control>
  );
};

export default Input;
