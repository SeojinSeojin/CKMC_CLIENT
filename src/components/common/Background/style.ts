import styled from 'styled-components';

interface IWrapper {
  positionY: number;
}
export const Wrapper = styled.div<IWrapper>`
  background-image: url('/statics/bg-main.webp');
  background-repeat: no-repeat;
  background-position-y: ${(props) => props.positionY}%;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Blur = styled.div`
  background: linear-gradient(
    rgb(255 255 255 / 92%),
    rgb(42 116 193 / 60%),
    rgba(45, 96, 160, 0.8),
    rgb(6 54 131 / 86%)
  );
  backdrop-filter: blur(6px);
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
