import React from 'react';
import PersonalFinance from '../components/PersonalFinance';
import './Personal.css';

function Personal() {
  return (
    <div className="personal-page">
      <h1>Personal Finance</h1>
      <PersonalFinance />
    </div>
  );
}

export default Personal;