import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('should render properly', () => {
    const card = render(
      <Card buttonText="Click me" imgSrc="testImgSource">
        Text content
      </Card>
    );

    expect(card.container.firstChild).toMatchSnapshot();
  });
});
