import React from 'react';
import './sidebar.css';

const Sidebar = ({ tags, handleClick }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Tags</h2>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag" onClick={() => handleClick(tag)}>
            {tag}
          </div>
        ))}
      </div>
      <button className="button">Click Me</button>
    </div>
  );
};

export default Sidebar;
