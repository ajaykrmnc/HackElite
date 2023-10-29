import React from "react";
import "./styles.css";
import { ArchiveFill, HandThumbsUpFill, HandThumbsUp } from "react-bootstrap-icons";
import moment from "moment";
const url = `https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1615&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

const Post = (props) => {
  const {clothType, title, message, creatorId, createdAt, _id, tags, selectedFile } = props.details;
  return (
    <div className="cardi mb-3">
      <div>
        <img
          className="card-img"
          src={selectedFile || url}
          alt="memoryclick"
        />
        {props.currentUser.uid === creatorId && (
          <button
            type="button"
            className="btn position-absolute top-0 end-0 m-2"
            onClick={() => props.deletepost(_id)}
          >
            <ArchiveFill />
          </button>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{message}</p>
        <div className="text-muted">
            {moment(createdAt).fromNow()}
          </div>
        </div>
        <div style = {{display: 'flex'}}>{
            tags.map((tag) =>(
             <p>#{tag}&nbsp;</p>
            ))
        }
        <p>{clothType}</p>
        </div>
      </div>
  );
};

export default Post;
