import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Budget Manager</h1>
      <p>Manage your personal and business finances efficiently.</p>
      <div className="navigation">
        <Link className="nav-link" to="/personal">Personal Finance</Link>
        <Link className="nav-link" to="/business">Business Finance</Link>
      </div>
    </div>
  );
}

export default Home;