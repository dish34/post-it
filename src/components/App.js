import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostList, Navbar, Home, Page404, Login, Signup, Settings } from './';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import { getAuthTokenFromLocalStrorage } from '../helpers/utils';
// const Signup = () => <div>Signup</div>;
// const Home = (props) => {
//   console.log(props);
//   return <div>Home</div>;
// };

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component } = privateRouteProps;
  console.log(
    'isLoggedin, path, component: Component',
    isLoggedin,
    path,
    Component
  );
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  componentDidMount() {
    // console.log('IN COMPONENTDID MOUNT');

    this.props.dispatch(fetchPosts());
    const token = getAuthTokenFromLocalStrorage();
    console.log('token', token);

    if (token) {
      const user = jwtDecode(token);
      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          name: user.name,
          _id: user._id,
        })
      );
    }
  }

  render() {
    console.log('props in RENDER', this.props);

    const { posts, auth } = this.props;

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
            <PrivateRoute
              path="/settings"
              component={Settings}
              isLoggedin={auth.isLoggedin}
            />
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
    auth: state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
