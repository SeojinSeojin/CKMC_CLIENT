import React from 'react';
import { LogoCK, LogoCKMC } from '../../../components/common/Icons';
import StudentsByClass from '../../../components/About/Graduates';
import AboutBottomLeft from '../../../components/About/BottomLeft';
import AboutFooter from '../../../components/About/Footer';
import {
  AboutImage,
  Body,
  GridWrapper,
  LogoContainer,
  Middle,
  Title,
  TitleLogoContainer,
} from './style';
import BottomMent from '../../../components/About/BottomMent';
import TopMent from '../../../components/About/TopMent';

export default function AboutBig() {
  return (
    <>
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
            <TopMent />
            <div>
              <LogoContainer>
                <LogoCKMC />
              </LogoContainer>
              <BottomMent />
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
