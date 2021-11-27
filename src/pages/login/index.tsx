import React from 'react';
import Background from '../../components/common/Background';
import NavigationBar from '../../components/common/NavigationBar';
import LoginContainer from '../../components/Login/Container';
import LoginCopyright from '../../components/Login/Copyright';

const LoginPage: React.FC = () => (
  <>
    <NavigationBar theme='white' selected={null} />
    <Background>
      <LoginContainer />
      <LoginCopyright />
    </Background>
  </>
);

export default LoginPage;
