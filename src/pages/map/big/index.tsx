import React from 'react';
import { FlexWrapper, GridWrapper, Wrapper } from './style';
import Map from '../../../components/Map';
import MapDescription from '../../../components/Map/Description';
import ReservationButton from '../../../components/Map/ReservationButton';

function MapBig() {
  return (
    <FlexWrapper>
      <GridWrapper>
        <Map dimension={500} />
        <Wrapper>
          <div>
            <div>CKMC 크리에이티브 페어 2022 파도의 편지</div>
            <div>오프라인 전시회장 오시는 길</div>
          </div>
          <div>
            사회적 거리 두기 시행으로 인해 전시장 내 관람 인원을 제한하고 있습니다. 반드시 예약 후
            방문하셔야 합니다. <br /> 또한, 전시장 내 주차 공간이 협소하오니 대중교통 이용 바랍니다.
          </div>
          <MapDescription />
        </Wrapper>
      </GridWrapper>
      <ReservationButton />
    </FlexWrapper>
  );
}

export default MapBig;
