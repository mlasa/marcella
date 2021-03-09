import styled, { keyframes } from 'styled-components';

export const LandingContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: strech;

  overflow: hidden;

  @media (max-width: 1460px) {
    & {
      max-width: 1460px;

      display: flex;
      flex-direction: column;
      justify-content: stretch;

      position: relative;
    }
  }
`;

const appearFromRight = keyframes`
  from{
    opacity:0;
    transform: translateX(200px);
  }
  to{
    opacity:1;
    transform: translateX(0);
  }
`;
export const Presentation = styled.div`
  animation: ${appearFromRight} 2s;

  max-width: 700px;
  width: 100%;

  display: flex;
  align-items: center;
  padding-right: 6rem;

  @media (max-width: 1460px) {
    & {
      max-width: 1460px;
      padding-right: 1rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 1500px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 1460px) {
    & {
      max-width: 1460px;
    }
  }
  @media (max-width: 500px) {
    & {
      display: flex;
      align-items: center;
    }
  }

  div {
    width: 100%;
    flex: 1;

    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1460px) {
      & {
        padding-top: 12rem;
      }
    }
  }

  strong {
    width: 100%;
    max-width: 700px;

    line-height: 1.4;
    padding-bottom: 10px;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    border-bottom: solid 1px gray;

    @media (max-width: 1460px) {
      & {
        max-width: 1460px;
      }
    }
  }

  p {
    line-height: 1.4;
    margin-top: 10px;
  }
`;
