import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Modal from '../components/Modal';

interface ModalContextType {
  closeModal(): void;
  addModal(message: Omit<Message, 'id'>): void;
}

export interface Message {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

const ModalProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<Message>({} as Message);
  const [isOpen, setIsOpen] = useState(false);

  const addModal = useCallback(
    ({ title, subtitle, description }: Omit<Message, 'id'>) => {
      const id = uuid();
      const newMessage = {
        id,
        title,
        subtitle,
        description,
      };

      setMessage(newMessage);
      setIsOpen(true);
    },
    [setMessage],
  );

  const closeModal = useCallback(() => {
    console.log('click');
    setIsOpen(false);
    setMessage({} as Message);
  }, [setMessage]);

  return (
    <ModalContext.Provider value={{ closeModal, addModal }}>
      {children}
      {isOpen && <Modal message={message} />}
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
