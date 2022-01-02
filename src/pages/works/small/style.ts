import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 130px;
  max-width: 900px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const EmptyWrapper = styled.div`
  @media (max-width: 1200px) {
    margin-top: 90px;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 500px) {
    margin-top: 60px;
    font-size: 11px;
    line-height: 14px;
  }
`;
