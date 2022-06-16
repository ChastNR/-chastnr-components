import { render } from '@testing-library/react';
import { Ring } from './Ring';

describe('<Calendar/>', () => {
  it('should equal snapshot', () => {
    const ring = render(<Ring />);
    expect(ring.container.firstChild).toMatchSnapshot();
  });
});
