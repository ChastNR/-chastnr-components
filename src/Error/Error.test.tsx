import { render } from '@testing-library/react';
import { Error } from './Error';

describe('<Error/>', () => {
  it('should match snapshot', () => {
    const error = render(<Error>Error Text</Error>);
    expect(error.container.firstChild).toMatchSnapshot();
  });
});
