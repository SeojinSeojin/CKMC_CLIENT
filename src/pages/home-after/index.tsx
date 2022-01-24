import React from 'react';
import Background from '../../components/common/Background';
import CursorContainer from '../../components/common/Cursor';
import useResponsive from '../../hooks/useResponsive';
import { LogoCK } from '../../components/common/Icons';
import { Title, Ment, Wrapper } from '../home-pre/style';

function HomeAfter() {
  const { isSmall, isSmallMiddle } = useResponsive();
  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="white" />}
      <Background blurColor="white" positionY={50}>
        <Wrapper>
          <Title>CKMC 크리에이티브 페어 2022 파도의 편지</Title>
          <div>
            <Ment>다음 편지를 기다려 주세요 . . .</Ment>
          </div>
          <LogoCK />
        </Wrapper>
      </Background>
    </>
  );
}

export default HomeAfter;
