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
            Зарегистрироваться
          </button>
        </>
      ) : (
        <>
          <RegistrationPage />
          <button type="button" onClick={handleLoginClick}>
            Войти
          </button>
        </>
      )}
    </div>
  );
}

export default AuthPage;
