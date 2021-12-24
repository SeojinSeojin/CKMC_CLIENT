import styled from 'styled-components';

export const ReservButton = styled.div`
  font-size: 24px;
  background-color: #2454a6;
  border-radius: 40px;
  padding: 16px 27px;
  display: grid;
  grid-template-columns: auto 24px;
  gap: 12px;
  align-items: center;
  z-index: 10;

  & > div {
    color: white;
    font-family: 'NEXON Lv1 Gothic OTF Light';
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
    padding: 13px 26px;
  }
`;
