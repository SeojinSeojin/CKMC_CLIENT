import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Background from '../../components/common/Background';
import { IcArrowRight } from '../../components/common/Icons';
import { openInstagram, openTwitter } from '../../utils/openExternalSiteInOuterWindow';

const WhiteWrapper = styled.div`
  background-color: rgb(256, 256, 256, 0.5);
  padding: 60px 40px;
  width: 1200px;

  @media (max-width: 1200px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 22px;
  margin-bottom: 50px;

  @media (max-width: 900px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  @media (max-width: 900px) {
    font-size: 11px;
  }
`;

const DescriptionDetail = styled.div`
  font-size: 15px;
  margin-bottom: 32px;
  @media (max-width: 900px) {
    font-size: 11px;
  }
`;

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Wrapper = styled.div`
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:nth-child(1) {
    font-size: 16px;
    margin-bottom: 16px;
  }
  & > div:nth-child(2) {
    font-size: 14px;
    width: 100%;
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
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 12px;
  border-radius: 24px;
  width: 200px;
  margin-top: 20px;

  & svg {
    width: 20px;
    & path {
      stroke: #2454a6;
    }
  }
  @media (max-width: 900px) {
    padding: 6px;
    font-size: 11px;
    width: 160px;
    gap: 8px;
    & svg {
      width: 15px;
    }
  }
`;

function EventPage() {
  useEffect(() => {
    document.title = `CKMC 2022 - Event`;
  }, []);
  return (
    <Background>
      <WhiteWrapper>
        <Title>온라인 이벤트 안내</Title>
        <Description>참여해주신 분들 중 추첨을 통해 온라인 홍보 키트를 드립니다.</Description>
        <DescriptionDetail>
          추첨일은 15일로 당첨된 분들에게는 개별 연락을 드릴 예정입니다.
        </DescriptionDetail>
        <Container>
          <Wrapper>
            <div>인스타그램 참여 방법</div>
            <div>
              <div>1. 전시사이트에 들어가 이벤트 화면을 캡쳐한다</div>
              <div>2. 이미지에 태그를 달고(#파도의편지) 게시글을 업로드한다</div>
              <div>3. 이벤트 추첨일까지 기다린다</div>
            </div>
            <Button onClick={openInstagram}>
              인스타그램 바로 가기 <IcArrowRight />
            </Button>
          </Wrapper>
          <Wrapper>
            <div>트위터 참여 방법</div>
            <div>
              <div>1. ckmc2022 트위터 계정을 팔로우한다</div>
              <div>2. 계정에 있는 홍보글을 RT한다</div>
              <div>3. 이벤트 추첨일까지 기다린다</div>
            </div>
            <Button onClick={openTwitter}>
              트위터 바로 가기 <IcArrowRight />
            </Button>
          </Wrapper>
        </Container>
      </WhiteWrapper>
    </Background>
  );
}

export default EventPage;
