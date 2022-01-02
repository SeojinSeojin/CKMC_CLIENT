import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 100;
  font-size: 11px;
  @media (min-width: 500px) {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
  }
`;
