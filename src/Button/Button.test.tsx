import { render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should match snapshot', () => {
    const button = render(
      <Button
        buttonStyle="outline"
        className="testClassName"
        disabled
        isLoading
        to=""
        type="submit"
      />
    );

    expect(button.container.firstChild).toMatchSnapshot();
  });
});
