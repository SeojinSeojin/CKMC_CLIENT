import styled, { css, keyframes } from 'styled-components';
import BlueStar from '../Icons/ic-blue-star.svg';
import BlueStarFull from '../Icons/ic-blue-star-selected.svg';
import WhiteStar from '../Icons/ic-white-star.svg';
import WhiteStarFull from '../Icons/ic-white-star-selected.svg';

interface IWrapper {
  animation: 'slideIn' | 'slideOut';
}
export const Wrapper = styled.div<IWrapper>`
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  height: 100vh;
  animation: 0.8s ease-in-out ${({ animation }) => animation};
  padding-top: 198px;
  padding-left: 60px;
  width: 180px;
  border-right: 1px solid ${({ theme }) => (theme === 'white' ? 'white' : '#2454A6')};
  background: ${({ theme }) =>
    theme === 'white'
      ? 'linear-gradient(to right, #2454a6, rgb(0,0,0,0))'
      : 'linear-gradient(to right, #ffffff, rgb(256,256,256,0))'};
  backdrop-filter: blur(5px);
  display: inline-flex;
  flex-direction: column;

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-180px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-180px);
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface IButton {
  isOpen: boolean;
  isBig: boolean;
  isMiddle: boolean;
  isSmall: boolean;
}
export const BlueButton = styled.div<IButton>`
  position: fixed;
  top: ${({ isSmall }) => (isSmall ? '50px' : '100px')};
  left: ${({ isSmall }) => (isSmall ? '30px' : '60px')};
  width: ${({ isBig, isMiddle }) => (isBig ? '46px' : isMiddle ? '30px' : '26px')};
  height: ${({ isBig, isMiddle }) => (isBig ? '46px' : isMiddle ? '30px' : '26px')};
  z-index: 9999;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => (props.isOpen ? `url(${BlueStarFull})` : `url(${BlueStar})`)};
  animation: ${(props) =>
    props.isOpen
      ? 'none'
      : css`
          ${rotate} 8s linear infinite
        `};

  &:hover {
    cursor: pointer;
  }
`;

export const WhiteButton = styled.div<IButton>`
  position: fixed;
  top: ${({ isSmall }) => (isSmall ? '50px' : '100px')};
  left: ${({ isSmall }) => (isSmall ? '30px' : '60px')};
  width: ${({ isBig, isMiddle }) => (isBig ? '46px' : isMiddle ? '30px' : '26px')};
  height: ${({ isBig, isMiddle }) => (isBig ? '46px' : isMiddle ? '30px' : '26px')};
  z-index: 9999;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => (props.isOpen ? `url(${WhiteStarFull})` : `url(${WhiteStar})`)};
  animation: ${(props) =>
    props.isOpen
      ? 'none'
      : css`
          ${rotate} 8s linear infinite
        `};
  &:hover {
    cursor: pointer;
  }
`;

interface IItem {
  selected: boolean;
  isSmall: boolean;
}
export const Item = styled.a<IItem>`
  display: block;
  margin-bottom: 40px;
  ${(props) => (props.selected ? 'font-family: NEXON Lv1 Gothic OTF Bold;' : '')}
  color: ${({ theme, selected, isSmall }) =>
    theme === 'white'
      ? selected
        ? 'white'
        : '#C6DAE3'
      : isSmall
      ? '#2454a6'
      : selected
      ? '#2454a6'
      : '#8EAEC9'};

  &:hover {
    font-family: NEXON Lv1 Gothic OTF Bold;
    color: ${(props) => (props.theme === 'white' ? 'white' : '#2454A6')};
    cursor: pointer;
  }
`;

export const UserItem = styled(Item)`
  border-top: 1px solid #c6dae3;
  margin-top: auto;
  margin-bottom: 95px;
  padding-top: 20px;
  width: 64px;
  text-align: center;

  &:hover {
    border-top: 1px solid #2454a6;
    & > * {
      color: ${(props) => (props.theme === 'white' ? 'white' : '#2454A6')};
    }
  }
  & > * {
    color: ${({ theme, selected, isSmall }) =>
      theme === 'white'
        ? selected
          ? 'white'
          : '#C6DAE3'
        : isSmall
        ? '#2454a6'
        : selected
        ? '#2454a6'
        : '#8EAEC9'};
  }
`;
