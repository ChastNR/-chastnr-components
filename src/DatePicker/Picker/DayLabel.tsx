import { memo } from 'react';
import { DAYS } from './pickerConstants';

export const DayLabel = memo(() => (
  <div className="cldr__wd">
    {DAYS.map((d) => (
      <div key={d}>{d}</div>
    ))}
  </div>
));
