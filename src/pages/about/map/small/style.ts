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
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ReservationButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  position: relative;
  & > div:nth-child(2) {
    height: 45px;
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
    width: 288px;
    grid-template-columns: repeat(2, 1fr);
    gap: 34px 36px;
    font-family: 'Noto Sans Bold';
    font-weight: 900;
    line-height: 20px;

    & > div {
      & > div:nth-child(2) {
        font-family: 'Noto Sans Regular';
        font-weight: 400;
        line-height: 16px;
        letter-spacing: -0.02em;
      }
      &:last-child > div {
        font-family: 'Noto Sans Regular';
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