import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../../components/common/NavigationBar';
import { LogoCK, LogoCKMC } from '../../components/common/Icons';
import CursorContainer from '../../components/common/Cursor';
import StudentsByClass from '../../components/About';
import AboutBottomLeft from '../../components/About/BottomLeft';
import AboutFooter from '../../components/About/Footer';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  width: 100vw;
  grid-template-areas: 'left middle right';
`;

const AboutImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

const Title = styled.div`
  margin-top: 200px;
  font-size: 68px;
  line-height: 96px;
  position: relative;
  font-family: 'NEXON Lv1 Gothic OTF Light';
  padding: 0 16px;
`;

const TitleLogoContainer = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
`;

const Middle = styled.div`
  padding: 0 36px;
  color: #2454a6;
  padding-bottom: 200px;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 18px;
  line-height: 27px;
  word-break: keep-all;
  margin-top: 280px;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -5%;

  & > div {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    &:first-child {
      border-right: 1px solid #8eaec9;
    }
    &:nth-child(2) {
      margin-top: 380px;
    }
  }
  & p {
    font-size: 18px;
    margin-bottom: 36px;
    font-family: 'Noto Sans Regular';
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const LogoContainer = styled.div`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export default function AboutPage() {
  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="ABOUT" />
      <GridWrapper>
        <div style={{ gridArea: 'left', alignSelf: 'end' }}>
          <AboutImage src="/statics/about-left.webp" alt="왼쪽 일러스트" />
        </div>
        <Middle>
          <Title>
            파도의 편지
            <br />
            CKMC 크리에이티브 페어 2022
            <TitleLogoContainer>
              <LogoCK />
            </TitleLogoContainer>
          </Title>
          <Body>
            <div>
              <p>
                「파도의 편지」는 청강문화산업대학교 만화콘텐츠스쿨 졸업생들의 졸업 작품이
                누군가에게 운명처럼 닿길 바라며 준비한 전시입니다. 한 글자 한 글자 꾹꾹 눌러 쓴
                유리병 속 편지같이 당신에게 도착한 작품 속에 졸업생들의 정성과 시간이 보물처럼 담겨
                있습니다.
              </p>
              <p>
                손을 뻗어 마음에 드는 유리병을 집어 보세요. 각기 다른 모양 병 속에 들어 있는
                다채로운 이야기가 당신의 마음에 파도를 일으킬 것입니다. 유리병 안에 응원을 담아 그
                파도에 띄워 보내 주세요. 따뜻한 관심이 또다시 파도가 되어 당신에게 새로운 편지로
                되돌아갈 거예요.
              </p>
            </div>
            <div>
              <LogoContainer>
                <LogoCKMC />
              </LogoContainer>
              <p>
                세상의 모든 콘텐츠, 만畵, 만話, 만花 <br />
                현장중심교육을 선도하는 세계적인 만화콘텐츠 교육 공동체
              </p>
              <p></p>
              <p>
                디지털 시대를 맞이해 인터넷 환경에 가장 적합한 콘텐츠로 각광받고 있는 만화와
                웹소설은 대중문화콘텐츠를 선도하고 있습니다. 청강문화산업대학교 만화콘텐츠스쿨은
                만화, 웹툰, 기획만화, 스토리텔링, 일러스트레이션, 기획, 출판, 평론, 웹소설,
                시나리오, 라이트노벨 등 인터넷 콘텐츠 산업 현장에서 현역으로 활발하게 활동하고 있는
                교수진과 특화된 커리큘럼을 통해 웹툰·만화·웹소설 등 콘텐츠의 다양한 영역을 아우르는
                심화된 전문교육을 실현합니다.{' '}
              </p>
              <p>
                다양한 인문교양수업 및 창작에 도움이 되는 프로그램과 특화된 전공수업은 총 6학기 동안
                내실 있는 강의로 웹 콘텐츠 전문가를 양성 합니다. 또한 매 학기 크리틱 수업을 통해
                담당 교수님과 일대일 멘토링을 받을 수 있으며 다양한 산학협력 업체들과의 긴밀한
                연계를 통해 디지털 플랫폼과 출판사를 초청해 리쿠르팅 프로젝트도 시행합니다.
              </p>
            </div>
            <AboutBottomLeft />
            <StudentsByClass />
          </Body>
        </Middle>
        <div style={{ gridArea: 'right' }}>
          <AboutImage src="/statics/about-right.webp" alt="오른쪽 일러스트" />
        </div>
      </GridWrapper>
      <AboutFooter />
    </>
  );
}
