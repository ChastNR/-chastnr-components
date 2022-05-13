import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Switch } from './Switch';

describe('<Switch/>', () => {
  it('should match snapshot', () => {
    const switchComponent = shallow(<Switch />);
    expect(toJson(switchComponent)).toMatchSnapshot();
  });

  it('props should be equal', () => {
    const name = 'testName';
    const checked = true;
    const onChange = jest.fn();

    const switchComponent = mount(<Switch checked={checked} onChange={onChange} name={name} />);

    const props = switchComponent.props();

    expect(props.name).toEqual(name);
    expect(props.checked).toEqual(checked);
  });
});
