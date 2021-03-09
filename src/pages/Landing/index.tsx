import React from 'react';
import { useModal } from '../../context/modal';
import Introduce from '../../components/Introduce';

import { LandingContainer, Presentation, Content } from './styles';

const Landing: React.FC = () => {
  useModal();
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
