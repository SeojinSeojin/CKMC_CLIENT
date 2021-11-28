import styled from 'styled-components';

export const Paginator = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Letters = styled.div`
  max-height: 640px;
  width: 800px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  border-bottom: 1px solid white;
`;
