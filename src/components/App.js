import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostList, Navbar } from './';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;
const Home = () => <div>Home</div>;

class App extends Component {
  componentDidMount() {
    // console.log('IN COMPONENTDID MOUNT');
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('props in RENDER', this.props);

    const { posts } = this.props;

    return (
      <Router>
        <div>
          <Navbar />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/singnup">Signup</Link>
            </li>
          </ul>
          <PostList posts={posts} />
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
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
