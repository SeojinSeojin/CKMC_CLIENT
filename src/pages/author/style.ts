import styled from 'styled-components';

const Text = styled.div`
  color: #2454a6;
  word-break: keep-all;
`;

export const Title = styled(Text)`
  font-weight: 900;
  font-size: 30px;
  margin-top: 20px;
`;

export const Description = styled(Text)`
  font-family: 'Noto Sans Regular';
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 56px;
  min-height: 80px;
`;

export const Footer = styled.div`
  color: #8eaec9;
  border-top: 1px solid #8eaec9;
  font-size: 16px;
  margin-top: 28px;
  padding-top: 24px;
  display: flex;
  gap: 36px;
`;
