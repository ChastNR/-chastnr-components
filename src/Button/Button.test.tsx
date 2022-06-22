import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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

  it('should return expected result', () => {
    const href = '/test';
    const buttonType = 'button';
    const textContent = 'Text content';

    const button = render(
      <MemoryRouter>
        <Button buttonStyle="outline" className="testClassName" to={href}>
          {textContent}
        </Button>
      </MemoryRouter>
    );

    const linkElement = button.container.firstChild as HTMLAnchorElement;
    const buttonElement = linkElement?.firstChild as HTMLButtonElement;

    expect(linkElement.tabIndex).toEqual(-1);
    expect(linkElement.href).toMatch(href);
    expect(buttonElement.type).toMatch(buttonType);
    expect(buttonElement?.textContent).toContain(textContent);
  });
});
