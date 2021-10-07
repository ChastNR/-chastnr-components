import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Option } from '../Option';
import Select from './Select';

describe('<Select/>', () => {
  const options: Option[] = [];
  const onSelectMock = jest.fn();

  it('should match snapshot', () => {
    const select = shallow(
      <Select label="Test Select" onSelect={onSelectMock} options={options} />
    );
    expect(toJson(select)).toMatchSnapshot();
  });

  it('should render options', () => {
    const select = mount(<Select label="Test Select" onSelect={onSelectMock} options={options} />);
    const optionsComponent = select.find('Options');
    expect(optionsComponent).toBeTruthy();
  });

  it('props should be equal', () => {
    const label = 'Test Select';
    const disabled = true;
    const name = 'testName';
    const errorMessage = 'Error text';
    const requiredMessage = 'Required text';
    const isMulti = true;
    const selected = [options[0]];

    const select = mount(
      <Select
        disabled={disabled}
        errorMessage={errorMessage}
        isMulti={isMulti}
        label={label}
        name={name}
        onSelect={onSelectMock}
        options={options}
        requiredMessage={requiredMessage}
        selected={selected}
      />
    );

    expect(select.props().label).toEqual(label);
    expect(select.props().disabled).toEqual(disabled);
    expect(select.props().errorMessage).toEqual(errorMessage);
    expect(select.props().isMulti).toEqual(isMulti);
    expect(select.props().requiredMessage).toEqual(requiredMessage);
    expect(select.props().selected.length).toEqual(1);
  });
});
