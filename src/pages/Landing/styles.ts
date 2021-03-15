import styled from 'styled-components';
import BackgroundImg from '../../assets/keyboardDark.jpg';

export const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  height: 100vh;
  overflow-x: hidden;

  @media (max-width: 1170px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const FixedContainer = styled.section`
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1170px) {
    & {
      display: none;
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
  }
  h1 {
    font-family: 'Fira Code', monospace;
    font-size: 55px;
    padding: 20px;
    color: var(--primaryLight);
    width: 360px;
  }
`;

export const Content = styled.div`
  background: var(--white);
  flex: 1;
  width: 100%;

  overflow: auto;
`;
