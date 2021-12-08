import React from 'react';
import styled from 'styled-components';
import Background from '../../components/common/Background';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import Title from '../../components/Home';

export default function Home() {
  return (
    <>
      <CursorContainer theme="white" />
      <NavigationBar theme="blue" selected="MAIN" isOpened={true} isNotFoldable={true} />
      <Background positionY={60} needGradient={false}>
        <TitleWrapper>
          <Title theme="blue" />
        </TitleWrapper>
        {/*
        <ImageWrapper>
          <img src="/statics/bg-main.webp" alt="201512119_김미연" />
        </ImageWrapper>*/}
        <Image src="/statics/bg-main.webp" alt="201512119_김미연" />
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
  backdrop-filter: blur(4px);
  background: linear-gradient(rgba(256, 256, 256, 0.6), rgba(256, 256, 256, 1));

  & svg {
    height: calc((100vh - 28px) * 117 / 111);
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 100vh * 451 * 117 / 111 / 566 + 28px * 451 * 117 / 111 / 566 - 180px);
  height: calc((100vh - 28px) * 117 / 111 + 20px);
  overflow-y: hidden;
  & img {
    width: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 100vh * 451 * 117 / 111 / 566 + 28px * 451 * 117 / 111 / 566 - 180px);
  height: calc((100vh - 28px) * 117 / 111 + 20px);
  overflow-y: hidden;
  object-fit: cover;
`;
