import React, { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ModalContainer from '../components/ModalContainer';

interface ModalContextType {
  closeModal(): void;
  addMessage(message: Omit<Message, 'id'>): void;
}

export interface Message {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

const ModalProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  const addMessage = ({
    title,
    subtitle,
    description,
  }: Omit<Message, 'id'>) => {
    const id = uuid();
    const message = {
      id,
      title,
      subtitle,
      description,
    };

    setMessages([...messages, message]);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ closeModal, addMessage }}>
      {children}
      {isOpen && <ModalContainer messages={messages} />}
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextType => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('O hook useModal deve ser usado dentro do ModalProvider');
  }
  return modalContext;
};

export { ModalProvider, useModal };
