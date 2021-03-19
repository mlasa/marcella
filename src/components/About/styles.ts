import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Fira Code', monospace;
    font-size: 30px;
    margin: 30px;
    padding: 0px 10px;
    background: var(--main-dark);
    color: var(--white);
  }
  div {
    background: var(--white);
    p {
      font-family: 'Lato', sans-serif;
      font-size: 20px;
      font-weight: 400;
      text-align: justify;

      line-height: 1.4;
      padding: 15px 40px;

      & + p {
        margin-top: 10px;
      }
    }
  }
`;
