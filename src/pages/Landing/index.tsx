import React from 'react';
import Introduce from '../../components/Introduce';

import { LandingContainer, Presentation, Content } from './styles';

const Landing: React.FC = () => {
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
