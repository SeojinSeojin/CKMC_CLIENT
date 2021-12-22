import React from 'react';
import styled from 'styled-components';
import CursorContainer from '../../../components/common/Cursor';
import { IcArrowRight } from '../../../components/common/Icons';
import NavigationBar from '../../../components/common/NavigationBar';
import Map from '../../../components/Map';
import { openReservation } from '../../../utils/openExternalSiteInOuterWindow';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-direction: column;
  height: 100vh;
`;

const GridWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 500px auto;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  flex-direction: column;
  color: #2454a6;
  border-bottom: 1px solid #2454a6;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #2454a6;
    padding-bottom: 14px;
    font-size: 22px;
  }
  & > div:nth-child(2) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 40px;
  }
  & > div:nth-child(3) {
    margin-top: auto;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    column-gap: 24px;
    row-gap: 40px;
    margin-bottom: 24px;
    line-height: 28px;
    transition: all 0.5s;
    & > div {
      & > div:first-child {
        font-weight: 800;
      }
      &:hover {
        font-family: NEXON Lv1 Gothic OTF Bold;
        cursor: pointer;
      }
    }
    & > div:nth-child(4) {
      & > div:first-child {
        font-weight: 100;
      }
    }
  }
`;

const ReservButton = styled.div`
  font-size: 24px;
  background-color: #2454a6;
  color: white;
  border-radius: 40px;
  padding: 16px 20px;
  display: grid;
  grid-template-columns: auto 24px;
  gap: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export default function MapPage() {
  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="MAP" />
      <FlexWrapper>
        <GridWrapper>
          <Map />
          <Wrapper>
            <div>
              <div>CKMC 크리에이티브 페어 2022 파도의 편지</div>
              <div>오프라인 전시회장 오시는 길</div>
            </div>
            <div>
              사회적 거리두기 4단계 시행으로 인해 전시장 내 관람 인원을 제한하고 있습니다. <br />
              반드시 예약 후 방문해주시기 바랍니다.
            </div>
            <div>
              <div>
                <div>도로명</div>
                <div>서울 종로구 관훈동 196-10 3F, B1F 마루아트센터 </div>
              </div>
              <div>
                <div>지번</div>
                <div>서울 종로구 인사동길 35-6 3F, B1F 마루아트센터 </div>
              </div>
              <div>
                <div>연락처</div>
                <div>02-2223-2533</div>
              </div>
              <div>
                <div>3호선 안국역 6번출구 404m</div>
                <div>5호선 종로3가역 5번출구 420m </div>
              </div>
              <div>
                <div>전시기간</div>
                <div>2022.01.10. ~2022.01.24</div>
              </div>
              <div>
                <div>운영시간</div>
                <div>09:00~16:00</div>
              </div>
            </div>
          </Wrapper>
        </GridWrapper>
        <ReservButton onClick={openReservation}>
          전시 예약 바로가기 <IcArrowRight />
        </ReservButton>
      </FlexWrapper>
    </>
  );
}
