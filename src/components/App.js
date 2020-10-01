import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostList } from './';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    // console.log('IN COMPONENTDID MOUNT');
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('props in RENDER', this.props);

    const { posts } = this.props;

    return (
      <div>
        <nav className="nav">
          <div className="left-div">
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
              <li>Log in</li>
              <li>Log Out</li>
              <li>Register</li>
            </ul>
          </div>
        </nav>
        <PostList posts={posts} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
