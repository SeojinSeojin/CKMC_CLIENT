import React from 'react';
import { Image, SvgFooterSmall, SvgTitleSmall, WhiteGradation } from './style';

function HomeSmall() {
  return (
    <>
      <Image src="/statics/bg-main.webp" alt="201512119_김미연" />
      <WhiteGradation />
      <SvgTitleSmall />
      <SvgFooterSmall />
    </>
  );
}

export default HomeSmall;
