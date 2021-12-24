import React from 'react';
import styled from 'styled-components';
import { BgAboutTitleSmall } from '../../../components/common/Icons';

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 0;
`;

const FlexWrapper = styled.div`
  margin-top: 200px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 20;
`;

function AboutSmall() {
  return (
    <Wrapper>
      <FlexWrapper>
        <BgAboutTitleSmall />
      </FlexWrapper>
      <Image src="/statics/bg-main.webp" alt="201512119_김미연" />
    </Wrapper>
  );
}

export default AboutSmall;
