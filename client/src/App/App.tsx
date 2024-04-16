import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Components/Main/Main';
import useTheme from '../Components/Main/Thema';
import RegistrationPage from '../Components/Auth/RegistrationPage';
import LoginPage from '../Components/Auth/LoginPage';
import MainPage from '../Components/Main/MainPage';
import ServicesList from '../Components/Services/ServicesList';
import Info from '../Components/Info/Info';

function App(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Main toggleTheme={toggleTheme} theme={theme} />}>
          <Route index element={<MainPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="services" element={<ServicesList />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
