import React from 'react';
import Background from '../../../components/common/Background';
import Title from '../../../components/Home';
import ReservationButton from '../../../components/Map/ReservationButton';
import { Image, TitleWrapper, ExhibitButtonWrapper } from './style';

function HomeBig() {
  return (
    <Background positionY={60} needGradient={false}>
      <TitleWrapper>
        <Title theme="blue" />
      </TitleWrapper>
      <Image src="/statics/bg-main.webp" alt="201512119_김미연" />
      <ExhibitButtonWrapper>
        <ReservationButton />
      </ExhibitButtonWrapper>
    </Background>
  );
}

export default HomeBig;
