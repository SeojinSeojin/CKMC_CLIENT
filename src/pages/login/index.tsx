import React, { useEffect } from 'react';
import Background from '../../components/common/Background';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import LoginContainer from '../../components/Login/Container';
import LoginCopyright from '../../components/Login/Copyright';

function LoginPage() {
  useEffect(() => {
    document.title = 'CKMC 2022 - Login';
  }, []);
  return (
    <>
      <CursorContainer theme="white" />
      <NavigationBar theme="white" selected={null} />
      <Background>
        <LoginContainer />
        <LoginCopyright />
      </Background>
    </>
  );
}

export default LoginPage;
