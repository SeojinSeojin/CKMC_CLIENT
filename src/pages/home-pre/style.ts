import styled from 'styled-components';

export const Title = styled.div`
  font-size: 30px;
  line-height: 95px;
  font-family: 'NEXON Lv1 Gothic OTF Light';
  @media (max-width: 700px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Ment = styled.div`
  font-size: 30px;
  line-height: 95px;
  text-align: center;
  font-family: 'NEXON Lv1 Gothic OTF Light';
  @media (max-width: 700px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Clock = styled.div`
  font-size: 90px;
  text-align: center;
  font-family: 'NEXON Lv1 Gothic OTF Light';
  @media (max-width: 1000px) {
    font-size: 64px;
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 200px);
  max-height: 1024px;
  & > svg {
    width: 175px;
    height: 25px;
  }
  @media (max-width: 400px) {
    & > svg {
      width: 98px;
      height: 14px;
    }
  }
`;
