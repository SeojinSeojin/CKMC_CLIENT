import styled from 'styled-components';

interface IWrapper {
  isSelected: boolean;
}
export const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ isSelected }) => (isSelected ? '#2454A6' : '#8EAEC9')};

  &:hover {
    cursor: pointer;
  }
`;
