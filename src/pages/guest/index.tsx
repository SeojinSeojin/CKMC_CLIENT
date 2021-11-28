import React from 'react';
import NavigationBar from '../../components/common/NavigationBar';
import Background from '../../components/common/Background';
import GuestList from '../../components/Guest/List';
import GuestForm from '../../components/Guest/Form';
import styled from 'styled-components';
import CursorContainer from '../../components/common/Cursor';

export default function GuestPage() {
  return (
    <>
      <CursorContainer theme="white" />
      <NavigationBar theme="white" selected="GUEST" />
      <Background>
        <div style={{ color: 'white' }}>당신의 편지를 파도에 흘려보내 주세요</div>
        <FlexWrapper>
          <GuestList />
          <GuestForm />
        </FlexWrapper>
      </Background>
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1360px;
  gap: 80px;
  margin-top: 40px;
`;
