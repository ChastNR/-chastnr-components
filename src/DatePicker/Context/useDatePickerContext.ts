import { useContext } from 'react';
import { DatePickerContext, IDatePickerState } from './DatePickerContext';

export const useDatePickerContext = (): IDatePickerState => {
  const context = useContext(DatePickerContext);

  if (!context) {
    throw new Error('');
  }

  return context;
};
