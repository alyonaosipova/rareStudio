import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

function AuthPage(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = (): void => {
    setIsLogin(true);
  };

  const handleRegisterClick = (): void => {
    setIsLogin(false);
  };

  return (
    <div>
      {isLogin ? (
        <>
          <LoginPage />
          <button type="button" onClick={handleRegisterClick}>
            Rega
          </button>
        </>
      ) : (
        <>
          <RegistrationPage />
          <button type="button" onClick={handleLoginClick}>
            Loga
          </button>
        </>
      )}
    </div>
  );
}

export default AuthPage;
