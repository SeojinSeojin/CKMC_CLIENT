import React from 'react';
import styled from 'styled-components';
import AboutBottomLeft from '../../../components/About/BottomLeft';
import BottomMent from '../../../components/About/BottomMent';
import AboutFooter from '../../../components/About/Footer';
import StudentsByClass from '../../../components/About/Graduates';
import TopMent from '../../../components/About/TopMent';
import { BgAboutTitleSmall, LogoCKMC } from '../../../components/common/Icons';

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
`;

const MentWrapper = styled.div`
  font-family: 'Noto Sans Regular';
  font-size: 10px;
  line-height: 16px;
  letter-spacing: -0.05em;
  & p {
    margin-bottom: 8px;
  }
  & svg {
    width: 45px;
    height: 30px;
    margin-bottom: 30px;
  }
  & > div:nth-child(1) {
    margin-bottom: 160px;
  }
`;
const TitleWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 40px;
  padding: 0 4px;
  padding-bottom: 30px;
  border-bottom: 1px solid #2454a6;
  & svg {
    max-width: 360px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px;
  & > div {
    height: 100vh;
    overflow-y: scroll;
    & > img {
      width: 50px;
    }
    &:nth-child(1) {
      & > img {
        margin-top: calc(100vh - 270px);
      }
    }
    &:nth-child(2) {
      padding: 0 12px;
    }
    &:nth-child(3) {
      & > img {
        margin-top: 43px;
      }
    }
  }
`;

function AboutSmall() {
  return (
    <GridWrapper>
      <div>
        <img src="/statics/about-left.webp" alt="left" />
      </div>
      <Wrapper>
        <TitleWrapper>
          <BgAboutTitleSmall />
        </TitleWrapper>
        <MentWrapper>
          <TopMent />
        </MentWrapper>
        <MentWrapper>
          <LogoCKMC />
          <BottomMent />
        </MentWrapper>
        <StudentsByClass />
        <AboutBottomLeft />
        <AboutFooter />
      </Wrapper>
      <div>
        <img src="/statics/about-right.webp" alt="right" />
      </div>
    </GridWrapper>
  );
}

export default AboutSmall;
