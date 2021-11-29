import styled from 'styled-components';

interface IWrapper {
  src: string;
}

export const Wrapper = styled.div<IWrapper>`
  background-image: ${({ src }) => src};
  object-fit: cover;
  width: 250px;
  height: 250px;
`;
