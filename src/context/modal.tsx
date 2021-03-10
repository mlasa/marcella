import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';

interface ModalContextType {
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ closeModal }}>
      {children}
      {isOpen && <Modal />}
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
