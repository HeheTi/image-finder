import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import type { IModalProps } from './Modal.types';

import s from './Modal.module.scss';

const modalRootRef = typeof document !== 'undefined' ? document.querySelector('#modal-root') : null;

const Modal = ({ stylesOverlay, stylesModal, onCloseModal, children }: IModalProps) => {
  useEffect(() => {
    const closeModalByEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keyup', closeModalByEsc);

    return () => {
      window.removeEventListener('keyup', closeModalByEsc);
    };
  }, [onCloseModal]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  if (!modalRootRef) return null;

  const overlay = (
    <div className={clsx(s.overlay, stylesOverlay)} onClick={handleClick}>
      <div className={clsx(s.modal, stylesModal)}>{children}</div>
    </div>
  );

  return createPortal(overlay, modalRootRef);
};

export default Modal;
