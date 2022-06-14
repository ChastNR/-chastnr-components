import { render } from '@testing-library/react';
import { IOption } from '../types';
import { Options } from './Options';

describe('<Options />', () => {
  const options: IOption[] = [
    {
      title: 'Test',
      value: 'testValue',
    },
    {
      title: 'Test 2',
      value: 'testValue2',
    },
  ];

  const onClickMock = jest.fn();

  it('shoud equal snapshot', () => {
    const optionsComponent = render(<Options onClick={onClickMock} options={options} />);
    expect(optionsComponent.container.firstChild).toMatchSnapshot();
  });

  it('should render options', () => {
    const optionsComponent = render(<Options onClick={onClickMock} options={options} />);
    const optionComponents = optionsComponent.container.getElementsByTagName('button');
    expect(optionComponents.length).toBeGreaterThan(1);
  });

  it('should render options with checkboxes', () => {
    const optionsComponent = render(<Options isMulti onClick={onClickMock} options={options} />);
    const inputComponents = optionsComponent.container.getElementsByTagName('input');
    expect(inputComponents.length).toBeGreaterThan(1);
  });
});
