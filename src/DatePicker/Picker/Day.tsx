/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "clsx";

import { mouseDownPrevent } from "../../utils";
import { isSameDay, isSameMonth, isWeekend } from "./pickerConstants";

const createDate = (date: (string | number)[]) => new Date(date.join("-"));

interface DayProps {
  current: Date;
  month: number;
  year: number;
  onDayClick: (date: Date) => void;
}

const renderDay =
  ({ current, month, year, onDayClick }: DayProps) =>
  (date: (string | number)[]): JSX.Element => {
    const internalDate = createDate(date);

    const className = classNames("cldr__day", {
      current: isSameDay(internalDate, current),
      inmonth: isSameMonth(internalDate, new Date(`${year}-${month}-1`)),
      weekend: isWeekend(internalDate),
    });

    const handleClick = () => onDayClick(internalDate);

    return (
      <div
        className={className}
        // key={getDateISO(internalDate)}
        key={+internalDate}
        onClick={handleClick}
        onMouseDown={mouseDownPrevent}
      >
        {internalDate.getDate()}
      </div>
    );
  };

export default renderDay;
