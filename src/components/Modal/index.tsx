import React from 'react';
import { useModal } from '../../context/modal';
import { Overlay, ModalContainer } from './styles';
import closeImg from '../../assets/close.svg';

const Modal: React.FC = () => {
  const { closeModal } = useModal();

  return (
    <Overlay>
      <ModalContainer>
        <header>Bem vindo(a) </header>

        <strong>Este site ainda está em construção 👩‍💻👷‍♀️</strong>
        <p>por Marcella Letícia A.S.A</p>
        <button type="button" onClick={closeModal}>
          <img src={closeImg} alt="Fechar aviso" />
        </button>
      </ModalContainer>
    </Overlay>
  );
};
export default Modal;
