import React, { useEffect, useState } from 'react';
import Map from '../../../components/Map';
import MapDescription from '../../../components/Map/Description';
import ReservationButton from '../../../components/Map/ReservationButton';
import {
  Description,
  Title,
  Wrapper,
  WrapperBottom,
  ReservationButtonWrapper,
  Line,
  TotalWrapper,
} from './style';

function MapSmall() {
  const [height, setHeight] = useState(300);
  useEffect(() => {
    const dimension = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    console.log(dimension);
    setHeight(Math.min(dimension, 600));
  }, []);

  useEffect(() => {
    const resizeMap = () => {
      const dimension = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      console.log(dimension);
      setHeight(Math.min(dimension, 600));
    };
    window.addEventListener('resize', resizeMap);
    return () => window.removeEventListener('resize', resizeMap);
  }, []);

  return (
    <TotalWrapper>
      <Wrapper>
        <Map dimension={height} />
        <Title>오프라인 전시회장 오시는 길</Title>
        <Description>
          사회적 거리 두기 시행으로 인해 전시장 내 관람 인원을 제한하고 있습니다. 반드시 예약 후
          방문하셔야 합니다. <br /> 또한, 전시장 내 주차 공간이 협소하오니 대중교통 이용 바랍니다.
        </Description>
        <ReservationButtonWrapper>
          <Line />
          <ReservationButton />
        </ReservationButtonWrapper>
      </Wrapper>
      <WrapperBottom>
        <div>CKMC 크리에이티브 페어 2022 파도의 편지</div>
        <MapDescription />
      </WrapperBottom>
    </TotalWrapper>
  );
}

export default MapSmall;
