import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 130px;
  max-width: 900px;
`;

export const Title = styled.div`
  font-size: 11px;
  text-align: center;
  position: absolute;
  width: 100vw;
  top: 80px;
  left: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const EmptyWrapper = styled.div``;
