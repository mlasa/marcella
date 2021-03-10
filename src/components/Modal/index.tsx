import React from 'react';
import { useModal, Message } from '../../context/modal';
import { Overlay, ModalContainer } from './styles';
import closeImg from '../../assets/close.svg';

interface ModalProps {
  message: Message;
}

const Modal: React.FC<ModalProps> = ({ message }) => {
  const { closeModal } = useModal();

  return (
    <Overlay>
      <ModalContainer>
        <header>{message.title}</header>

        <strong>{message.subtitle}</strong>
        <p>{message.description}</p>
        <button type="button" onClick={closeModal}>
          <img src={closeImg} alt="Fechar aviso" />
        </button>
      </ModalContainer>
    </Overlay>
  );
};
export default Modal;
