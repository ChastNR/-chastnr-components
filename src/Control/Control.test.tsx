import { render } from '@testing-library/react';
import { Control } from './Control';

describe('<Control />', () => {
  it('should match snapshot', () => {
    const control = render(
      <Control
        className="testClassName"
        content="testContent"
        disabled
        error="testError"
        hasValue
        label="testLabel"
        name="testName"
        required
        role="textbox"
      />
    );

    expect(control.container.firstChild).toMatchSnapshot();
  });
});
