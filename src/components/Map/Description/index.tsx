import React from 'react';
import useResponsive from '../../../hooks/useResponsive';

function MapDescription() {
  const { isSmall, isSmallMiddle } = useResponsive();
  if (isSmall || isSmallMiddle)
    return (
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
          <div>전시기간</div>
          <div>2022.01.14. ~2022.01.16</div>
        </div>
        <div>
          <div>운영시간</div>
          <div>11:00~17:00</div>
        </div>
        <div>
          <div>연락처</div>
          <div>02-2223-2533</div>
        </div>
        <div>
          <div>3호선 안국역 6번출구 404m</div>
          <div>5호선 종로3가역 5번출구 420m </div>
        </div>
      </div>
    );
  return (
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
        <div>2022.01.14. ~2022.01.16</div>
      </div>
      <div>
        <div>운영시간</div>
        <div>11:00~17:00</div>
      </div>
    </div>
  );
}

export default MapDescription;
