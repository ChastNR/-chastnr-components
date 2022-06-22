import { fireEvent, render } from '@testing-library/react';
import { ISearchOption } from '../types';
import { SearchInputComponent } from './SearchInputComponent';

describe('SearchInputComponent', () => {
  const testOptions: ISearchOption[] = [{ label: 'test', value: 'test' }];
  const mockOnChange = jest.fn();
  const mockRenderOption = jest.fn();

  it('should render properly', () => {
    const searchInputComponent = render(
      <SearchInputComponent
        label="testLabel"
        options={testOptions}
        value=""
        onChange={mockOnChange}
        renderOption={mockRenderOption}
      />
    );

    expect(searchInputComponent.container.firstChild).toMatchSnapshot();
  });

  it('should show options container', () => {
    const searchInputComponent = render(
      <SearchInputComponent
        label="testLabel"
        value=""
        isOptionsAvailable
        onChange={mockOnChange}
        renderOption={mockRenderOption}
      />
    );

    const selectOptionsElement =
      searchInputComponent.container.getElementsByClassName('slt__opts')[0];

    expect(selectOptionsElement).toBeDefined();
  });
});
