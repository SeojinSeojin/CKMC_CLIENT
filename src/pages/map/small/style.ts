import styled from 'styled-components';

export const Title = styled.div`
  margin-top: 25px;
  font-size: 16px;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  margin-top: 22px;
  padding: 0 20px;
  word-break: keep-all;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  @media (max-width: 800px) {
    min-height: calc(100vh - 63px);
  }
`;

export const ReservationButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 200px;
  & > div:nth-child(2) {
    height: 45px;
  }
  @media (max-width: 800px) {
    margin-top: auto;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  top: 50%;
  background-color: #8eaec9;
  position: absolute;
`;

export const WrapperBottom = styled.div`
  display: flex;
  margin: 75px 0;
  flex-direction: column;
  gap: 52px;
  align-items: center;
  padding: 0 20px;

  & > div {
    color: #8eaec9;
    & > div {
      & > div {
        color: #8eaec9;
      }
    }
  }
  & > div:nth-child(1) {
    text-align: center;
    font-size: 14px;
  }
  & > div:nth-child(2) {
    display: grid;
    font-size: 10px;
    grid-template-columns: repeat(2, 1fr);
    gap: 34px 36px;
    font-family: 'Noto Sans KR';
    font-weight: 900;
    line-height: 20px;

    & > div {
      & > div:nth-child(2) {
        font-family: 'Noto Sans KR';
        font-weight: 400;
        line-height: 16px;
        letter-spacing: -0.02em;
      }
      &:last-child > div {
        font-family: 'Noto Sans KR';
        font-weight: 400;
        letter-spacing: -0.02em;
      }
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        & > div:nth-child(2) {
          font-family: 'NEXON Lv1 Gothic OTF Light';
        }
      }
    }
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 43px;
  @media (min-width: 500px) {
    margin-top: 59px;
  }
`;
