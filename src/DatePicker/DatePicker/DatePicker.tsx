import { PropsWithChildren, useCallback, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Calendar } from '../../base';
import { Control } from '../../Control';
import { createError } from '../../utils';
import { Picker } from '../Picker';

import './DatePicker.scss';

interface IDatePickerProps
  extends PropsWithChildren<{
    className?: string;
    date?: Date;
    disabled?: boolean;
    endDate?: Date;
    errorMessage?: React.ReactNode;
    format?: string;
    label: React.ReactNode;
    onSelect(date: Date): void;
    placeholder?: string;
    requiredMessage?: React.ReactNode;
    startDate?: Date;
  }> {}

export const DatePicker: React.FC<IDatePickerProps> = ({
  className,
  children,
  date,
  disabled,
  endDate,
  errorMessage,
  format = 'DD.MM.YYYY',
  label,
  onSelect,
  placeholder = 'дд.мм.гггг',
  requiredMessage,
  startDate,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [validate, setValidate] = useState(false);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }

    setValidate(true);
  }, []);

  const handleSelect = useCallback(
    (value: Date) => {
      setValidate(false);
      wrapperRef.current?.blur();
      onSelect(value);
    },
    [onSelect]
  );

  const error = createError({
    validate,
    requiredMessage,
    value: date,
    errorMessage,
  });

  const value = date ? dayjs(date).format(format) : placeholder;

  return (
    <Control
      className={className}
      content={
        <div className="dp__cnt">
          {children}
          <Calendar />
        </div>
      }
      disabled={disabled}
      error={error}
      hasValue={!!date}
      label={label}
      onBlur={handleBlur}
      ref={wrapperRef}
      required={!!requiredMessage}
    >
      <span className="dp__value">{value}</span>
      <div className="dp__cntr">
        <Picker date={date} endDate={endDate} onSelect={handleSelect} startDate={startDate} />
      </div>
    </Control>
  );
};
