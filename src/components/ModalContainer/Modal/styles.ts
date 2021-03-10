import styled from 'styled-components';

export const Overlay = styled.div`
  padding: 15px;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: var(--white);
  border-radius: 5px;
  padding: 2rem 3rem;

  position: relative;

  header {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--primaryTitle);
    margin-bottom: 10px;
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }
  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--secondaryTitle);
    line-height: 1.5;
  }
  p {
    font-size: 1.2rem;
    color: var(--text);
    margin-top: 15px;
  }
  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: var(--white);
    font-size: 0;

    transition: filter 0.2s;
  }
  button:hover {
    filter: brightness(0.9);
  }
`;
