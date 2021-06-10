import { memo } from "react";

import { ReactComponent as CalendarIcon } from "./calendar.svg";

import "./Calendar.scss";

const Calendar = memo(() => (
  <div className="cldr__icon">
    <span>
      <span>
        <span>
          <CalendarIcon />
        </span>
      </span>
    </span>
  </div>
));

export default Calendar;
