import styled from 'styled-components';

export const TableItem = styled.div`
  width: 100%;
  border-top: 1px solid white;
  padding: 14px 0;

  @media (max-width: 1400px) {
    max-width: 800px;
  }
`;

export const Cover = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 0.5fr;
  gap: 12px;

  & > div {
    color: white;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
  }
  & > div:nth-child(1) {
    font-size: 14px;
  }
  & > div:nth-child(2) {
    font-family: NEXON Lv1 Gothic OTF Bold;
    font-weight: 800;
    font-size: 14px;
  }
  & > div:nth-child(3) {
    font-size: 11px;
  }
  & > div:nth-child(4) {
    font-size: 14px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: 2fr 4fr 2fr 1fr;
    & > div:nth-child(1) {
      font-size: 8px;
    }
    & > div:nth-child(2) {
      font-size: 11px;
    }
    & > div:nth-child(3) {
      font-size: 9px;
    }
    & > div:nth-child(4) {
      font-size: 9px;
      text-align: right;
    }
  }
`;

export const Detail = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 0 32px;
  width: 100%;
  animation: 0.5s forwards slideDown;

  @keyframes slideDown {
    from {
      opacity: 0;
      margin-top: -10px;
    }
    to {
      opacity: 1;
      margin-top: 20px;
    }
  }

  & img {
    height: 240px;
    width: 240px;
    object-fit: cover;
  }
  & p {
    border-top: 1px solid #8eaec9;
    padding: 8px 0;
    height: 30px;
    box-sizing: border-box;
    width: 440px;
    color: white;
    & :last-child {
      border-bottom: 1px solid #8eaec9;
    }
  }
  @media (max-width: 1400px) {
    align-items: center;
    width: 100%;
    & > div {
      width: calc(100% - 200px);
    }
    & p {
      width: 100%;
      font-size: 12px;
    }
    & img {
      height: 200px;
      width: 200px;
    }
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
    display: flex;
    & > div {
      width: 100%;
      min-width: 300px;
    }
  }
`;
