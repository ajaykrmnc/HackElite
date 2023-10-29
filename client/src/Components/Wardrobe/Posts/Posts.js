import React from "react";
import Post from './Post/Post';
import './styles.css';

const Posts = ({ posts, cloth , deletepost, currentUser }) => {
  const postList = (posts || []).map((post)=> (
    (post.category == cloth) && 
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
