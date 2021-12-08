import React from 'react';
import { Blur, NonBlur, Wrapper } from './style';

interface IBackground {
  children: any;
  positionY?: number;
  needGradient?: boolean;
}

export default function Background({ children, positionY, needGradient }: IBackground) {
  if (!positionY) positionY = 8;
  if (needGradient === undefined) needGradient = true;
  return (
    <Wrapper positionY={positionY}>
      {needGradient ? <Blur>{children}</Blur> : <NonBlur>{children}</NonBlur>}
    </Wrapper>
  );
}
