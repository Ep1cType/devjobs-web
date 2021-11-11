import React from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.scss';

interface ModalProps {
  active: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({active, closeModal, children}) => {
  return ReactDOM.createPortal (
    <>
      {active && (
        <div className={s.modal} onClick={() => closeModal()}>
          <div className={s.modal__content} onClick={(e) => e.stopPropagation()} >
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal')!
  );
};

export default Modal;
