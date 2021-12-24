import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-direction: column;
  height: 100vh;
`;

export const GridWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 500px auto;
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid #8eaec9;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #8eaec9;
    padding-bottom: 14px;
    font-size: 22px;
    flex-wrap: wrap;
    gap: 5px;
  }
  & > div:nth-child(2) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 40px;
    font-family: 'Noto Sans Bold';
    font-weight: 600;
    word-break: keep-all;
  }
  & > div:nth-child(3) {
    margin-top: auto;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    column-gap: 24px;
    row-gap: 40px;
    margin-bottom: 24px;
    line-height: 28px;
    transition: all 0.5s;
    & > div {
      & > div {
        color: #8eaec9;
      }
      & > div:first-child {
        font-weight: 800;
      }
      &:hover {
        & > div {
          font-family: NEXON Lv1 Gothic OTF Bold;
          cursor: pointer;
          color: #2454a6;
        }
      }
    }
    & > div:nth-child(4) {
      & > div:first-child {
        font-weight: 100;
      }
    }
  }
`;
