import React from 'react';
import styled from 'styled-components';
import Background from '../../components/common/Background';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import Title from '../../components/Home';

export default function Home() {
  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="MAIN" isOpened={true} />
      <Background positionY={60}>
        <TitleWrapper>
          <Title theme="blue" />
        </TitleWrapper>
        <ImageWrapper>
          <img src="/statics/bg-main.webp" alt="201512119_김미연" />
        </ImageWrapper>
      </Background>
    </>
  );
}

export const TitleWrapper = styled.div`
  left: 0;
  position: absolute;
  height: 100vh;
  padding-top: 20px;
  padding-left: 180px;
  background: linear-gradient(
    rgba(256, 256, 256, 0.1),
    rgba(256, 256, 256, 0.3),
    rgba(256, 256, 256, 0.5),
    rgba(256, 256, 256, 0.7),
    rgba(256, 256, 256, 1)
  );
  backdrop-filter: blur(1px);

  & svg {
    height: calc(100vh - 28px);
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 100vh * 451 / 566 + 28px * 451 / 566 - 180px);
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  & img {
    width: 100%;
  }
`;
