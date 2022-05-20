import { useEffect } from 'react';

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: (e: Event) => void
): void => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [callback, ref]);
};
