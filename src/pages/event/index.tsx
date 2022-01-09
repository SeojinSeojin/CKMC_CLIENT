import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import CursorContainer from '../../components/common/Cursor';
import { IcArrowRight, ImgEventOffline, ImgEventOnline } from '../../components/common/Icons';
import NavigationBar from '../../components/common/NavigationBar';
import useResponsive from '../../hooks/useResponsive';
import { openInstagram, openTwitter } from '../../utils/openExternalSiteInOuterWindow';

const FlexCenterLayoutRelative = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const WhiteWrapper = styled.div`
  padding: 240px 40px;
  width: 1200px;
  z-index: 10;

  & strong {
    font-family: 'NEXON Lv1 Gothic OTF Bold';
  }

  @media (max-width: 1200px) {
    width: 900px;
    padding: 120px 40px;
  }
  @media (max-width: 900px) {
    width: 100%;
    padding: 60px 40px;
    margin-top: 80px;
  }
`;

const Title = styled.div`
  font-size: 48px;
  margin-bottom: 50px;
  text-align: center;
  font-family: 'NEXON Lv1 Gothic OTF Light';

  @media (max-width: 900px) {
    font-size: 21px;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const DescriptionDetail = styled.div`
  font-size: 15px;
  margin-bottom: 40px;
  @media (max-width: 900px) {
    font-size: 11px;
  }
`;

const Container = styled.div`
  display: grid;
  gap: 180px;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #8eaec9;
  margin-bottom: 225px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #8eaec9;
  margin-bottom: 225px;
  padding-bottom: 32px;
  position: relative;
  margin-top: 120px;
  & svg {
    width: 700px;
  }

  & div {
    align-self: end;
    position: absolute;
    bottom: 32px;
    left: 0;
  }

  @media (max-width: 900px) {
    & div {
      font-size: 11px;
    }
    & svg {
      width: 600px;
    }
  }

  @media (max-width: 700px) {
    & svg {
      width: 480px;
    }
  }

  @media (max-width: 500px) {
    & div {
      font-size: 8px;
      top: 0;
    }
    & svg {
      width: 100%;
    }
  }
`;

const Container3 = styled.div`
  @media (max-width: 900px) {
    font-size: 11px;
  }
`;

const Wrapper = styled.div`
  line-height: 24px;
  border-top: 1px solid #8eaec9;
  padding-top: 28px;
  padding-bottom: 60px;

  & > div:nth-child(1) {
    font-size: 16px;
    margin-bottom: 16px;
    font-family: 'NEXON Lv1 Gothic OTF Bold';
    display: flex;
    justify-content: space-between;
  }
  & > div:nth-child(2) {
    font-size: 14px;
    width: 100%;
    & strong {
      font-family: 'NEXON Lv1 Gothic OTF Bold';
    }
  }
  @media (max-width: 900px) {
    & > div:nth-child(1) {
      font-size: 11px;
    }
    & > div:nth-child(2) {
      font-size: 11px;
    }
  }
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  border-radius: 24px;
  gap: 20px;
  font-family: 'NEXON Lv1 Gothic OTF';

  & svg {
    width: 20px;
    & path {
      stroke: #2454a6;
    }
  }
  @media (max-width: 900px) {
    font-size: 11px;
    width: 160px;
    gap: 8px;
    & svg {
      width: 15px;
    }
  }
`;

function EventPage() {
  const { isSmall, isSmallMiddle } = useResponsive();
  useEffect(() => {
    document.title = `CKMC 2022 - Event`;
  }, []);
  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="blue" />}
      <NavigationBar theme="blue" selected="EVENT" />
      <FlexCenterLayoutRelative>
        <img
          src="/statics/bg-event-top.png"
          alt="bg event top"
          style={{ position: 'absolute', top: 0, width: '100%' }}
        />
        <img
          src="/statics/bg-event-bottom.png"
          alt="bg event bottom"
          style={{ position: 'absolute', bottom: 0, width: '100%' }}
        />
        <WhiteWrapper>
          <Title>
            CKMC 크리에이티브 페어 2022 <br />
            온라인/오프라인 이벤트
          </Title>
          <Container2>
            <div>경품 안내</div>
            <ImgEventOnline />
          </Container2>
          <SubTitle>온라인 이벤트 참여 방법</SubTitle>
          <DescriptionDetail>
            *15일에 당첨된 분들에게 개별 연락을 드릴 예정입니다.
          </DescriptionDetail>
          <Container>
            <Wrapper>
              <div>
                <div>트위터 이벤트</div>
                <Button onClick={openTwitter}>
                  트위터 바로 가기 <IcArrowRight />
                </Button>
              </div>
              <div>
                <div>1. ckmc 트위터 계정을 팔로우한다.</div>
                <div>2. 계정에 있는 홍보글을 RT한다.</div>
              </div>
            </Wrapper>
            <Wrapper>
              <div>
                <div>인스타그램 이벤트</div>
                <Button onClick={openInstagram}>
                  인스타그램 바로 가기 <IcArrowRight />
                </Button>
              </div>
              <div>
                <div>
                  1. 전시사이트에 들어가 <strong>이벤트 화면을 캡쳐</strong>한다.
                </div>
                <div>
                  2. 이미지와 함께 <strong>#파도의편지</strong> 태그를 달고 게시글을 업로드한다
                </div>
              </div>
            </Wrapper>
          </Container>
          <SubTitle>오프라인 이벤트 참여 방법</SubTitle>
          <DescriptionDetail>*경품 뽑기는 1인1회 참여하실 수 있습니다.</DescriptionDetail>
          <Container3 style={{ lineHeight: '24px', marginBottom: '60px' }}>
            <div>
              1. 전시회장 <strong>입구</strong>에서 QR코드 체크인을 한 뒤 <strong>응모권</strong>을
              받는다.
            </div>
            <div>2. 전시된 작품들을 관람한다.</div>
            <div>
              3. <strong>이벤트관</strong>에 가서 응모권을 제출한 뒤 경품을 뽑는다.
            </div>
          </Container3>
          <ImgEventOffline />
        </WhiteWrapper>
      </FlexCenterLayoutRelative>
    </>
  );
}

export default EventPage;
