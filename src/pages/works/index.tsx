import React, { useEffect } from 'react';
import useResponsive from '../../hooks/useResponsive';
import WorkBig from './big';
import WorkSmall from './small';

function WorksPage() {
  const { isBig, isBigMiddle } = useResponsive();
  useEffect(() => {
    document.title = 'CKMC 2022 - Work';
  }, []);
  if (isBig || isBigMiddle) return <WorkBig />;
  else return <WorkSmall />;
}

export default WorksPage;
