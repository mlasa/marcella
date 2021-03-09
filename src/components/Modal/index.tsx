import React from 'react';

import { Overlay, ModalContainer } from './styles';

const Modal: React.FC = () => {
  return (
    <Overlay>
      <ModalContainer>
        <h1>This is modal</h1>
      </ModalContainer>
    </Overlay>
  );
};
export default Modal;
