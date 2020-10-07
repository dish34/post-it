import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

class Navbar extends Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };
  render() {
    const { auth } = this.props;
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
          {auth.isLoggedin && (
            <li className="user">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/3532/3532842.svg"
                alt="user-dp"
                id="user-dp"
              />
              <span>{auth.user.name}</span>
            </li>
          )}
        </div>
        <div className="nav-links">
          <ul>
            {!auth.isLoggedin && (
              <li>
                <Link to="/login">Log in</Link>
              </li>
            )}
            {auth.isLoggedin && (
              <li onClick={this.logOut}>
                <Link to="/logout">Log Out</Link>
              </li>
            )}
            {!auth.isLoggedin && (
              <li>
                <Link to="/signup">Register</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
