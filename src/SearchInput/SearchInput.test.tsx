import { fireEvent, render } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  const mockLoadOptions = jest.fn().mockResolvedValue([{ label: 'test', value: 'test' }]);
  const mockOnChange = jest.fn();
  const mockRenderOption = jest.fn(({ label, ...restProps }) => (
    <div className="search_option" {...restProps}>
      {label}
    </div>
  ));

  it('should render properly', () => {
    const searchInput = render(
      <SearchInput
        loadOptions={mockLoadOptions}
        label="testLabel"
        renderOption={mockRenderOption}
        onChange={mockOnChange}
        value=""
      />
    );

    expect(searchInput.container.firstChild).toMatchSnapshot();
  });

  it('should return expected results', () => {
    const testValue = 'testValue';

    const searchInput = render(
      <SearchInput
        loadOptions={mockLoadOptions}
        label="testLabel"
        //renderOption={mockRenderOption}
        onChange={mockOnChange}
        value=""
      />
    );

    const inputElement = searchInput.container.getElementsByTagName('input')[0];
    const optionElement = searchInput.container.getElementsByClassName('search_option')[0];

    fireEvent.change(inputElement, { target: { value: testValue } });

    // expect(optionElement).toBeDefined();

    // fireEvent.click(optionElement);

    // expect(mockLoadOptions).toBeCalledWith(testValue);
  });
});
