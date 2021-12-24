import React from 'react';
import { Middle, Right, RoadBig, RoadFind, RoadView, Span, Wrapper } from './style';

function Map({ dimension }: { dimension: number }) {
  return (
    <Wrapper height={dimension}>
      <div style={{ height: dimension - 30 }}>
        <a
          href="https://map.kakao.com/?urlX=496652.0&amp;urlY=1131667.0&amp;itemId=502438956&amp;q=%EB%A7%88%EB%A3%A8%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0&amp;srcid=502438956&amp;map_type=TYPE_MAP&amp;from=roughmap"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="map"
            src="http://t1.daumcdn.net/roughmap/imgmap/c5fc6e4c57d8a120d7d787ed673134921858340e72758109c389c1167032828b"
            width={`${dimension - 2}px`}
            height={`${dimension - 30}px`}
            style={{ border: '1px solid #ccc', objectFit: 'cover' }}
            alt="오시는 길"
          />
        </a>
      </div>
      <Middle>
        <a href="https://map.kakao.com" target="_blank" style={{ float: 'left' }} rel="noreferrer">
          <img
            src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
            width="72"
            height="16"
            alt="카카오맵"
            style={{ display: 'block', width: 72, height: 16 }}
          />
        </a>
        <Right>
          <RoadView
            target="_blank"
            href="https://map.kakao.com/?from=roughmap&amp;srcid=502438956&amp;confirmid=502438956&amp;q=%EB%A7%88%EB%A3%A8%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0&amp;rv=on"
            rel="noreferrer"
          >
            로드뷰
          </RoadView>
          <Span></Span>
          <RoadFind
            target="_blank"
            href="https://map.kakao.com/?from=roughmap&amp;eName=%EB%A7%88%EB%A3%A8%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0&amp;eX=496652.0&amp;eY=1131667.0"
            rel="noreferrer"
          >
            길찾기
          </RoadFind>
          <Span></Span>
          <RoadBig
            target="_blank"
            href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=502438956&amp;itemId=502438956&amp;q=%EB%A7%88%EB%A3%A8%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0&amp;urlX=496652.0&amp;urlY=1131667.0"
            rel="noreferrer"
          >
            지도 크게 보기
          </RoadBig>
        </Right>
      </Middle>
    </Wrapper>
  );
}

export default Map;
