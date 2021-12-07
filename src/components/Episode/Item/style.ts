import styled from 'styled-components';

export const Wrapper = styled.a`
  display: grid;
  grid-template-columns: 320px auto;
  gap: 12px;
  margin-bottom: 8px;

  &:nth-child(1) {
    & > div {
      border-top: 1px solid #2454a6;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ThumbnailImage = styled.img`
  width: 320px;
  height: 240px;
  object-fit: cover;
`;

export const Title = styled.div`
  color: #2454a6;
  font-weight: 800;
  font-size: 24px;
  margin-top: 20px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  height: 240px;
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
