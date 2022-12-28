import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import css from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

const Modal = ({ img: { url, tags }, onCloseModal }) => {
  useEffect(() => {
    const closeModalByEsc = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keyup', closeModalByEsc);

    return () => {
      window.removeEventListener('keyup', closeModalByEsc);
    };
  }, [onCloseModal]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.modal}>
        <img src={url} alt={tags} />
      </div>
    </div>,
    modalRootRef
  );
};

Modal.propTypes = {
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
