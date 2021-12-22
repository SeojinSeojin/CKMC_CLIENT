import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(256, 256, 256, 0.8);
  width: 50%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 240px;
`;

export const Title = styled.h1`
  margin-top: 60px;
  color: #2454a6;
  font-size: 44px;
  padding-bottom: 30px;
  border-bottom: 1px solid #8eaec9;
  width: 40%;
  min-width: 240px;
  text-align: center;
  font-family: 'NEXON Lv1 Gothic OTF Light';
`;

export const Inform = styled.div`
  margin-top: 106px;
  font-size: 11px;
  color: #8eaec9; ;
`;

export const Input = styled.input`
  border: 1px solid #2454a6;
  color: #2454a6;
  padding: 10px 8px;
  margin-top: 8px;
  font-size: 18px;
  background: transparent;
  font-family: 'NEXON Lv1 Gothic OTF Bold';

  &:focus {
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8eaec9;
    font-family: 'NEXON Lv1 Gothic OTF';
  }
  :-ms-input-placeholder {
    color: #8eaec9;
    font-family: 'NEXON Lv1 Gothic OTF';
  }
`;

export const Button = styled.input`
  background-color: #2454a6;
  color: white;
  border: none;
  padding: 20px 0px;
  margin-bottom: 80px;
  text-align: center;
  margin-top: 60px;
  font-size: 18px;
  font-family: 'NEXON Lv1 Gothic OTF Light';
`;
