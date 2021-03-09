import React from 'react';
import { ModalProvider } from './context/modal';
import GlobalStyle from './global';
import Landing from './pages/Landing';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Landing />
      <GlobalStyle />
    </ModalProvider>
  );
};

export default App;
