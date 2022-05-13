import { memo } from 'react';
import { ReactComponent as CalendarSvg } from './calendar.svg';

import './Calendar.scss';

const Calendar = memo(() => (
  <div className="cldr__icon">
    <span>
      <span>
        <span>
          <CalendarSvg />
        </span>
      </span>
    </span>
  </div>
));

export { Calendar, CalendarSvg };
