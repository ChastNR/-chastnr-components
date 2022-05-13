import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CardsContainer } from './CardsContainer';

describe('<CardsContainer/>', () => {
  it('should match snapshot', () => {
    const cardsContainer = render(<CardsContainer>Test Render</CardsContainer>);
    expect(toJson(cardsContainer)).toMatchSnapshot();
  });
});
