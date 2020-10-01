import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/3532/3532842.svg"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <div className="post-like">
                  <img src="" alt="like-icon" />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icons">
                  <img src="" alt="like-icon" />
                  <span>{post.comments.length}</span>
                </div>
              </div>

              <div className="post-comment-box">
                <input placeholder="Start typing a comment"></input>
              </div>

              <div className="post-comments-lists">
                <div className="post-comments-item">
                  <div className="post-comments-header">
                    <span className="post-comment-author"></span>
                    <span className="post-comment-time"></span>
                    <span className="post-comment-likes"></span>
                  </div>

                  <div className="pos-comment-content">Random commnet</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default PostList;
