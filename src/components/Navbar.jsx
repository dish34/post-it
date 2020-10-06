import React from 'react';
import { Link } from 'react-router-dom';
const Navabar = () => {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/"></Link>
        <img src="" at="logo"></img>
      </div>
      <div className="search-container">
        <input placeholder="Search" alt="search-icon" />
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/3532/3532842.svg"
                alt="user-dp"
              />
              <span>JohnDoe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/3532/3532842.svg"
                alt="user-dp"
              />
              <span>JohnDoe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <li className="search-results-row">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3532/3532842.svg"
            alt="user-dp"
          />
          <span>JohnDoe</span>
        </li>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navabar;
