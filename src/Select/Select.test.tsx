import { render } from '@testing-library/react';
import { IOption } from '../types';
import { Select } from './Select';

describe('<Select/>', () => {
  const options: IOption[] = [];
  const onSelectMock = jest.fn();

  it('should match snapshot', () => {
    const label = 'Test Select';
    const disabled = true;
    const errorMessage = 'Error text';
    const requiredMessage = 'Required text';
    const isMulti = true;
    const selected = [options[0]];

    const select = render(
      <Select
        disabled={disabled}
        errorMessage={errorMessage}
        isMulti={isMulti}
        label={label}
        onSelect={onSelectMock}
        options={options}
        requiredMessage={requiredMessage}
        selected={selected}
      />
    );

    expect(select.container.firstChild).toMatchSnapshot();
  });

  it('should render options', () => {
    const select = render(<Select label="Test Select" onSelect={onSelectMock} options={options} />);
    const optionsComponent = select.container.getElementsByClassName('slt__opts')[0];
    expect(optionsComponent).toBeTruthy();
  });
});
