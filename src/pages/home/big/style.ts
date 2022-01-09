import styled from 'styled-components';

export const TitleWrapper = styled.div`
  left: 0;
  position: absolute;
  height: 100vh;
  padding-top: 20px;
  padding-left: 180px;
  backdrop-filter: blur(4px);
  background: linear-gradient(rgba(256, 256, 256, 0.6), rgba(256, 256, 256, 1));

  & svg {
    height: calc((100vh - 8px) * 117 / 111);
    padding-bottom: 20px;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 100vh * 451 * 117 / 111 / 566 + 48px * 451 * 117 / 111 / 566 - 180px);
  height: calc((100vh - 8px) * 117 / 111 + 20px);
  overflow-y: hidden;
  object-fit: cover;
`;

export const ExhibitButtonWrapper = styled.div`
  position: absolute;
  right: calc(
    (100% - 100vh * 451 * 117 / 111 / 566 + 48px * 451 * 117 / 111 / 566 - 180px) / 2 - 143px
  );
  bottom: 20px;
  animation: upDown 3s infinite;

  & > div {
    background-color: white;
    & > div {
      color: #2454a6;
    }
    & > svg {
      & > path {
        stroke: #2454a6;
      }
    }
  }

  @keyframes upDown {
    0%,
    100% {
      bottom: 20px;
    }
    30% {
      bottom: 40px;
    }
  }
`;
