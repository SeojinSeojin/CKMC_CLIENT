import React from 'react';
import styled from 'styled-components';
import useResponsive from '../../../hooks/useResponsive';

function AuthorLayout({ children }: { children: React.ReactNode }) {
  const { isSmall, isSmallMiddle, isBigMiddle, isBig } = useResponsive();
  return (
    <FlexWrapper
      isSmall={isSmall}
      isSmallMiddle={isSmallMiddle}
      isBigMiddle={isBigMiddle}
      isBig={isBig}
    >
      <GridWrapper
        isSmall={isSmall}
        isSmallMiddle={isSmallMiddle}
        isBigMiddle={isBigMiddle}
        isBig={isBig}
      >
        {children}
      </GridWrapper>
    </FlexWrapper>
  );
}

interface IIsSmall {
  isSmall: boolean;
  isSmallMiddle: boolean;
  isBigMiddle: boolean;
  isBig: boolean;
}
const GridWrapper = styled.div<IIsSmall>`
  display: grid;
  grid-template-columns: ${({ isSmall, isSmallMiddle }) =>
    isSmall || isSmallMiddle ? '1fr' : '500px auto'};
  width: ${({ isBigMiddle, isBig }) => (isBigMiddle || isBig ? '80%' : '94%')};
  gap: ${({ isSmall, isSmallMiddle }) => (isSmall || isSmallMiddle ? '20px' : '80px')};
  ${({ isSmall, isSmallMiddle }) =>
    isSmall || isSmallMiddle
      ? ''
      : '& > div:nth-child(2) { max-height: 88vh; overflow-y: scroll; }'}
`;

const FlexWrapper = styled.div<IIsSmall>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isSmall, isSmallMiddle }) =>
    isSmall
      ? 'margin-top: 43px;'
      : isSmallMiddle
      ? 'margin-top: 59px;'
      : 'min-height: 88vh;margin-top: 6vh;margin-bottom: 6vh;'}
`;

export default AuthorLayout;
