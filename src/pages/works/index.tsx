import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import WorkBig from './big';
import WorkSmall from './small';

function WorksPage() {
  const { isBig, isBigMiddle } = useResponsive();
  if (isBig || isBigMiddle) return <WorkBig />;
  else return <WorkSmall />;
}

export default WorksPage;
