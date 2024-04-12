
import React, { useMemo, useReducer } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Components/Main/Main';
import useTheme from '../Components/Main/Thema';
import RegistrationPage from '../Components/Auth/RegistrationPage'
import LoginPage from '../Components/Auth/LoginPage'




function App(): JSX.Element {

  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Main toggleTheme={toggleTheme} theme={theme} />}>
          <Route path="registration" element={<RegistrationPage  />} />
          <Route path="autarization" element={<LoginPage  />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;