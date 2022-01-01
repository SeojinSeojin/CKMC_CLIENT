import React from 'react';
import styled from 'styled-components';
import useResponsive from '../../../hooks/useResponsive';

function AuthorLayout({ children }: { children: React.ReactNode }) {
  const { isSmall, isSmallMiddle, isBigMiddle } = useResponsive();
  return (
    <FlexWrapper isSmall={isSmall || isSmallMiddle} isBigMiddle={isBigMiddle}>
      <GridWrapper isSmall={isSmall || isSmallMiddle} isBigMiddle={isBigMiddle}>
        {children}
      </GridWrapper>
    </FlexWrapper>
  );
}

interface IIsSmall {
  isSmall: boolean;
  isBigMiddle: boolean;
}
const GridWrapper = styled.div<IIsSmall>`
  display: grid;
  grid-template-columns: ${({ isSmall }) => (isSmall ? '1fr' : '500px auto')};
  width: ${({ isBigMiddle }) => (isBigMiddle ? '94%' : '80%')};
  gap: ${({ isSmall }) => (isSmall ? '20px' : '80px')};
  ${({ isSmall }) =>
    isSmall ? '' : '& > div:nth-child(2) { max-height: 88vh; overflow-y: scroll; }'}
`;

const FlexWrapper = styled.div<IIsSmall>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isSmall }) =>
    isSmall ? 'margin-top: 43px;' : 'min-height: 88vh;margin-top: 6vh;margin-bottom: 6vh;'}
`;

export default AuthorLayout;
