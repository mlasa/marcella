import React from 'react';
import GlobalStyle from './global';
import Landing from './pages/Landing';

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <GlobalStyle />
    </>
  );
};

export default App;
