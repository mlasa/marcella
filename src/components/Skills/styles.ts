import styled from 'styled-components';
import BackgroundImg from '../../assets/keyboardDark.jpg';

export const SkillsContainer = styled.div`
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;

  width: 100%;
  min-height: 100vh;
  color: var(--primaryLight);

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Patua One', cursive;
    font-size: 30px;
    margin-bottom: 30px;
    padding: 0 20px 0 20px;
  }
  div {
    p {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 20px;
      font-weight: 300;
      text-align: justify;

      line-height: 1.4;
      padding: 0 20px 0 20px;

      & + p {
        margin-top: 10px;
      }
    }
  }
`;
