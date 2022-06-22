import { fireEvent, render } from '@testing-library/react';
import { CalendarDates } from './CalendarDates';

const mockOnSelect = jest.fn();

jest.mock('../Context', () => {
  const currentDate = new Date();

  return {
    useDatePickerContext: jest.fn().mockReturnValue({
      calendar: [[1]],
      current: currentDate,
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
      setCalendarDate: jest.fn(),
    }),
  };
});

describe('CalendarDates', () => {
  it('should render properly', () => {
    const calendarDates = render(<CalendarDates onSelect={mockOnSelect} />);

    expect(calendarDates.container.firstChild).toMatchSnapshot();
  });

  it('should call functions when day was clicked', () => {
    const calendarDates = render(<CalendarDates onSelect={mockOnSelect} />);

    const dayElement = calendarDates.container.querySelector('.cldr__day') as Element;

    fireEvent.click(dayElement, { bubbles: true });

    expect(mockOnSelect).toBeCalledTimes(1);
  });
});
