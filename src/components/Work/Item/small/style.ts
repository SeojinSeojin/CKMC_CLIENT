import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  width: 100%;
  min-width: 100px;
  position: relative;
  box-sizing: border-box;

  & > img {
    width: 100%;
    border-right: #2454a6 1px solid;
  }
  &:nth-child(3n) {
    width: calc(100% - 1px);
    & > img {
      border: none;
    }
  }

  & svg {
    position: absolute;
    top: 0;
    right: 0;
  }

  & > div {
    padding: 0 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & > div:nth-child(2) {
    font-family: 'NEXON Lv1 Gothic OTF Bold';
    line-height: 30px;
    font-size: 13px;
  }

  & > div:nth-child(3) {
    line-height: 30px;
    font-size: 11px;
    color: #8eaec9;
    margin-bottom: 16px;
  }
`;
