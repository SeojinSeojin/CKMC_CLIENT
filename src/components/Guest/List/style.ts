import styled from 'styled-components';

export const Paginator = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
  margin-top: 20px;
  & > div {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

interface IMode {
  mode: 5 | 10;
}
export const Letters = styled.div<IMode>`
  width: 800px;
  ${({ mode }) =>
    mode === 10 ? 'overflow-y: scroll; border-bottom: 1px solid white;' : 'overflow-x: scroll;'}
  scroll-behavior: smooth;
`;

export const FlexContainer = styled.div<IMode>`
  height: 600px;
  display: flex;
  flex-direction: column;

  ${({ mode }) => (mode === 10 ? '' : 'display:flex; flex-wrap:wrap; gap:10px; width:0;')};
`;
