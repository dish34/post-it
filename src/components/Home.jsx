import React, { Component } from 'react';
import { PostList } from './';

class Home extends Component {
  render() {
    const { posts } = this.props;
    console.log('porops', this.props);
    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}

export default Home;
