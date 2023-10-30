import React from "react";
import "./styles.css";
import { ArchiveFill, HandThumbsUpFill, HandThumbsUp } from "react-bootstrap-icons";
import moment from "moment";
const url = `https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1615&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

const Post = (props) => {
  const {clothType, title, message, createdAt, _id, tags, selectedFile } = props.details;
  return (
    <div className="cardi mb-3">
      <div>
        <img
          className="card-img"
          src={selectedFile || url}
          alt="memoryclick"
        />
      </div>
      <hr className = "m-0 text-muted"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text m-1">{message}</p>
        <p className="card-text text-muted m-1">
            {moment(createdAt).fromNow()}
          </p>
          <div className = "d-flex text-muted">{
            tags.map((tag) =>(
             <p>#{tag}&nbsp;</p>
            ))
          }
        <p>{clothType}</p>
        </div>
        </div>
      </div>
  );
};

export default Post;
