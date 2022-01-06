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
  z-index: 9997;
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
  font-size: 18px;

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

  @media (max-width: 1200px) {
    padding-top: 160px;
    padding-left: 30px;
    width: 300px;
    font-size: 14px;
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
  isBigMiddle: boolean;
  isSmallMiddle: boolean;
  isSmall: boolean;
}
export const BlueButton = styled.div<IButton>`
  position: fixed;
  top: ${({ isSmall, isSmallMiddle }) => (isSmall ? '10px' : isSmallMiddle ? '16px' : '100px')};
  left: ${({ isSmall, isSmallMiddle }) => (isSmall || isSmallMiddle ? '30px' : '60px')};
  width: ${({ isBig, isSmallMiddle, isBigMiddle }) =>
    isBig ? '46px' : isSmallMiddle || isBigMiddle ? '30px' : '22px'};
  height: ${({ isBig, isSmallMiddle, isBigMiddle }) =>
    isBig ? '46px' : isSmallMiddle || isBigMiddle ? '30px' : '22px'};
  z-index: 9998;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => (props.isOpen ? `url(${BlueStarFull})` : `url(${BlueStar})`)};
  animation: ${(props) =>
    props.isOpen
      ? 'none'
      : css`
          ${rotate} 8s linear infinite
        `};
  cursor: pointer;
`;

export const WhiteButton = styled.div<IButton>`
  position: fixed;
  top: ${({ isSmall, isSmallMiddle }) => (isSmall ? '10px' : isSmallMiddle ? '16px' : '100px')};
  left: ${({ isSmall, isSmallMiddle }) => (isSmall || isSmallMiddle ? '30px' : '60px')};
  width: ${({ isBig, isSmallMiddle, isBigMiddle }) =>
    isBig ? '46px' : isSmallMiddle || isBigMiddle ? '30px' : '22px'};
  height: ${({ isBig, isSmallMiddle, isBigMiddle }) =>
    isBig ? '46px' : isSmallMiddle || isBigMiddle ? '30px' : '22px'};
  z-index: 9998;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => (props.isOpen ? `url(${WhiteStarFull})` : `url(${WhiteStar})`)};
  animation: ${(props) =>
    props.isOpen
      ? 'none'
      : css`
          ${rotate} 8s linear infinite
        `};
  cursor: pointer;
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
    font-family: 'NEXON Lv1 Gothic OTF Bold';
    color: ${(props) => (props.theme === 'white' ? 'white' : '#2454A6')};
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    margin-bottom: 32px;
  }
`;

export const UserItem = styled(Item)`
  border-top: 1px solid #c6dae3;
  margin-top: auto;
  margin-bottom: 95px;
  padding-top: 20px;
  width: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  font-size: 16px;

  &:hover {
    font-family: 'NEXON Lv1 Gothic OTF';
    border-top: 1px solid #2454a6;
  }

  & > div:hover {
    color: ${(props) => (props.theme === 'white' ? 'white' : '#2454A6')};
    font-family: 'NEXON Lv1 Gothic OTF Bold';
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
