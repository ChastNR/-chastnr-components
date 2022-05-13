import { useCallback } from 'react';
import { useDatePickerContext } from './context';
import { renderDay } from './Day';

interface ICalendarDatesProps {
  onSelect: (date: Date) => void;
}

export const CalendarDates: React.FC<ICalendarDatesProps> = ({ onSelect }) => {
  const { calendar, current, month, year, setCalendarDate } = useDatePickerContext();

  const onDayClick = useCallback(
    (value: Date) => {
      setCalendarDate(value);
      onSelect(value);
    },
    [onSelect, setCalendarDate]
  );

  return (
    <div className="cldr__tbl">{calendar.map(renderDay({ current, month, year, onDayClick }))}</div>
  );
};
