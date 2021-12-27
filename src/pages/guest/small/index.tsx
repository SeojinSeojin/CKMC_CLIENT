import React from 'react';
import GuestForm from '../../../components/Guest/Form';
import GuestList from '../../../components/Guest/List';
import { Wrapper, Title } from './style';

function GuestSmall() {
  return (
    <Wrapper>
      <Title>당신의 편지를 파도에 흘려보내 주세요.</Title>
      <GuestForm />
      <GuestList />
    </Wrapper>
  );
}

export default GuestSmall;
