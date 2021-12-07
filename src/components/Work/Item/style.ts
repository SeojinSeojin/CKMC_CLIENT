import styled from 'styled-components';

interface IWrapper {
  src: string;
}

export const Wrapper = styled.div<IWrapper>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  width: 250px;
  height: 250px;
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
    font-size: 24px;
    z-index: 900;
    &:nth-child(2) {
      position: absolute;
      bottom: 0px;
      font-weight: 200;
      font-size: 18px;
      margin-bottom: 12px;
    }
  }

  height: 250px;
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
