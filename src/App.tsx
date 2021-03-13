import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from './context/modal';
import GlobalStyle from './global';
import Landing from './pages/Landing';

const App: React.FC = () => {
  return (
    <Router>
      <ModalProvider>
        <Landing />
        <GlobalStyle />
      </ModalProvider>
    </Router>
  );
};

export default App;
