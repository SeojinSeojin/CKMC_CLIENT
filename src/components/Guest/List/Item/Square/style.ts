import styled from 'styled-components';

export const SquareItem = styled.div`
  width: 260px;
  border: 1px solid white;
  margin-left: 0;
  padding: 10px;
  & img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin: 0 44px;
    box-sizing: border-box;
  }
  & div {
    color: white;
  }
  @media (max-width: 1400px) {
    width: 325px;
    & img {
      width: 145px;
      height: 145px;
      margin: 0 90px;
    }
  }
`;

export const Header = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 14px;
  line-height: 25px;
  margin: 6px 0;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`;

export const Sender = styled.div`
  text-align: right;
  font-size: 12px;
  line-height: 25px;
  margin-top: 20px;
`;

export const Body = styled.div`
  line-height: 30px;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  word-break: keep-all;
`;
