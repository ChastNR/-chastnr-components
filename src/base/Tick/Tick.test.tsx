import { render } from '@testing-library/react';
import { Tick } from './Tick';

describe('<Tick/>', () => {
  it('should match snapshot', () => {
    const tick = render(<Tick />);
    expect(tick.container.firstChild).toMatchSnapshot();
  });
});
