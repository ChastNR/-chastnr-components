import { fireEvent, render } from '@testing-library/react';
import { Upload } from './Upload';

describe('Upload', () => {
  const testFile = new File(['test'], 'test.txt', {
    type: 'text/plain',
  });

  it('should render properly', () => {
    const mockOnChange = jest.fn();

    const upload = render(
      <Upload
        accept=".txt"
        className="testClassName"
        info="testInfo"
        errorMessage="error"
        files={[testFile]}
        label="Upload label"
        maxSizeKb={1000}
        multiple
        name="Hi"
        onChange={mockOnChange}
        requiredMessage="Files required"
      />
    );

    expect(upload.container.firstChild).toMatchSnapshot();
  });

  it('should add and delete file when multiple is truthy', () => {
    const newFile = new File(['test1'], 'test1.txt', {
      type: 'text/plain',
    });

    let files: File[] = [testFile];

    const mockOnChange = jest.fn((value: File[]) => (files = value));

    const upload = render(
      <Upload
        accept=".txt"
        className="testClassName"
        info="testInfo"
        errorMessage="error"
        files={files}
        label="Upload label"
        maxSizeKb={1000}
        multiple
        name="Hi"
        onChange={mockOnChange}
        requiredMessage="Files required"
      />
    );

    const inputElement = upload.container.getElementsByTagName('input')[0];
    const buttonElement = upload.container.getElementsByTagName('button')[0];

    fireEvent.change(inputElement, { target: { files: [newFile] } });
    fireEvent.click(buttonElement);

    expect(mockOnChange).toBeCalledWith([testFile, newFile]);
    expect(mockOnChange).toBeCalledTimes(2);
  });

  it('should add file when multiple is falsy', () => {
    const newFile = new File(['test1'], 'test1.txt', {
      type: 'text/plain',
    });

    let files: File[] = [testFile];

    const mockOnChange = jest.fn((value: File[]) => (files = value));

    const upload = render(
      <Upload
        accept=".txt"
        className="testClassName"
        info="testInfo"
        errorMessage="error"
        files={files}
        label="Upload label"
        maxSizeKb={1000}
        name="Hi"
        onChange={mockOnChange}
        requiredMessage="Files required"
      />
    );

    const inputElement = upload.container.getElementsByTagName('input')[0];

    fireEvent.change(inputElement, { target: { files: [newFile] } });

    expect(mockOnChange).toBeCalledWith([newFile]);
  });

  it('should return current files when same file is exists', () => {
    let files: File[] = [testFile];

    const mockOnChange = jest.fn((value: File[]) => (files = value));

    const upload = render(
      <Upload
        accept=".txt"
        className="testClassName"
        info="testInfo"
        errorMessage="error"
        files={files}
        label="Upload label"
        maxSizeKb={1000}
        name="Hi"
        onChange={mockOnChange}
        requiredMessage="Files required"
      />
    );

    const inputElement = upload.container.getElementsByTagName('input')[0];

    fireEvent.change(inputElement, { target: { files: [testFile] } });

    expect(mockOnChange).toBeCalledWith([testFile]);
  });
});
