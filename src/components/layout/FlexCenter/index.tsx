import styled from 'styled-components';

function FlexCenterLayout({ children }: { children: React.ReactNode }) {
  return <FlexWrapper>{children}</FlexWrapper>;
}

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 88vh;
  padding: 6vh 0;
`;

export default FlexCenterLayout;
