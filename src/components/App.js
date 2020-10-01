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
