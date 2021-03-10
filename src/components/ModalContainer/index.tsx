import React from 'react';
import { Container } from './styles';
import { Message } from '../../context/modal';
import Modal from './Modal';

interface ModalContainerProps {
  messages: Message[];
}

const ModalContainer: React.FC<ModalContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(item => (
        <Modal key={item.id} message={item} />
      ))}
    </Container>
  );
};
export default ModalContainer;
