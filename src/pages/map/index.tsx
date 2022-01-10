import React, { useEffect } from 'react';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import useResponsive from '../../hooks/useResponsive';
const MapBig = React.lazy(() => import('./big'));
const MapSmall = React.lazy(() => import('./small'));

export default function MapPage() {
  const { isBig, isBigMiddle, isSmall, isSmallMiddle } = useResponsive();
  useEffect(() => {
    document.title = 'CKMC 2022 - Map';
  }, []);
  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="blue" />}
      <NavigationBar theme="blue" selected="MAP" />
      {(isBig || isBigMiddle) && <MapBig />}
      {(isSmall || isSmallMiddle) && <MapSmall />}
    </>
  );
}
