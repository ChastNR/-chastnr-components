import { render } from '@testing-library/react';
import { Form } from './Form';

describe('<Form />', () => {
  it('should match snapshot', () => {
    const form = render(<Form title="Test Title">Test Content</Form>);
    expect(form.container.firstChild).toMatchSnapshot();
  });
});
