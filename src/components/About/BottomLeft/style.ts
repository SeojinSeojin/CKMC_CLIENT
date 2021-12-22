import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns: repeat(3, 1fr);
  line-height: 36px;
  font-size: 18px;
  gap: 15px 0;
  font-family: 'Noto Sans Regular';

  & > div:nth-child(3n-2) {
    font-size: 16px;
    font-family: 'NEXON Lv1 Gothic OTF';
  }
`;

export const Bottom = styled.div`
  margin-top: auto;
  font-family: 'NEXON Lv1 Gothic OTF';
  & > div:first-child {
    margin-bottom: 32px;
  }
`;

export const LinkButton = styled.div`
  border-radius: 40px;
  padding: 6px 10px;
  border: 1px solid #2454a6;
  width: 230px;
  min-width: 100px;
  margin-top: 10px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;

  & svg {
    & path {
      stroke: #2454a6;
    }
  }
  &:hover {
    background-color: #2454a6;
    cursor: pointer;
    & div {
      color: white;
    }
    & svg {
      & path {
        stroke: white;
      }
    }
  }
`;

export const BottomLeftWrapper = styled.div`
  height: 1070px;
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  position: relative;
`;

export const AbsolutePart = styled.div`
  top: -120px;
  position: absolute;
`;
