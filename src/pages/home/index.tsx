import React from 'react';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import useResponsive from '../../hooks/useResponsive';
import HomeBig from './big';
import HomeSmall from './small';

export default function Home() {
  const { isBig, isBigMiddle, isSmall, isSmallMiddle } = useResponsive();
  console.log(isSmall || isSmallMiddle);
  return (
    <>
      <CursorContainer theme="white" />
      <NavigationBar
        theme={isBig || isBigMiddle ? 'blue' : 'white'}
        selected="MAIN"
        isOpened={isBig || isBigMiddle}
        isNotFoldable={isBig || isBigMiddle}
      />
      {(isBig || isBigMiddle) && <HomeBig />}
      {(isSmall || isSmallMiddle) && <HomeSmall />}
    </>
  );
}
