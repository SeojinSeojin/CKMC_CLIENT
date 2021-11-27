import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Button, Form, Inform, Input, Title, Wrapper } from './style';

export default function LoginContainer() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [existAuthor, setExistAuthor] = useState<string | null>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const postLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!idRef.current || !pwRef.current) return;
    const postResponse = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: idRef.current.value,
        password: pwRef.current.value,
      }),
    });
    if (postResponse.status === 400) {
      const text = await postResponse.text();
      setErrorMessage(text);
    } else {
      window.location.href = '/mypage';
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const getResponse = await fetch('/api/get_user');
      if (getResponse.status === 200) {
        const responseData = await getResponse.json();
        setExistAuthor(responseData.author.nickName);
      } else console.log('아직 로그인하지 않았습니다.');
    };
    getUserInfo();
  }, []);

  return (
    <Wrapper>
      <Title>LOG IN</Title>
      <Inform>아이디와 비밀번호가 기억나지 않으실 경우 졸준위에 문의 바랍니다.</Inform>
      <Form onSubmit={postLogin}>
        <Input type="text" placeholder="ID" ref={idRef} />
        <Input type="password" placeholder="Password" ref={pwRef} />
        <Button type="submit" value="LOG IN" />
        <div style={{ color: 'red', paddingBottom: 20, textAlign: 'center' }}>{errorMessage}</div>
        {existAuthor && (
          <div
            style={{
              textAlign: 'center',
              paddingBottom: 20,
              fontSize: 12,
              color: '#2554A5',
              width: '100%',
              lineHeight: '18px',
            }}
          >
            <div>{existAuthor}(으)로 이미 로그인되어있습니다.</div>
            <a href="/mypage" style={{ borderBottom: '1px solid #2554A5' }}>
              마이페이지 바로가기
            </a>
          </div>
        )}
      </Form>
    </Wrapper>
  );
}
