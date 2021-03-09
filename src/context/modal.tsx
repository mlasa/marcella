import React, { createContext, useContext } from 'react';
import Modal from '../components/Modal';

// interface ModalContextType { }

const ModalContext = createContext({});

const ModalProvider: React.FC = ({ children }) => {
  return (
    <ModalContext.Provider value={{}}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('O hook useModal deve ser usado dentro do ModalProvider');
  }
  return modalContext;
};

export { ModalProvider, useModal };
