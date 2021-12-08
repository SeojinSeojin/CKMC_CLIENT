import styled from 'styled-components';

export const TableItem = styled.div`
  width: 100%;
  border-top: 1px solid white;
  padding: 14px 0;
  white-space: pre-line;
`;

export const Cover = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 0.5fr;
  gap: 12px;

  & > div {
    color: white;
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
`;

export const Detail = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  white-space: pre-line;
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
`;
