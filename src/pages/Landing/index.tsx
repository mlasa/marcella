import React, { useEffect } from 'react';
import { useModal } from '../../context/modal';
import { LandingPage, FixedContainer, Content } from './styles';
import Header from '../../components/Header';
import About from '../../components/About';
import Presentation from '../../components/Presentation';
import Skills from '../../components/Skills';

const Landing: React.FC = () => {
  const { addModal } = useModal();

  useEffect(() => {
    addModal({
      title: 'Bem vindo(a)',
      subtitle: 'Este site ainda está em construção 👩‍💻👷‍♀️',
      description: 'por Marcella Letícia A.S.A.',
    });
  }, [addModal]);

  return (
    <>
      <LandingPage>
        <FixedContainer>
          <Header />
          <div>
            <h1>Marcella Amorim S.A.</h1>
          </div>
        </FixedContainer>
        <Content>
          <Presentation />
          <About />
          <Skills />
        </Content>
      </LandingPage>
    </>
  );
};
export default Landing;
