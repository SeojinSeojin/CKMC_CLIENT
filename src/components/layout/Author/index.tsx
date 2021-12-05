import React from 'react';
import styled from 'styled-components';

function AuthorLayout({ children }: { children: React.ReactNode }) {
  return (
    <FlexWrapper>
      <GridWrapper>{children}</GridWrapper>
    </FlexWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  width: 80%;
  gap: 80px;
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
