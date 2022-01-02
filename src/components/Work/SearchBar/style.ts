import styled from 'styled-components';

interface ISelected {
  selected: boolean;
}

const Base = styled.div<ISelected>`
  color: ${({ selected }) => (selected ? 'white' : '#8eaec9')};
  &:hover {
    cursor: pointer;
    color: white;
    font-weight: 900;
  }
  ${({ selected }) =>
    selected
      ? `cursor: pointer;
    color: white;
    font-weight: 900;`
      : ''}
`;

interface IWrapper {
  animation: '' | 'close' | 'initial';
}
export const Wrapper = styled.div<IWrapper>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 400px;
  background: linear-gradient(#8bafd8, #2454a6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  z-index: 101;
  ${({ animation }) =>
    animation === 'initial'
      ? ''
      : `animation: 0.4s linear ${animation === '' ? 'searchNavIn' : 'searchNavOut'};`}

  & > svg {
    margin-bottom: 20px;
    margin-left: 28px;
    z-index: 101;
    &:hover {
      cursor: pointer;
    }
    ${({ animation }) =>
      animation === '' || animation === 'initial'
        ? ''
        : 'animation: 0.2s linear rotateOut; transform: rotateZ(180deg); & path{ stroke: #2454a6; }'}
  }
  @keyframes searchNavIn {
    0% {
      transform: translateX(400px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes searchNavOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(400px);
    }
  }

  @keyframes rotateOut {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(180deg);
    }
  }

  @media (max-width: 1200px) {
    width: 300px;
    justify-content: flex-start;
    padding-top: 20px;
    background: #2454a6;
    & > svg {
      width: 20px;
      height: 18px;
      &:hover {
        cursor: pointer;
      }
      ${({ animation }) =>
        animation === '' || animation === 'initial'
          ? ''
          : 'animation: 0.2s linear rotateOut; transform: rotateZ(180deg); & path{ stroke: #2454a6; }'}
    }
  }
  @media (max-width: 400px) {
    & > svg {
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }
`;

export const HashTag = styled(Base)`
  border-radius: 50px;
  border: 1px solid #8eaec9;
  padding: 8px 14px;
  flex-grow: 2;
  text-align: center;
  font-size: 14px;

  &:hover {
    border: 1px solid white;
    background: white;
    color: #2454a6;
    cursor: pointer;
    font-weight: 900;
  }
  ${({ selected }) =>
    selected
      ? `border: 1px solid white;
    background: white;
    color: #2454a6;
    cursor: pointer;
    font-weight: 900;`
      : ''}

  @media(max-width:1200px) {
    font-size: 11px;
    padding: 5px 7px;
  }
`;

export const HashTagContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-wrap: wrap;
`;

export const SelectorTitle = styled.div`
  color: white;
  font-size: 17px;
  padding-bottom: 24px;

  @media (max-width: 1200px) {
    font-size: 11px;
  }
`;

export const SelectorWrapper = styled.div`
  padding: 28px;
  border-bottom: 1px solid #8eaec9;
  z-index: 102;

  &:last-child {
    border-bottom: none;
    margin-bottom: 40px;
  }
`;

export const FirstName = styled(Base)`
  z-index: 90;
  @media (max-width: 1200px) {
    font-size: 13px;
  }
`;

export const FirstNameContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const SearchTypeWrapper = styled.div`
  display: flex;
  gap: 14px;
  padding-bottom: 14px;
`;

export const SearchType = styled(Base)`
  font-size: 14px;
  @media (max-width: 1200px) {
    font-size: 11px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid white;
  border-radius: 50px;
  padding: 8px 12px;
  color: white;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #8eaec9;
  }
  @media (max-width: 1200px) {
    font-size: 11px;
    padding: 4px 10px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  position: relative;

  & svg {
    position: absolute;
    right: 12px;
    bottom: 12px;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    & svg {
      width: 12px;
      height: 12px;
      bottom: 8px;
    }
  }
`;

export const SingleWrapper = styled.div`
  position: fixed;
  right: 40px;
  top: 0;
  padding-top: calc(100vh - 842px);
  height: 100vh;
  animation: 0.2s linear searchNavIn;
  z-index: 101;

  & svg {
    margin-left: 28px;
    margin-bottom: 20px;
    &:hover {
      cursor: pointer;
    }
  }

  @keyframes searchNavIn {
    0% {
      transform: translateX(30px);
    }
    20% {
      transform: translateX(30px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media (max-width: 1200px) {
    padding-top: 20px;
    right: 20px;
    & > svg {
      width: 20px;
      height: 18px;
    }
  }
  @media (max-width: 500px) {
    padding-top: 10px;
    right: 20px;
    & > svg {
      width: 20px;
      height: 18px;
    }
  }
`;
