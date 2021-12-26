import React from 'react';
import styled from 'styled-components';

function VerticalCenterLayout({ children }: { children: React.ReactNode }) {
  return <VerticalCenterWrapper>{children}</VerticalCenterWrapper>;
}

const VerticalCenterWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export default VerticalCenterLayout;
