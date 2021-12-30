import styled from 'styled-components';

interface IIsSmall {
  isSmall: boolean;
  isSmallMiddle: boolean;
}
export const Tag = styled.div<IIsSmall>`
  padding: ${({ isSmall }) => (isSmall ? '4px 6px' : '8px 12px')};
  font-size: ${({ isSmall, isSmallMiddle }) => (isSmall ? '9px' : isSmallMiddle ? '12px' : '16px')};
  border-radius: 20px;
  border: 1px solid #2454a6;
  color: #2454a6;
  font-family: 'Noto Sans Regular';

  &:hover {
    color: white;
    background-color: #2454a6;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div<IIsSmall>`
  display: flex;
  gap: ${({ isSmall }) => (isSmall ? '5px' : '8px')};
  flex-wrap: wrap;
`;
