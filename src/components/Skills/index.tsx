import React from 'react';
import {
  DiChrome,
  DiGit,
  DiCss3,
  DiHtml5,
  DiReact,
  DiNodejs,
  DiJsBadge,
  DiUbuntu,
} from 'react-icons/di';
import { SiTypescript, SiVisualstudio } from 'react-icons/si';

import { SkillsContainer } from './styles';

const About: React.FC = () => {
  return (
    <SkillsContainer>
      <h1>Skills</h1>
      <div>
        <span>
          <strong>Ferramentas</strong>
          <div>
            <DiUbuntu size={50} />
            <DiChrome size={50} />
            <DiGit size={50} />
            <SiVisualstudio size={50} />
          </div>
        </span>
        <span>
          <strong>Tecnologias</strong>
          <div>
            <DiCss3 size={50} />
            <DiHtml5 size={50} />
            <DiJsBadge size={45} />
            <SiTypescript size={45} />
            <DiReact size={50} />
            <DiNodejs size={70} />
          </div>
        </span>
      </div>
    </SkillsContainer>
  );
};

export default About;
