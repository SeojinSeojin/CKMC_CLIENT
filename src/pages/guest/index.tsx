import React, { useEffect } from 'react';
import NavigationBar from '../../components/common/NavigationBar';
import CursorContainer from '../../components/common/Cursor';
import useResponsive from '../../hooks/useResponsive';
import Background from '../../components/common/Background';
const GuestBig = React.lazy(() => import('./big'));
const GuestSmall = React.lazy(() => import('./small'));

export default function GuestPage() {
  const { isGuestSmall } = useResponsive();
  useEffect(() => {
    document.title = 'CKMC 2022 - Guest';
  }, []);
  return (
    <>
      {!isGuestSmall && <CursorContainer theme="white" />}
      <NavigationBar theme={!isGuestSmall ? 'white' : 'blue'} selected="GUEST" />
      <Background>
        {!isGuestSmall && <GuestBig />}
        {isGuestSmall && <GuestSmall />}
      </Background>
    </>
  );
}
