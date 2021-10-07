import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Control from './Control';

describe('<Control />', () => {
  it('should render', () => {
    const control = shallow(<Control hasValue={false} label="testLabel" />);
    expect(toJson(control)).toMatchSnapshot();
  });

  it('props should be equal', () => {
    const className = 'testClassName';
    const content = 'testContent';
    const name = 'testName';
    const disabled = true;
    const error = 'testError';
    const label = 'testLabel';
    const required = true;
    const hasValue = true;
    const role = 'textbox';

    const control = mount(
      <Control
        className={className}
        content={content}
        disabled={disabled}
        error={error}
        hasValue={hasValue}
        label={label}
        name={name}
        required={required}
        role={role}
      />
    );

    const props = control.props();

    expect(props.className).toEqual(className);
    expect(props.content).toEqual(content);
    expect(props.name).toEqual(name);
    expect(props.disabled).toEqual(disabled);
    expect(props.error).toEqual(error);
    expect(props.label).toEqual(label);
    expect(props.required).toEqual(required);
    expect(props.hasValue).toEqual(hasValue);
    expect(props.role).toEqual(role);
  });
});
