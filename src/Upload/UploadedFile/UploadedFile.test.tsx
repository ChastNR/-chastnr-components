import { fireEvent, render } from '@testing-library/react';
import { UploadedFile } from './UploadedFile';

describe('UploadedFile', () => {
  const testFileName = 'test.txt';
  const testFile = new File(['test'], testFileName, {
    type: 'text/plain',
  });

  const mockOnDeleteClick = jest.fn();

  it('should render properly', () => {
    const uploadedFile = render(<UploadedFile file={testFile} onDeleteClick={mockOnDeleteClick} />);

    expect(uploadedFile.container.firstChild).toMatchSnapshot();
  });

  it('should return expected results', () => {
    const uploadedFile = render(
      <UploadedFile accept=".doc" file={testFile} onDeleteClick={mockOnDeleteClick} />
    );

    const exclamationElement = uploadedFile.container.querySelector('.rnd__exl');
    const buttonElement = uploadedFile.container.getElementsByTagName('button')[0];
    fireEvent.click(buttonElement, {});

    expect(exclamationElement).toBeDefined();
    expect(mockOnDeleteClick).toBeCalledWith(testFileName);
  });
});
