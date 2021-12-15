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
  border-right: 1px solid ${(props) => (props.theme === 'white' ? 'white' : '#2454A6')};
  background-color: rgba(256, 256, 256, 0.1);
  backdrop-filter: blur(5px);

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
}
export const BlueButton = styled.div<IButton>`
  position: fixed;
  top: 100px;
  left: 60px;
  width: 26px;
  height: 26px;
  z-index: 9999;
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
  top: 100px;
  left: 60px;
  width: 26px;
  height: 26px;
  z-index: 9999;
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
}
export const Item = styled.a<IItem>`
  display: inline-block;
  margin-bottom: 40px;
  ${(props) => (props.selected ? 'font-family: NEXON Lv1 Gothic OTF Bold;' : '')}
  color: ${({ theme, selected }) =>
    theme === 'white' ? (selected ? 'white' : '#C6DAE3') : selected ? '#2454a6' : '#8EAEC9'};

  &:hover {
    font-family: NEXON Lv1 Gothic OTF Bold;
    color: ${(props) => (props.theme === 'white' ? 'white' : '#2454A6')};
  }
`;

export const BlueGradation = styled.div`
  width: 180px;
  height: 100vh;
  position: absolute;
  z-index: 9997;
  background: linear-gradient(0.25turn, #2454a699, #2454a64f, rgba(0, 0, 0, 0));
`;
