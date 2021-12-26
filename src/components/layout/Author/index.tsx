import React from 'react';
import styled from 'styled-components';
import useResponsive from '../../../hooks/useResponsive';

function AuthorLayout({ children }: { children: React.ReactNode }) {
  const { isSmall, isSmallMiddle } = useResponsive();
  return (
    <FlexWrapper>
      <GridWrapper isSmall={isSmall || isSmallMiddle}>{children}</GridWrapper>
    </FlexWrapper>
  );
}

interface IGridWrapper {
  isSmall: boolean;
}
const GridWrapper = styled.div<IGridWrapper>`
  display: grid;
  grid-template-columns: ${({ isSmall }) => (isSmall ? '1fr' : '500px auto')};
  width: 80%;
  gap: ${({ isSmall }) => (isSmall ? '20px' : '80px')};
  ${({ isSmall }) => (isSmall ? 'margin-top: 85px;' : '')}
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 88vh;
  margin-top: 6vh;
  margin-bottom: 6vh;
`;

export default AuthorLayout;
