import React, { FormEvent, useRef } from 'react';
import { postFetcher } from '../../../utils/fetchers';
import { Button, Form, Inform, Input, Title, Wrapper } from './style';
import { isAllFilled } from '../../../utils/nullOrEmptyChecker';
import { toast } from 'react-toastify';
import { useUser } from '../../../hooks/useUser';

export default function LoginContainer() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const { author } = useUser();

  const login = async (e: FormEvent) => {
    e.preventDefault();
    const loginPromise = new Promise((resolve, reject) => {
      if (!isAllFilled(idRef.current?.value, pwRef.current?.value))
        reject('ref가 초기화되지 않았습니다.');
      postFetcher('/api/user/login', {
        id: idRef.current?.value,
        password: pwRef.current?.value,
      }).then((res) => {
        if (res.status === 200) {
          resolve('로그인 성공');
          window.location.href = '/mypage';
        } else reject('로그인 실패');
      });
    });
    toast.promise(loginPromise, {
      pending: '로그인 중입니다',
      success: '로그인에 성공했습니다.',
      error: '로그인에 실패했습니다.',
    });
  };

  return (
    <Wrapper>
      <Title>LOG IN</Title>
      <Inform>아이디와 비밀번호가 기억나지 않으실 경우 졸준위에 문의 바랍니다.</Inform>
      <Form onSubmit={login}>
        <Input type="text" placeholder="ID" ref={idRef} />
        <Input type="password" placeholder="Password" ref={pwRef} />
        <Button type="submit" value="LOG IN" />
        {author && (
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
            <div>{author.name}(으)로 이미 로그인되어있습니다.</div>
            <a href="/mypage" style={{ borderBottom: '1px solid #2554A5' }}>
              마이페이지 바로가기
            </a>
          </div>
        )}
      </Form>
    </Wrapper>
  );
}
