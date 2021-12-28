import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 0;
  margin-top: -40px;
  & > svg {
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    left: calc(50% - 25px);
  }
`;
