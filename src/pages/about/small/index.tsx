import React from 'react';
import styled from 'styled-components';
import AboutBottomLeft from '../../../components/About/BottomLeft';
import BottomMent from '../../../components/About/BottomMent';
import StudentsByClass from '../../../components/About/Graduates';
import TopMent from '../../../components/About/TopMent';
import { BgAboutTitleSmall } from '../../../components/common/Icons';

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
`;

const MentWrapper = styled.div`
  font-family: Noto Sans Regular;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: -0.05em;
  & p {
    margin-bottom: 8px;
  }
`;
const TitleWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 40px;
  padding: 0 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #2454a6;
`;

function AboutSmall() {
  return (
    <Wrapper>
      <TitleWrapper>
        <BgAboutTitleSmall />
      </TitleWrapper>
      <MentWrapper>
        <TopMent />
      </MentWrapper>
      <MentWrapper>
        <BottomMent />
      </MentWrapper>
      <StudentsByClass />
      <AboutBottomLeft />
    </Wrapper>
  );
}

export default AboutSmall;
