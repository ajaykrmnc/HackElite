import React from 'react';
import './sidebar.css';

const Sidebar = ({ tags, handleClick }) => {
  return (
    <div className="">
      <h2 className="">Tags</h2>
      <div className="">
        {tags.map((tag, index) => (
          <button key={index} className="btn btn-rounded" onClick={() => handleClick(tag)}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
