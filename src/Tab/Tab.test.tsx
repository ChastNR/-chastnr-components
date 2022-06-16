import { render } from '@testing-library/react';
import { Tab } from './Tab';

describe('<Tab/>', () => {
  it('should match snapshot', () => {
    const tab = render(<Tab />);
    expect(tab.container.firstChild).toMatchSnapshot();
  });

  it('should have content component', () => {
    const tab = render(<Tab content={<div>Test content</div>} />);
    const spanComponent = tab.findAllByText('.tb__cnt');

    expect(spanComponent).not.toBeNull();
  });

  it('style cursor should be cursor', () => {
    const mockOnClick = jest.fn();

    const tab = render(<Tab onClick={mockOnClick} />);
    const buttonElement = tab.container.firstChild as HTMLButtonElement;
    const buttonClasses = buttonElement.classList;
    const result = buttonClasses.contains('cursor-pointer');

    expect(result).toBeTruthy();
  });
});
