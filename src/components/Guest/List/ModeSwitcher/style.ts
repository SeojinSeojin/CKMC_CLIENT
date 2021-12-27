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

  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;
