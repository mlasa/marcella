import styled from 'styled-components';

export const ContainerIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  flex: 1;

  /*button {
    background-color: var(--red);
    height: 3rem;
    width: 100%;
    padding: 1rem;
    border-radius: 23px;

    color: var(--background);
    font-weight: 600;

    border: none;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

    margin-top: 1.5rem;
  }*/

  h1 {
    font-size: 5rem;
    font-weight: 800;
    color: var(--white);
    word-break: break-all;

    @media (max-width: 500px) {
      & {
        font-size: 3.6rem;
      }
    }

    span {
      color: var(--red);

      @media (max-width: 500px) {
        & {
          font-size: 3.4rem;
        }
      }
    }
  }
`;
