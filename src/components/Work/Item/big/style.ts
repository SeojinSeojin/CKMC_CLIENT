import styled from 'styled-components';

interface IWrapper {
  src: string;
}

export const Wrapper = styled.div<IWrapper>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 180px;
  height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & div {
    visibility: hidden;
    color: white;
    font-weight: 900;
    font-size: 16px;
    z-index: 900;
    text-align: center;
    padding: 20px;
    line-height: 21px;
    word-break: keep-all;
    &:nth-child(2) {
      position: absolute;
      bottom: 0px;
      font-weight: 200;
      font-size: 12px;
    }
  }

  transition: all 0.3s;

  & svg {
    position: absolute;
    top: 0;
    right: 0;
  }
  &:hover {
    transform: translateY(-15px);
    cursor: pointer;
    & div {
      visibility: visible;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;
