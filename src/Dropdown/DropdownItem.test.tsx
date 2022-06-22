import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DropdownElement } from './DropdownItem';

describe('DropdownElement', () => {
  const mockOnClick = jest.fn();
  const mockOnKeyDown = jest.fn();

  it('should render properly', () => {
    const dropdownElement = render(
      <MemoryRouter>
        <DropdownElement
          id="test"
          title="testTitle"
          to="/testUrl"
          onClick={mockOnClick}
          onKeyDown={mockOnKeyDown}
        />
      </MemoryRouter>
    );

    expect(dropdownElement.container.firstChild).toMatchSnapshot();
  });
});
