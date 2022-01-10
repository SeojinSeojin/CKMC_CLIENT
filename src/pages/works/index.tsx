import React, { useEffect } from 'react';
import useResponsive from '../../hooks/useResponsive';
const WorkBig = React.lazy(() => import('./big'));
const WorkSmall = React.lazy(() => import('./small'));

function WorksPage() {
  const { isBig, isBigMiddle } = useResponsive();
  useEffect(() => {
    document.title = 'CKMC 2022 - Work';
  }, []);
  if (isBig || isBigMiddle) return <WorkBig />;
  else return <WorkSmall />;
}

export default WorksPage;
