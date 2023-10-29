import React from 'react';
import './sidebar.css';

const Sidebar = ({ tags, handleClick }) => {
  return (
    <div className="">
      <h3 className="">Tags</h3>
      <hr/>
      <div className="">
        {tags.map((tag, index) => (
          <button key={index} className="btn btn-rounded btn-primary m-1" onClick={() => handleClick(tag)}>
            {tag}
          </button>
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default Sidebar;
