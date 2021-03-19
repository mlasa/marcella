import styled from 'styled-components';
import BackgroundImg from '../../assets/keyboardDark.jpg';

export const SkillsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: 'Fira Code', monospace;
    font-size: 30px;
    margin: 30px;
    padding: 0px 10px;
    background: var(--main-dark);
    color: var(--white);
  }
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      & + span {
        margin-top: 30px;
      }
      strong {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 2;
        text-align: center;
        display: block;

        background: var(--main-pink);
        color: var(--white);
      }
      svg {
        margin: 20px 8px;
        color: var(--main-dark);
      }
    }
  }
`;
