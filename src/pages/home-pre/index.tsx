import React, { useEffect, useState } from 'react';
import Background from '../../components/common/Background';
import CursorContainer from '../../components/common/Cursor';
import { LogoCK } from '../../components/common/Icons';
import useResponsive from '../../hooks/useResponsive';
import { dateDifferenceTemplate, getDateDifference } from '../../utils/dateDifference';
import { Title, Ment, Clock, Wrapper } from './style';

function HomePrePage() {
  const { isSmall, isSmallMiddle } = useResponsive();
  const [clock, setClock] = useState(0);

  useEffect(() => {
    const openDate = new Date(2022, 1, 10);
    setClock(getDateDifference(openDate));
    const setClockInterval = setInterval(() => {
      setClock(getDateDifference(openDate));
    }, 1000);
    return () => clearInterval(setClockInterval);
  }, []);

  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="white" />}
      <Background blurColor="white" positionY={50}>
        <Wrapper>
          <Title>CKMC 크리에이티브 페어 2022 파도의 편지</Title>
          <div>
            <Ment>편지를 받아오고 있습니다..</Ment>
            <Clock>{dateDifferenceTemplate(clock)}</Clock>
          </div>
          <LogoCK />
        </Wrapper>
      </Background>
    </>
  );
}

export default HomePrePage;
