import styled from 'styled-components';

interface IIsSmall {
  isSmall: boolean;
  isSmallMiddle: boolean;
}
export const Wrapper = styled.a<IIsSmall>`
  display: grid;
  grid-template-columns: ${({ isSmall, isSmallMiddle }) =>
    isSmall ? '120px auto' : isSmallMiddle ? '200px auto' : '320px auto'};
  gap: 12px;
  margin-bottom: 8px;

  &:nth-child(1) {
    & > div {
      ${({ isSmall }) => !isSmall && 'border-top: 1px solid #2454a6;'}
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ThumbnailImage = styled.img<IIsSmall>`
  width: ${({ isSmall, isSmallMiddle }) => (isSmall ? '120px' : isSmallMiddle ? '200px' : '320px')};
  height: ${({ isSmall, isSmallMiddle }) => (isSmall ? '90px' : isSmallMiddle ? '150px' : '240px')};
  object-fit: cover;
`;

export const Title = styled.div<IIsSmall>`
  color: #2454a6;
  font-weight: 800;
  font-size: ${({ isSmall, isSmallMiddle }) =>
    isSmall ? '11px' : isSmallMiddle ? '18px' : '24px'};
  margin-top: ${({ isSmall }) => (isSmall ? '11px' : '20px')};
`;

export const TitleWrapper = styled.div<IIsSmall>`
  position: relative;
  height: ${({ isSmall, isSmallMiddle }) => (isSmall ? '90px' : isSmallMiddle ? '150px' : '240px')};
  border-bottom: 1px solid #2454a6;
`;

export const Editors = styled.div`
  position: absolute;
  right: 0;
  bottom: 12px;
  display: flex;
  gap: 6px;
  & > button {
    width: 60px;
    height: 32px;
    font-size: 18px;
    line-height: 28px;
    border-radius: 30px;
    background-color: white;
    &:nth-child(1) {
      color: #2454a6;
      border: 1px solid #2454a6;
      &:hover {
        background-color: #2454a6;
      }
    }
    &:nth-child(2) {
      color: #ff4d62;
      border: 1px solid #ff4d62;
      &:hover {
        background-color: #ff4d62;
      }
    }
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
`;
