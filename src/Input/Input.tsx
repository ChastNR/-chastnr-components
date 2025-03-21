import { PropsWithChildren, useCallback, useRef, useState } from 'react';
import { Control } from '../Control';
import { InputTypes } from '../types';
import { createError } from '../utils';

import './Input.scss';

export interface IInputProps
  extends PropsWithChildren<{
    autoComplete?: 'on' | 'off';
    className?: string;
    content?: React.ReactNode;
    disabled?: boolean;
    errorMessage?: React.ReactNode;
    id?: string;
    label: React.ReactNode;
    maxLength?: number;
    name?: string;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onChange: (value: string) => void;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    placeholder?: string;
    regExp?: RegExp;
    requiredMessage?: React.ReactNode;
    startValidate?: boolean;
    type?: InputTypes;
    value: string;
  }> {}

export const Input: React.FC<IInputProps> = ({
  autoComplete = 'off',
  children,
  className,
  content,
  disabled,
  errorMessage,
  id,
  label,
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  regExp,
  requiredMessage,
  startValidate = false,
  type = 'text',
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [validate, setValidate] = useState(false);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      inputRef.current?.focus();
      onFocus?.(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      if (e.currentTarget.contains(e.relatedTarget as Node) || !inputRef.current) {
        return;
      }

      setValidate(true);
      onBlur?.(e);
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
    </Control>
  );
};
