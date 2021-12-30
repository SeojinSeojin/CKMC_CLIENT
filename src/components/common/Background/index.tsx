import React from 'react';
import { BlueBlur, NonBlur, WhiteBlur, Wrapper } from './style';

interface IBackground {
  children: any;
  positionY?: number;
  needGradient?: boolean;
  blurColor?: 'blue' | 'white';
}

export default function Background({ children, positionY, needGradient, blurColor }: IBackground) {
  if (!positionY) positionY = 8;
  if (needGradient === undefined) needGradient = true;
  if (blurColor === undefined) blurColor = 'blue';
  return (
    <Wrapper positionY={positionY}>
      {!needGradient ? (
        <NonBlur>{children}</NonBlur>
      ) : blurColor === 'blue' ? (
        <BlueBlur>{children}</BlueBlur>
      ) : (
        <WhiteBlur>{children}</WhiteBlur>
      )}
    </Wrapper>
  );
}
