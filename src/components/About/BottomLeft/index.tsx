import React from 'react';
import { AbsolutePart, BottomLeftWrapper, GridWrapper, LinkButton } from './style';
import { IcArrowRight } from '../../common/Icons';

function AboutBottomLeft() {
  return (
    <BottomLeftWrapper>
      <AbsolutePart>2021 청강대학교 만화콘텐츠스쿨 졸업전시</AbsolutePart>
      <div>
        <div>오프라인 전시회</div>
        <LinkButton>
          <div>전시장 안내 보기</div>
          <IcArrowRight width="20" />
        </LinkButton>
        <LinkButton>
          <div>전시 예약 바로가기</div>
          <IcArrowRight width="20" />
        </LinkButton>
      </div>
      <GridWrapper>
        <div>위원장</div>
        <div>이슬아</div>
        <div></div>
        <div>부위원장</div>
        <div>김세윤</div>
        <div></div>
        <div>서기</div>
        <div>박소정</div>
        <div>장지원</div>
        <div>회계</div>
        <div>김지영</div>
        <div>차다빈</div>
        <div>디자인</div>
        <div>김지아</div>
        <div>김여진</div>
        <div></div>
        <div>신지민</div>
        <div>조수미</div>
        <div></div>
        <div>김지선</div>
        <div></div>
        <div>전시</div>
        <div>김현지</div>
        <div>백수민</div>
        <div></div>
        <div>심다연</div>
        <div>이여경</div>
      </GridWrapper>
    </BottomLeftWrapper>
  );
}

export default AboutBottomLeft;
