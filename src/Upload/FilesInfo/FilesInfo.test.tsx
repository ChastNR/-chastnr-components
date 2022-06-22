import { render } from '@testing-library/react';
import { FilesInfo } from './FilesInfo';

describe('FilesInfo', () => {
  const testFileName = 'test.txt';
  const testFile = new File(['test'], testFileName, {
    type: 'text/plain',
  });

  const mockOnDeleteClick = jest.fn();

  it('should render properly', () => {
    const filesInfo = render(
      <FilesInfo
        accept=".txt"
        files={[testFile]}
        info="testInfo"
        onDeleteClick={mockOnDeleteClick}
      />
    );

    expect(filesInfo.container.firstChild).toMatchSnapshot();
  });
});
