import React from 'react';
import Background from '../../components/common/Background';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import Title from '../../components/Home';
import { Image, TitleWrapper } from './style';

export default function Home() {
  return (
    <>
      <CursorContainer theme="white" />
      <NavigationBar theme="blue" selected="MAIN" isOpened={true} isNotFoldable={true} />
      <Background positionY={60} needGradient={false}>
        <TitleWrapper>
          <Title theme="blue" />
        </TitleWrapper>
        <Image src="/statics/bg-main.webp" alt="201512119_김미연" />
      </Background>
    </>
  );
}
