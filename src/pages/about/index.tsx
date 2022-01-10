import React, { useEffect } from 'react';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import useResponsive from '../../hooks/useResponsive';
const AboutBig = React.lazy(() => import('./big'));
const AboutSmall = React.lazy(() => import('./small'));

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
