import { render } from '@testing-library/react';
import { DatePicker } from './DatePicker';

describe('<DatePicker />', () => {
  const mockOnSelect = jest.fn();

  it('should match snapshot', () => {
    const control = render(<DatePicker onSelect={mockOnSelect} label="testLabel" />);
    expect(control.container.firstChild).toMatchSnapshot();
  });
});
