import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SelectOption from './Option';
import { Option } from '../types';

const mockSetState = jest.fn();
const mockOnClick = jest.fn();

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');

  return {
    ...actualReact,
    useState: jest.fn().mockImplementation((value) => [value, mockSetState]),
  };
});

describe('<Option />', () => {
  const option: Option = {
    title: 'Test',
    value: 'testValue',
  };

  it('should equal snapshot', () => {
    const optionComponent = shallow(<SelectOption option={option} />);
    expect(toJson(optionComponent)).toMatchSnapshot();
  });

  it('props should equal', () => {
    const checked = true;
    const isMulti = true;

    const optionComponent = mount(
      <SelectOption checked={checked} isMulti={isMulti} option={option} />
    );

    const input = optionComponent.find('input');

    expect(input.props().checked).toEqual(checked);

    if (isMulti) {
      expect(input).toBeTruthy();
    }
  });

  it('click should call setChecked and onClick', () => {
    const optionComponent = mount(<SelectOption option={option} onClick={mockOnClick} />);

    const buttonElement = optionComponent.find('.slt__opt');
    buttonElement.simulate('click');

    expect(mockSetState).toBeCalledTimes(1);
    expect(mockOnClick).toBeCalledTimes(1);
  });

  it("click shouldn't call onClick", () => {
    const optionComponent = mount(<SelectOption option={option} />);

    const buttonElement = optionComponent.find('.slt__opt');
    buttonElement.simulate('click');

    expect(mockSetState).toBeCalled();
  });
});
