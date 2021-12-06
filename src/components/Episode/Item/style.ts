import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: grid;
  grid-template-columns: 320px auto;
  gap: 12px;
  margin-bottom: 8px;

  &:nth-child(1) {
    & > div {
      border-top: 1px solid #2454a6;
    }
  }
`;

export const ThumbnailImage = styled.img`
  width: 320px;
  height: 240px;
`;

export const Title = styled.div`
  color: #2454a6;
  font-weight: 800;
  font-size: 24px;
  margin-top: 20px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  height: 240px;
  border-bottom: 1px solid #2454a6;
`;

export const EditButton = styled.div`
  padding: 8px 12px;
  border-radius: 18px;
  color: #2454a6;
  border: 1px solid #2454a6;
  position: absolute;
  right: 0;
  bottom: 12px;
`;
