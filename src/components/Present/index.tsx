import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import { DiCode, DiGithub } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import { PresentationContainer } from './styles';

const Presentation: React.FC = () => {
  return (
    <PresentationContainer>
      <div>
        <a href="https://github.com/mlasa">
          <DiGithub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/marcellaamorim/">
          <AiFillLinkedin size={50} />
        </a>
      </div>
      <div>
        <h1>Programadora Front-End</h1>
        <DiCode size={100} />
      </div>
      <span>
        <ChevronDown />
      </span>
    </PresentationContainer>
  );
};

export default Presentation;
