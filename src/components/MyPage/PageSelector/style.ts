import styled from 'styled-components';

interface IItem {
  selected: boolean;
}
export const Item = styled.div<IItem>`
  padding: 4px;
  background-color: ${({ selected }) => (selected ? '#2454a6' : 'white')};
  color: ${({ selected }) => (!selected ? '#2454a6' : 'white')};
`;
