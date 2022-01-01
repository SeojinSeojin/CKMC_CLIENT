import styled from 'styled-components';

interface IWorkContainer {
  isNavOpened?: boolean;
  animation: 'initial' | '' | 'close';
}
export const WorkContainer = styled.div<IWorkContainer>`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 320px;
  margin-bottom: 80px;
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1165px) {
    width: 765px;
  }
  @media (min-width: 1360px) {
    width: 960px;
  }
`;

export const Wrapper = styled.div<IWorkContainer>`
  min-height: 100vh;
  ${({ animation }) =>
    animation === 'initial'
      ? ''
      : `animation: 0.4s linear ${animation === '' ? 'shorten' : 'extend'};`}

  ${({ animation }) => (animation === '' || animation === 'initial' ? 'padding-right: 400px' : '')};

  @keyframes shorten {
    from {
      padding-right: 0;
    }
    to {
      padding-right: 400px;
    }
  }
  @keyframes extend {
    from {
      padding-right: 400px;
    }
    to {
      padding-right: 0;
    }
  }
`;

export const FlexContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  top: 120px;
  font-size: 24px;
  position: sticky;
  z-index: 100;
  font-weight: 100;
  font-family: NEXON Lv1 Gothic OTF Light;
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: sticky;
  top: 340px;
  color: #8eaec9;
  font-size: 18px;
  line-height: 30px;
  font-family: 'Noto Sans KR';
`;
