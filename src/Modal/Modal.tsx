import { PropsWithChildren, useRef } from 'react';
import classNames from 'clsx';
import { Close } from '../base';
import { useEscapeKeyDown } from '../hooks';

import './Modal.scss';

interface IModalProps
  extends PropsWithChildren<{
    className?: string;
    onClose: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  }> {}

export const Modal: React.FC<IModalProps> = ({ children, className, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEscapeKeyDown(() => onClose());

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current?.contains(e.target as Node)) {
      return;
    }

    onClose(e);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onClose(e);
  };

  const modalClassNames = classNames('mdl', className);

  return (
    <div className="ovrly">
      <div className="ovrly__popup" onClick={handleOverlayClick} role="presentation">
        <div className={modalClassNames}>
          <div className="mdl__cntr" ref={modalRef}>
            <button onClick={handleButtonClick} type="button">
              <Close />
            </button>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
