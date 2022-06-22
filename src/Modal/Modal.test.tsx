import { fireEvent, render } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const mockOnClose = jest.fn();

  it('should render properly', () => {
    const modal = render(
      <Modal className="testClassName" onClose={mockOnClose}>
        Test content
      </Modal>
    );

    expect(modal.container.firstChild).toMatchSnapshot();
  });

  it('should not close modal when modal was clicked', () => {
    jest.mock('../hooks', () => ({
      useEscapeKeyDown: jest.fn(),
    }));

    const modal = render(
      <Modal className="testClassName" onClose={mockOnClose}>
        Test content
      </Modal>
    );

    const overlayElement = modal.container.getElementsByClassName('mdl')[0];

    fireEvent.click(overlayElement);

    // useEffect dev problem
    expect(mockOnClose).toBeCalledTimes(1);
  });

  it('should close modal when overlay was clicked', () => {
    const modal = render(
      <Modal className="testClassName" onClose={mockOnClose}>
        Test content
      </Modal>
    );

    const overlayElement = modal.container.getElementsByClassName('ovrly__popup')[0];

    fireEvent.click(overlayElement);

    // useEffect dev problem
    expect(mockOnClose).toBeCalledTimes(2);
  });

  it('should close modal when close button was clicked', () => {
    const modal = render(
      <Modal className="testClassName" onClose={mockOnClose}>
        Test content
      </Modal>
    );

    const buttonElement = modal.container.getElementsByTagName('button')[0];

    fireEvent.click(buttonElement);

    expect(mockOnClose).toBeCalled();
  });

  it('should close modal when ESC was pressed', () => {
    const modal = render(
      <Modal className="testClassName" onClose={mockOnClose}>
        Test content
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockOnClose).toBeCalled();
  });
});
