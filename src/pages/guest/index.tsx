import React from 'react';
import NavigationBar from '../../components/common/NavigationBar';
import CursorContainer from '../../components/common/Cursor';
import useResponsive from '../../hooks/useResponsive';
import GuestBig from './big';
import GuestSmall from './small';
import Background from '../../components/common/Background';

export default function GuestPage() {
  const { isBig, isBigMiddle, isSmall, isSmallMiddle } = useResponsive();
  return (
    <>
      {(isBig || isBigMiddle) && <CursorContainer theme="white" />}
      <NavigationBar theme={!isSmall ? 'white' : 'blue'} selected="GUEST" />
      <Background>
        {(isBig || isBigMiddle) && <GuestBig />}
        {(isSmall || isSmallMiddle) && <GuestSmall />}
      </Background>
    </>
  );
}
