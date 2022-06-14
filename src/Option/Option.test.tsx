import { SelectOption } from './Option';
import { IOption } from '../types';
import { fireEvent, render } from '@testing-library/react';

describe('<Option />', () => {
  const option: IOption = {
    title: 'Test',
    value: 'testValue',
  };

  it('should equal snapshot', () => {
    const optionComponent = render(<SelectOption option={option} />);
    expect(optionComponent.container.firstChild).toMatchSnapshot();
  });

  it('props should equal', () => {
    const optionComponent = render(<SelectOption checked isMulti option={option} />);
    const input = optionComponent.container.getElementsByTagName('input')[0];

    expect(input).toBeTruthy();
    expect(input.checked).toBeTruthy();
  });

  it('click should call setChecked and onClick', () => {
    const mockOnClick = jest.fn();

    const component = <SelectOption option={option} isMulti onClick={mockOnClick} />;
    const optionComponent = render(component);
    const buttonElement = optionComponent.container.getElementsByTagName('button')[0];
    const inputElement = optionComponent.container.getElementsByTagName('input')[0];
    fireEvent.click(buttonElement);

    expect(inputElement.checked).toBeTruthy();
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
