import { useCallback } from 'react';

import { useDatePickerContext } from './context';
import renderDay from './Day';

interface CalendarDatesProps {
  onSelect: (date: Date) => void;
}

const CalendarDates: React.FC<CalendarDatesProps> = ({ onSelect }) => {
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

export default CalendarDates;
