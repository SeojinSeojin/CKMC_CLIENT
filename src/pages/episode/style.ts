import styled from 'styled-components';

interface IIsSmall {
  isSmall: boolean;
  isSmallMiddle: boolean;
}
export const Header = styled.div<IIsSmall>`
  color: #2454a6;
  padding-bottom: ${({ isSmall }) => (isSmall ? '12px' : '40px')};
  margin-bottom: ${({ isSmall }) => (isSmall ? '8px' : '50px')};
  display: flex;
  ${({ isSmall, isSmallMiddle }) =>
    isSmall || isSmallMiddle
      ? 'flex-direction: column; justify-content: center; margin-top:20px;'
      : 'border-bottom: 1px solid #8eaec9;'}
  gap: ${({ isSmall }) => (isSmall ? '11px' : '40px')};
  & > div {
    &:nth-child(1) {
      font-size: ${({ isSmall, isSmallMiddle }) =>
        isSmall ? '14px' : isSmallMiddle ? '22px' : '32px'};
      font-weight: 600;
      ${({ isSmall, isSmallMiddle }) => (isSmall || isSmallMiddle ? 'text-align:center;' : '')}
    }
    &:nth-child(2) {
      font-size: ${({ isSmall, isSmallMiddle }) =>
        isSmall ? '11px' : isSmallMiddle ? '18px' : '22px'};
      ${({ isSmall, isSmallMiddle }) =>
        isSmall || isSmallMiddle ? 'text-align:center;' : 'align-self: flex-end;'};
    }
  }
`;

export const AuthorDescription = styled.div<IIsSmall>`
  display: grid;
  gap: 24px;
  align-items: center;
  color: #2454a6;
  font-family: 'Noto Sans KR';
  font-size: ${({ isSmall }) => (isSmall ? '11px' : '20px')};
  padding-top: ${({ isSmall }) => (isSmall ? '12px' : '120px')};
  padding-left: ${({ isSmall }) => (isSmall ? '30px' : '8px')};
  padding-right: ${({ isSmall }) => (isSmall ? '30px' : '8px')};
  grid-template-columns: ${({ isSmall, isSmallMiddle }) =>
    isSmall ? '50px auto' : isSmallMiddle ? '110px auto' : '120px auto 100px'};
`;

export const EpisodeDescription = styled.div<IIsSmall>`
  font-size: ${({ isSmall }) => (isSmall ? '11px' : '18px')};
  line-height: ${({ isSmall }) => (isSmall ? '20px' : '26px')};
  color: #2454a6;
  padding-top: ${({ isSmall }) => (isSmall ? '25px' : '50px')};
  padding-left: ${({ isSmall }) => (isSmall ? '30px' : '8px')};
  padding-right: ${({ isSmall }) => (isSmall ? '30px' : '8px')};
  letter-spacing: -0.02em;
`;

export const FlexWrapper = styled.div<IIsSmall>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 6vh;
  margin-bottom: 6vh;
  min-height: 88vh;
  max-width: 1060px;
  padding: ${({ isSmall, isSmallMiddle }) => (isSmall || isSmallMiddle ? '0' : '0 20px')};
  > * {
    font-family: 'Noto Sans KR';
  }
`;
