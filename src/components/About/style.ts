import styled from 'styled-components';

interface IClassContainer {
  visible: boolean;
}
export const ClassContainer = styled.div<IClassContainer>`
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  animation: 0.4s forwards slideDown;
  padding-top: 25px;
  gap: 15px 0;

  @keyframes slideDown {
    from {
      opacity: 0.5;
      margin-top: -12px;
    }
    to {
      opacity: 1;
      margin-top: 0px;
    }
  }

  & a {
    text-align: center;
    font-family: 'Noto Sans Regular';
    color: #8eaec9;
    transition: all 0.5s;
    &:hover {
      font-weight: 900;
      color: #2454a6;
    }
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid #2454a6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const ClassWrapper = styled.div`
  margin-bottom: 30px;
`;

export const AboutWrapper = styled.div`
  height: 1070px;
  margin-top: 300px;
`;
