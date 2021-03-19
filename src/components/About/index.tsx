import React from 'react';
import { AboutContainer } from './styles';

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <h1>Sobre Mim</h1>
      <div>
        <p>Olá! Meu nome é Marcella, tenho 23 anos e sou de Campinas - SP.</p>
        <p>
          Eu soube que eu queria seguir carreira no meio da tecnologia mais ou
          menos desde os meus 15 anos, desde aquela época eu nunca pensei em
          fazer outra coisa.
        </p>
        <p>
          Em 2016 iniciei o bacharelado em Sistemas de Informação na PUC -
          Campinas. Desde o primeiro ano tive disciplinas de lógica e linguagens
          de programação e foi bastante desafiador porque aquele foi meu
          primeiro contato verdadeiro com programação. Cheguei a pensar que
          aquilo não era para mim, mas eu também não sabia exatamente oque eu
          queria fazer dentro da área de TI. Conforme o decorrer do curso
          percebi que muitas coisas incríveis podiam ser construídas com
          programação então fui adquirindo mais prática e comecei a desenvolver
          gosto pela área. Desde então comecei a aprender mais sobre programação
          sozinha com conteúdos on-line.
        </p>
        <p>Em dezembro de 2020 me graduei na faculdade.</p>
      </div>
    </AboutContainer>
  );
};

export default About;
