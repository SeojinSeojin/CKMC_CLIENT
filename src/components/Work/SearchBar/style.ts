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

export const Wrapper = styled.div`
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

  & > svg {
    margin-bottom: 20px;
    margin-left: 28px;
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
`;

export const SelectorWrapper = styled.div`
  padding: 28px;
  border-bottom: 1px solid #8eaec9;

  &:last-child {
    border-bottom: none;
    margin-bottom: 40px;
  }
`;

export const FirstName = styled(Base)`
  z-index: 90;
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
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  position: relative;

  & svg {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;
