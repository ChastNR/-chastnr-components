import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tab from './Tab';

describe('<Tab/>', () => {
  it('should match snapshot', () => {
    const tab = shallow(<Tab />);
    expect(toJson(tab)).toMatchSnapshot();
  });

  it('should have content component', () => {
    const tab = shallow(<Tab content={<div>Test content</div>} />);
    const spanComponent = tab.find('.tb__cnt');

    expect(spanComponent).not.toBeNull();
  });

  it('style cursor should be cursor', () => {
    const tab = shallow(<Tab onClick={() => {}} />);
    const buttonElement = tab.find('.tb__btn');
    const buttonStyles = buttonElement.get(0).props.style;

    expect(buttonStyles).toHaveProperty('cursor', 'cursor');
  });
});
