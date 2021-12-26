import styled from 'styled-components';

export const Header = styled.div`
  color: #2454a6;
  padding-bottom: 40px;
  margin-bottom: 50px;
  border-bottom: 1px solid #8eaec9;
  display: flex;
  gap: 40px;
  & > div {
    &:nth-child(1) {
      font-size: 32px;
      font-weight: 600;
    }
    &:nth-child(2) {
      font-size: 22px;
      align-self: flex-end;
    }
  }
`;

export const AuthorDescription = styled.div`
  display: grid;
  gap: 24px;
  align-items: center;
  color: #2454a6;
  font-size: 20px;
  padding-top: 120px;
  grid-template-columns: 120px auto 100px;
`;

export const EpisodeDescription = styled.div`
  font-size: 18px;
  line-height: 26px;
  color: #2454a6;
  padding-top: 50px;
  letter-spacing: -0.02em;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 6vh;
  margin-bottom: 6vh;
  min-height: 88vh;
  max-width: 1060px;
  padding: 0 20px;
  > * {
    font-family: 'Noto Sans Regular';
  }
`;
