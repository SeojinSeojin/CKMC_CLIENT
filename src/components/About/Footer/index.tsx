import React from 'react';
import { IcBlog, IcFacebook, IcTwitter, IcYoutube } from '../../common/Icons';
import { FlexWrapper, FooterWrapper, GridWrapper } from './style';

function AboutFooter() {
  return (
    <FooterWrapper>
      <GridWrapper>
        <a href="https://www.youtube.com/channel/UCq8ewTM-lOtIazHUmZwbsFw/featured">
          <IcYoutube />
        </a>
        <a href="https://www.facebook.com/ckmcpage">
          <IcFacebook />
        </a>
        <a href="http://www.ckmc.co.kr">
          <IcBlog />
        </a>
        <a href="https://twitter.com/ckmchome">
          <IcTwitter />
        </a>
      </GridWrapper>
      <FlexWrapper>
        <div>
          031-637-1114 https://www.ck.ac.kr <br />
          17390 경기도 이천시 마장면 청강가창로 389-94(해월리) 청강문화산업대학교
          <br />
          ⓒ2022, 이 웹페이지에 수록된 이미지와 글은 저작권자의 동의 없이 출판, 인용, 사진 외
          영상제작 등에 이용될 수 없습니다.
        </div>
        <div>CKMC 크리에이티브 페어 2022 파도의 편지</div>
      </FlexWrapper>
    </FooterWrapper>
  );
}

export default AboutFooter;
