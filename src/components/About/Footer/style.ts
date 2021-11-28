import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  width: fit-content;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
  padding: 32px 0;
  & svg {
    &:hover {
      cursor: pointer;
      & path {
        fill: #2454a6;
      }
    }
  }
`;

export const FlexWrapper = styled.div`
  border-top: 1px solid #8eaec9;
  padding-top: 32px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;

  & div:last-child {
    text-align: right;
  }
`;

export const FooterWrapper = styled.div`
  width: 70%;
  margin-left: 15%;
  padding: 20px;
  color: #8eaec9;
  font-size: 12px;
  line-height: 14px;
  word-break: keep-all;
`;
