import { memo } from 'react';

import { DAYS } from './pickerConstants';

const DayLabel = memo(() => (
  <div className="cldr__wd">
    {DAYS.map((d) => (
      <div key={d}>{d}</div>
    ))}
  </div>
));

export default DayLabel;
