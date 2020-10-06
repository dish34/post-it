import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostList, Navbar, Home, Page404, Login, Signup } from './';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
// const Signup = () => <div>Signup</div>;
// const Home = (props) => {
//   console.log(props);
//   return <div>Home</div>;
// };

class App extends Component {
  componentDidMount() {
    // console.log('IN COMPONENTDID MOUNT');

    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    console.log('token', token);

    if (token) {
      const user = jwtDecode(token);
      console.log('user', user);
    }
  }

  render() {
    console.log('props in RENDER', this.props);

    const { posts } = this.props;

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* <PostList posts={posts} /> */}
            <Route
              path="/"
              exact
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {/* <Route path="/logout" component={logout} /> */}
            <Route component={Page404} />
          </Switch>
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
