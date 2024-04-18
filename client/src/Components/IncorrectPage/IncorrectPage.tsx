import React from 'react';
import './incorr.css';
import { useNavigate } from 'react-router-dom';

function IncorrectPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>404</h1>
        <img className="vinil rotating-image" src="vinil.png" alt="." />
      </div>
      <button className="back" type="button" onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
    </>
  );
}

export default IncorrectPage;
