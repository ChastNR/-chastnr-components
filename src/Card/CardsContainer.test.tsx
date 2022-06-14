import { render } from '@testing-library/react';
import { CardsContainer } from './CardsContainer';

describe('<CardsContainer/>', () => {
  it('should match snapshot', () => {
    const cardsContainer = render(<CardsContainer>Test Render</CardsContainer>);
    expect(cardsContainer.container.firstChild).toMatchSnapshot();
  });
});
