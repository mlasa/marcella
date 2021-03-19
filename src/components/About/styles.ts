import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: var(--white);
  background: var(--main-dark);

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Fira Code', monospace;
    font-size: 30px;
    margin-bottom: 30px;
    padding: 20px 20px;
  }
  div {
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
