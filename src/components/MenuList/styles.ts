import styled, { keyframes, css } from 'styled-components';
import { Props } from '.';

const openMenuAnimation = keyframes`
  0% {
    width: 71px;
  }

  100% {
    width: 240px;
  }
`;

const closeMenuAnimation = keyframes`
  0% {
    width: 240px;
  }

  100% {
    width: 71px;
  }
`;

export const Container = styled.div<Props>`
  grid-area: ML;

  display: flex;
  flex-direction: column;
  align-items: left;

  background-color: var(--tertiary);
  padding: 11px 11px;


  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  width: min-content;

  ${props => props.menuOpen ? 
    css`
      width: 240px;
      animation: ${openMenuAnimation} .3s;
      >div span {
        color: var(--white);
        display: block;
        margin-left: 10px;
        min-width: 170px;
      }
  ` : 
    css`
      animation: ${closeMenuAnimation} .3s;
      width: 71px;
      >div span {
        display: none;
      }
  `}
`;

export const Separator = styled.div`
  width: 48px;
  border-bottom: 2px solid var(--white);

  margin-bottom: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-content: space-between;
  align-items: center;
`;