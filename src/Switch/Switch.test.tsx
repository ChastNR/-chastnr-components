import { render } from '@testing-library/react';
import { Switch } from './Switch';

describe('<Switch/>', () => {
  it('should match snapshot', () => {
    const switchComponent = render(<Switch />);
    expect(switchComponent.container.firstChild).toMatchSnapshot();
  });

  it('props should be equal', () => {
    const name = 'testName';
    const checked = true;
    const onChange = jest.fn();

    const switchComponent = render(<Switch checked={checked} onChange={onChange} name={name} />);
    const inputElement = switchComponent.container.getElementsByTagName('input')[0];

    expect(inputElement.name).toEqual(name);
    expect(inputElement.checked).toEqual(checked);
  });
});
