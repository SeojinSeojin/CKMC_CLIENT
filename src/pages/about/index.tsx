import React, { useEffect } from 'react';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import useResponsive from '../../hooks/useResponsive';
import AboutBig from './big';
import AboutSmall from './small';

function AboutPage() {
  const { isBig, isBigMiddle, isSmall, isSmallMiddle } = useResponsive();
  useEffect(() => {
    document.title = 'CKMC 2022 - About';
  }, []);
  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="blue" />}
      <NavigationBar theme="blue" selected="ABOUT" />
      {(isBig || isBigMiddle) && <AboutBig />}
      {(isSmall || isSmallMiddle) && <AboutSmall />}
    </>
  );
}

export default AboutPage;
