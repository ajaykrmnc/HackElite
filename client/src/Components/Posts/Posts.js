import React from "react";
import Post from './Post/Post';
import './styles.css';

const Posts = ({ posts, deletepost, currentUser }) => {
  const postList = posts.map((post) => (
    <div className="post-wrapper" key={post._id}>
      <Post
        details = {post}
        deletepost={deletepost}
        currentUser={currentUser}
      />
    </div>
  ));

  return <div className="posts-container">{postList}</div>;
};

export default Posts;
