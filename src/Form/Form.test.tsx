import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Form from './Form';

describe('<Form />', () => {
  it('should equal snapshot', () => {
    const form = shallow(<Form title="Test Title">Test Content</Form>);
    expect(toJson(form)).toMatchSnapshot();
  });
});
