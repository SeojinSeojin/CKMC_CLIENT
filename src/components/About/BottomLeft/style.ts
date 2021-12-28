import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns: repeat(3, 1fr);
  line-height: 36px;
  font-size: 18px;
  gap: 15px 0;
  margin-top: 30px;
  @media (max-width: 1200px) {
    font-size: 11px;
    margin-top: 16px;
    width: 164px;
  }
`;

export const BottomLeftWrapper = styled.div`
  height: 1070px;
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  position: relative;
  @media (max-width: 1200px) {
    height: auto;
    margin-top: 40px;
    & > div:nth-child(2) {
      font-size: 12px;
    }
  }
`;

export const AbsolutePart = styled.div`
  top: -120px;
  position: absolute;

  @media (max-width: 1200px) {
    display: none;
  }
`;
