import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Option } from './Option';
import Options from './Options';

describe('<Options />', () => {
  const options: Option[] = [
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
    const optionsComponent = shallow(<Options onClick={onClickMock} options={options} />);
    expect(toJson(optionsComponent)).toMatchSnapshot();
  });

  it('should render options', () => {
    const optionsComponent = mount(<Options onClick={onClickMock} options={options} />);
    const optionComponents = optionsComponent.find('button');
    expect(optionComponents.length).toBeGreaterThan(1);
  });

  it('should render options with checkboxes', () => {
    const optionsComponent = mount(<Options isMulti onClick={onClickMock} options={options} />);
    const inputComponents = optionsComponent.find('input');
    expect(inputComponents.length).toBeGreaterThan(1);
  });
});
