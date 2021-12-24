import React from 'react';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import useResponsive from '../../hooks/useResponsive';
import MapBig from './big';
import MapSmall from './small';

export default function MapPage() {
  const { isBig, isBigMiddle, isSmall, isSmallMiddle } = useResponsive();
  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="blue" />}
      <NavigationBar theme="blue" selected="MAP" />
      {(isBig || isBigMiddle) && <MapBig />}
      {(isSmall || isSmallMiddle) && <MapSmall />}
    </>
  );
}
