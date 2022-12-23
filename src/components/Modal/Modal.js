import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import css from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    img: PropTypes.shape({
      url: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
    onCloseModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.closeModalByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.closeModalByEsc);
  }

  closeModalByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const {
      img: { url, tags },
    } = this.props;

    return createPortal(
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={url} alt={tags} />
        </div>
      </div>,
      modalRootRef
    );
  }
}

export default Modal;
