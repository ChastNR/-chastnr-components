import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('<Checkbox/>', () => {
  it('should match snapshot', () => {
    const checkbox = render(<Checkbox />);
    expect(checkbox.container.firstChild).toMatchSnapshot();
  });

  it('props should be equal', () => {
    const mockOnChange = jest.fn();

    const checkbox = render(<Checkbox checked disabled onChange={mockOnChange} />);
    const inputElement = checkbox.container.getElementsByTagName('input')[0];
    fireEvent.click(inputElement);

    expect(mockOnChange).toBeCalledTimes(1);
    expect(inputElement.checked).toBeTruthy();
    expect(inputElement.disabled).toBeTruthy();
  });
});
