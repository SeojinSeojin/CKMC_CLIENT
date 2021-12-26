import styled from 'styled-components';
import BgLetter from '../../common/Icons/bg-letter.svg';

export const Wrapper = styled.form`
  width: 480px;
  height: 640px;
  padding-top: 46px;
  padding-right: 28px;
  padding-left: 28px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Title = styled.input`
  border: none;
  padding-bottom: 12px;
  color: white;
  text-align: center;
  width: 100%;
  background-color: transparent;
  font-size: 18px;

  &::placeholder {
    color: rgba(256, 256, 256, 0.5);
  }
  &:focus {
    outline: none;
  }
`;

export const Body = styled.textarea`
  background: transparent;
  background-image: url(${BgLetter});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  width: 100%;
  height: 370px;
  font-size: 18px;
  resize: none;
  line-height: 45px;
  color: white;

  &::placeholder {
    color: rgba(256, 256, 256, 0.5);
  }
  &:focus {
    outline: none;
  }
`;

export const Sender = styled.input`
  border: none;
  margin-top: 50px;
  padding-bottom: 12px;
  color: white;
  text-align: center;
  width: 25%;
  background-color: transparent;
  font-size: 18px;
  border-bottom: 1px solid white;
  align-self: flex-end;

  &::placeholder {
    color: rgba(256, 256, 256, 0.5);
  }
  &:focus {
    outline: none;
  }
`;

export const File = styled.label`
  color: white;
  font-size: 18px;
`;

export const Submit = styled.input`
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

export const Bottom = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  margin-bottom: 20px;
  position: relative;
`;

export const UploadedImage = styled.div`
  width: 140px;
  height: 140px;
  position: absolute;
  left: 0;
  bottom: 0;
  & img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    transition: all 0.4s;
  }
  & div {
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    visibility: hidden;
    cursor: pointer;
  }
  &:hover {
    & > img {
      filter: brightness(50%);
    }
    & > div {
      visibility: visible;
    }
  }
`;
