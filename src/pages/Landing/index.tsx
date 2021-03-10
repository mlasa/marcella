import React, { useEffect, useCallback } from 'react';
import Introduce from '../../components/Introduce';
import { useModal } from '../../context/modal';
import { LandingContainer, Presentation, Content } from './styles';

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
      <LandingContainer>
        <Content>
          <div>
            <strong>Programadora</strong>
            <p>JavaScript | ReactJS | NodeJS</p>
          </div>
        </Content>
        <Presentation>
          <Introduce />
        </Presentation>
      </LandingContainer>
    </>
  );
};
export default Landing;
