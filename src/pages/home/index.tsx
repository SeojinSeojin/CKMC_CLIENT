import React from 'react';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import useResponsive from '../../hooks/useResponsive';
import HomeBig from './big';
import HomeSmall from './small';

export default function Home() {
  const { isBig, isBigMiddle, isSmall, isSmallMiddle } = useResponsive();

  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="white" />}
      <NavigationBar
        theme="blue"
        selected="MAIN"
        isOpened={isBig || isBigMiddle}
        isNotFoldable={isBig || isBigMiddle}
      />
      {(isBig || isBigMiddle) && <HomeBig />}
      {(isSmall || isSmallMiddle) && <HomeSmall />}
    </>
  );
}
