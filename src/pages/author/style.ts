import styled from 'styled-components';

const Text = styled.div`
  color: #2454a6;
  word-break: keep-all;
  box-sizing: border-box;
  width: 100%;
`;

interface IIsSmall {
  isSmall: boolean;
  isSmallMiddle: boolean;
}

export const Title = styled(Text)<IIsSmall>`
  font-weight: 900;
  font-size: ${({ isSmall, isSmallMiddle }) => (isSmall ? 13 : isSmallMiddle ? 24 : 30)}px;
  margin-top: 20px;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  line-height: ${({ isSmall, isSmallMiddle }) => (isSmall ? 18 : isSmallMiddle ? 34 : 40)}px;
`;

export const Description = styled(Text)<IIsSmall>`
  font-family: 'Noto Sans Regular';
  font-size: ${({ isSmall }) => (isSmall ? 9 : 16)}px;
  margin-top: 24px;
  margin-bottom: 56px;
  min-height: ${({ isSmall }) => (isSmall ? 65 : 80)}px;
  line-height: ${({ isSmall }) => (isSmall ? 13 : 25)}px;
  letter-spacing: -0.02em;
`;

export const Footer = styled.div<IIsSmall>`
  color: #8eaec9;
  border-top: 1px solid #8eaec9;
  font-size: ${({ isSmall }) => (isSmall ? 9 : 16)}px;
  margin-top: ${({ isSmall }) => (isSmall ? 18 : 28)}px;
  padding-top: ${({ isSmall }) => (isSmall ? 4 : 24)}px;
  display: flex;
  gap: ${({ isSmall }) => (isSmall ? 12 : 36)}px;
  align-items: center;
  line-height: 25px;

  & > div:nth-child(1) {
    font-family: 'Noto Sans Regular';
    font-size: ${({ isSmall }) => (isSmall ? 9 : 20)}px;
  }
`;

export const Image = styled.img<IIsSmall>`
  width: ${({ isSmall, isSmallMiddle }) => (isSmall ? 180 : isSmallMiddle ? 300 : 500)}px;
  height: ${({ isSmall, isSmallMiddle }) => (isSmall ? 180 : isSmallMiddle ? 300 : 500)}px;
  margin-left: ${({ isSmall, isSmallMiddle }) =>
    isSmall ? 'calc(50% - 90px)' : isSmallMiddle ? 'calc(50% - 150px)' : 0};
  object-fit: cover;
`;
