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

  @media (max-width: 1400px) {
    padding: 0 20px;
    padding-bottom: 16px;

    & > svg {
      height: 12px;
    }
    & > div {
      font-size: 11px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

interface IMode {
  mode: 5 | 10;
}
export const Letters = styled.div<IMode>`
  width: 800px;
  ${({ mode }) =>
    mode === 10 ? 'overflow-y: scroll; border-bottom: 1px solid white;' : 'overflow-x: scroll;'}
  scroll-behavior: smooth;
  @media (max-width: 1400px) {
    width: 100%;
    max-width: 800px;
  }
`;

export const FlexContainer = styled.div<IMode>`
  height: 600px;
  display: flex;
  flex-direction: column;

  ${({ mode }) => (mode === 10 ? '' : 'display:flex; flex-wrap:wrap; gap:10px; width:0;')};
  @media (max-width: 1400px) {
    height: auto;
    width: 100%;
    align-items: center;
  }

  @media (max-width: 840px) {
    padding: 0 20px;
  }
`;

export const Empty = styled.div`
  color: white;
  line-height: 25px;
  @media (max-width: 1200px) {
    font-size: 11px;
    line-height: 16px;
  }
`;
