import React from 'react';
import GuestForm from '../../../components/Guest/Form';
import GuestList from '../../../components/Guest/List';
import { Title, FlexWrapper } from './style';

function GuestBig() {
  return (
    <>
      <Title>당신의 편지를 파도에 흘려보내 주세요</Title>
      <FlexWrapper>
        <GuestList />
        <GuestForm />
      </FlexWrapper>
    </>
  );
}

export default GuestBig;
