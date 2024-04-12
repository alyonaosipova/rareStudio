import React, { useMemo, useReducer } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Components/Main/Main';
import useTheme from '../Components/Main/Thema';
import RegistrationPage from '../Components/Auth/RegistrationPage'



function App(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/" element={<Main toggleTheme={toggleTheme} theme={theme} />}>
          <Route path="registration" element={<RegistrationPage theme={theme} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
