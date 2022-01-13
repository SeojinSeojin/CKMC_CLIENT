import styled from 'styled-components';
import BgLetter from '../../common/Icons/bg-letter.svg';
import BgLetterSmall from '../../common/Icons/bg-letter-small.svg';

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

  @media (max-width: 1400px) {
    max-width: 325px;
    width: calc(100% - 16px);
    height: 275px;
    padding-top: 23px;
    padding-right: 12px;
    padding-left: 12px;
    padding-bottom: 10px;
    margin: 8px 0;
    position: relative;
    margin-top: 30px;
    margin-bottom: 120px;
  }
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
  @media (max-width: 1400px) {
    font-size: 11px;
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

  @media (max-width: 1400px) {
    background-image: url(${BgLetterSmall});
    height: 165px;
    line-height: 22px;
    font-size: 11px;
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
  border-radius: 0;
  -webkit-border-radius: 0px;
  -webkit-appearance: none;
  z-index: 100;

  &::placeholder {
    color: rgba(256, 256, 256, 0.5);
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 1400px) {
    position: absolute;
    bottom: 12px;
    width: 55px;
    left: calc(50% - 27.5px);
    font-size: 11px;
    padding-bottom: 6px;
  }
`;

export const File = styled.label`
  color: white;
  font-size: 18px;
  @media (max-width: 1400px) {
    font-size: 10px;
    line-height: 23px;
  }
`;

export const Submit = styled.input`
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'NEXON Lv1 Gothic OTF';
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;

export const Bottom = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  margin-bottom: 20px;
  position: relative;
  @media (max-width: 1400px) {
    margin-bottom: 0;
    padding-top: 16px;
  }
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
  @media (max-width: 1400px) {
    width: 60px;
    height: 60px;
    & img {
      width: 60px;
      height: 60px;
    }
    & div {
      visibility: visible;
      top: 4px;
      right: 4px;
    }
  }
`;
