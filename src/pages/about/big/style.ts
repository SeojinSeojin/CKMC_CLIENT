import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  width: 100vw;
  grid-template-areas: 'left middle right';
`;

export const AboutImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const Title = styled.div`
  margin-top: 200px;
  font-size: 68px;
  line-height: 96px;
  position: relative;
  font-family: 'NEXON Lv1 Gothic OTF Light';
  padding: 0 16px;
`;

export const TitleLogoContainer = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
`;

export const Middle = styled.div`
  padding: 0 36px;
  color: #2454a6;
  padding-bottom: 200px;
  max-width: 1500px;
  align-self: center;
  justify-self: center;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 18px;
  line-height: 27px;
  word-break: keep-all;
  margin-top: 280px;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.05em;

  & > div {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    &:first-child {
      border-right: 1px solid #8eaec9;
    }
    &:nth-child(2) {
      margin-top: 380px;
    }
  }
  & p {
    font-size: 18px;
    margin-bottom: 36px;
    font-family: 'Noto Sans Regular';
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const LogoContainer = styled.div`
  align-self: flex-end;
  margin-bottom: 20px;
`;
