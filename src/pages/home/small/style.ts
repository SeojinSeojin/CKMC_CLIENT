import styled from 'styled-components';
import { BgFooterSmall, BgTitleHeaderSmall } from '../../../components/common/Icons';

export const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const WhiteGradation = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0),
    rgb(256, 256, 256, 0.4),
    rgb(256, 256, 256, 0.6),
    rgb(256, 256, 256, 1)
  );
`;

export const SvgFooterSmall = styled(BgFooterSmall)`
  position: absolute;
  top: 100vh;
  left: 0;
  padding: 0 20px;
  padding-bottom: 20px;
  width: 100vw;
`;

export const SvgTitleSmall = styled(BgTitleHeaderSmall)`
  position: absolute;
  top: calc(100vh - 100vw * 241 / 324);
  left: 0;
  padding: 0 20px;
  width: 100vw;
`;
