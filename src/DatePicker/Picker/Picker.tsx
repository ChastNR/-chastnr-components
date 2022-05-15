import { CalendarDates } from '../CalendarDates';
import { DatePickerContextProvider } from '../Context';
import { DayLabel } from '../DayLabel';
import { PickerHeader } from '../PickerHeader';

import './Picker.scss';

interface IPickerProps {
  date?: Date;
  startDate?: Date;
  endDate?: Date;
  onSelect: (date: Date) => void;
}

export const Picker: React.FC<IPickerProps> = ({
  date = new Date(),
  startDate,
  endDate,
  onSelect,
}) => (
  <DatePickerContextProvider date={date} endDate={endDate} startDate={startDate}>
    <div className="cldr">
      <div>
        <div className="cldr__wrp">
          <div>
            <div className="cldr__cntr">
              <div>
                <div>
                  <PickerHeader />
                  <DayLabel />
                  <CalendarDates onSelect={onSelect} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DatePickerContextProvider>
);
