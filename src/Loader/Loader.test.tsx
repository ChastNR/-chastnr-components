import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('should render properly', () => {
    const loader = render(<Loader />);

    expect(loader.container.firstChild).toMatchSnapshot();
  });
});
