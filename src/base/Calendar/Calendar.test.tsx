import { render } from '@testing-library/react';

import { Calendar } from './Calendar';

describe('<Calendar/>', () => {
  it('should equal snapshot', () => {
    const calendar = render(<Calendar />);

    expect(calendar.container.firstChild).toMatchSnapshot();
  });
});
