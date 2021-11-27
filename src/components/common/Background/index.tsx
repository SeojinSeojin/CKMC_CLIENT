import React from 'react';
import { Blur, Wrapper } from './style';

interface IBackground {
  children: any;
  positionY?: number;
}

export default function Background({ children, positionY }: IBackground) {
  if (!positionY) positionY = 8;
  return (
    <Wrapper positionY={positionY}>
      <Blur>{children}</Blur>
    </Wrapper>
  );
}
