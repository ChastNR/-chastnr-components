import { renderHook, act } from '@testing-library/react-hooks';
import { createRef, useRef } from 'react';
import { useClickOutside } from './useClickOutside';

describe('useClickOutside', () => {
  const defaultAddEventListener = global.document.addEventListener;
  const defaultRemoveEventListener = global.document.removeEventListener;

  beforeEach(() => {
    global.document.addEventListener = defaultAddEventListener;
    global.document.removeEventListener = defaultRemoveEventListener;
  });

  it('should register click and touchstart events', () => {
    const mockCallback = jest.fn();
    const mockAddEventListener = jest.fn();
    const mockRemoveEventListener = jest.fn();
    const ref = createRef<HTMLDivElement>();

    global.document.addEventListener = mockAddEventListener;
    global.document.removeEventListener = mockRemoveEventListener;

    const { unmount } = renderHook(() => useClickOutside(ref, mockCallback));
    unmount();

    expect(mockAddEventListener).toBeCalledTimes(3);
    expect(mockRemoveEventListener).toBeCalledTimes(2);
  });

  it('should ', () => {
    const mockCallback = jest.fn();
    const ref = createRef<HTMLDivElement>();

    const component = renderHook(() => useClickOutside(ref, mockCallback));
    // fireEvent();
  });
});
