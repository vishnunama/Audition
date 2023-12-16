import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectLanguage.css'; // Import your CSS file

function SelectLanguage() {
  const navigate = useNavigate();

  return (
    <div className="language-container">
     <div className="language-container-in">
      <div>
      <h1 className="form-title">Fill Up This Form</h1>
      <h3 className="language-option" onClick={() => navigate("/RegistrationPage")}>English</h3>
      <h3 className="language-option" onClick={() => navigate("/HindiRegistrationPage")}>Hindi</h3>
      </div>
     </div>
    </div>
  );
}

export default SelectLanguage;
