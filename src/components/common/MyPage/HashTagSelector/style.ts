import styled from 'styled-components';

interface ITag {
  isSelected: boolean;
}

export const Tag = styled.div<ITag>`
  color: ${({ isSelected }) => (isSelected ? '#2454A6' : '#8EAEC9')};
  font-weight: ${({ isSelected }) => (isSelected ? '600' : '#400')};
`;

export const Container = styled.div`
  color: #2454a6;
  display: flex;
  flex-direction: column;
  & > div {
    &:first-child {
      margin-bottom: 12px;
    }
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  font-size: 13px;
  font-family: 'Noto Sans Regular';
  margin-top: 20px;
  border-top: 1px solid #2454a6;
  border-bottom: 1px solid #2454a6;
  padding-top: 12px;
  padding-bottom: 20px;
`;

export const Warning = styled.div`
  color: #8eaec9;
  margin-top: auto;
`;
