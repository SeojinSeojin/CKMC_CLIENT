import React from 'react';
import NavigationBar from '../../components/common/NavigationBar';
import Background from '../../components/common/Background';
import GuestList from '../../components/Guest/List';
import GuestForm from '../../components/Guest/Form';
import styled from 'styled-components';
import CursorContainer from '../../components/common/Cursor';
import useResponsive from '../../hooks/useResponsive';

export default function GuestPage() {
  const { isBig, isBigMiddle, isSmall } = useResponsive();
  return (
    <>
      {(isBig || isBigMiddle) && <CursorContainer theme="white" />}
      <NavigationBar theme={!isSmall ? 'white' : 'blue'} selected="GUEST" />
      <Background>
        <Title>당신의 편지를 파도에 흘려보내 주세요</Title>
        <FlexWrapper>
          <GuestList />
          <GuestForm />
        </FlexWrapper>
      </Background>
    </>
  );
}

const Title = styled.div`
  font-size: 24px;
  color: white;
  font-family: 'Noto Sans Regular';
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1360px;
  gap: 80px;
  margin-top: 40px;
`;
